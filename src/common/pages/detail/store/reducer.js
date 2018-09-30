import { fromJS } from 'immutable'
const defaultState = fromJS({
	title:'',
	contant:''
})
export default (state = defaultState,action) => {
	switch (action.type) {
		case 'change_detail':
		 return state.merge({
			title:action.title,
			contant:action.contant
		 })
		default:
			return state;
	}
}