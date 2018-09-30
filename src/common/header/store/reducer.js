import * as types from './actionTypes.js'
import { fromJS } from 'immutable' //将某个值转换成不可改变的值

const defaultState = fromJS({
	focused:false,
	mouseIn:false,
	list:[],
	page:1,
	total:1
})
export default (state = defaultState,action) => {
	switch (action.type) {
		case types.INPUT_FOCUSED:
		// set 结合之前的数据返回新的数据
			return state.set('focused',true);
		case types.INPUT_BLUR:
			return state.set('focused',false);
		case types.CHANGE_LIST:
			return state.merge({
				list: action.list,
				total: action.total
			})
		case types.MOUSE_ENTER:
			return state.set('mouseIn',true);
		case types.MOUSE_LEAVE:
			return state.set('mouseIn',false);
		case types.CHANGE_PAGE:
			return state.set('page',action.page);
		default:
			return state;
	}
}