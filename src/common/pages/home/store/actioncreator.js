import axios from 'axios'

const changeHomeData = (data) =>{
	return {
		type:'change_home_data',
		topicList:data.topicList,
		articleList:data.articleList,
		recommendList:data.recommendList
	}
}

export const HomeInfoAction = () =>{
	return (dispatch) => {
		axios.get('./api/home.json').then( (res) => {
			dispatch(changeHomeData(res.data))
		})
	}
}
export const toggleShow = (flag) => ({
	type:'toggle_show',
	flag
})