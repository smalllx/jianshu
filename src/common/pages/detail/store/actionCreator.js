import axios from 'axios'
const changeDatailAction = (title,contant) => ({
	type:'change_detail',
	title,contant
})
export const detailAction = (id) => {
	return (dispatch) => {
		axios.get('/api/detail.json?id='+id).then((res) =>{
			const title = res.data.detail.title;
			const contant = res.data.detail.contant;	
			dispatch(changeDatailAction(title,contant))		
		}).catch((err) => {
			console.log(err)
		})

	}
}