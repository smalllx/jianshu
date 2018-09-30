import { combineReducers } from 'redux-immutable';
import headerReducer from '../common/header/store/reducer';
import homeReducer from '../common/pages/home/store/reducer';
import detailReducer from '../common/pages/detail/store/reducer';
import loginReducer from '../common/pages/login/store/reducer';

const reducers = combineReducers({
	header:headerReducer,
	home:homeReducer,
	detail:detailReducer,
	login:loginReducer
})
export default reducers
