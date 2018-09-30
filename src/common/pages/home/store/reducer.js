import { fromJS } from 'immutable'
const defaultState = fromJS({
	topicList:[],
	articleList:[],
	recommendList:[],
	scrollnum:false,
})
export default (state = defaultState,action) => {
	switch (action.type) {
		case 'change_home_data':
		return state.merge({
			topicList:fromJS(action.topicList),
			articleList:fromJS(action.articleList),
			recommendList:fromJS(action.recommendList)
		})
		case 'toggle_show':
		 return state.set('scrollnum',action.flag)
		default:
			return state;
	}
}