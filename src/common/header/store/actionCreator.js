import * as types from './actionTypes.js'
import axios from 'axios'
import { fromJS } from 'immutable'
export const focusAction = () => ({
	type: types.INPUT_FOCUSED
})
export const blurAction = () => ({
	type: types.INPUT_BLUR
})
export const mouseEnterAction = () => ({
	type: types.MOUSE_ENTER
})
export const mouseLeaveAction = () => ({
	type: types.MOUSE_LEAVE
})
export const changePageAction = (page) => ({
	type: types.CHANGE_PAGE,
	page
})


const listAction = (data) => ({
	type: types.CHANGE_LIST,
	list: fromJS(data),
	total: Math.ceil(data.length/10)
})
export const getList = () => {
	return (dispatch) => {
		axios.get('/api/searchlist.json').then((res) => {
			const data = res.data.list;
			//console.log(data)
			dispatch(listAction(data))
		}).catch(err => {
			console.log(err)
		})
	}
}