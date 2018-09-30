import { fromJS } from 'immutable' 

const defaultState = fromJS({
	loginflag:false
})
export default (state = defaultState,action) => {
	switch (action.type) {
		case 'login_change':
			return state.set('loginflag',true);
		case 'logout':
			return state.set('loginflag',false);
		default:
			return state;
	}
}