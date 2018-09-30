import axios from 'axios'
const loginchange = () =>({
type: 'login_change',
	value:true
})
export const logout = () =>({
type: 'logout',
	value:false
})
export const loginAction = (account,pwd) => {
	return (dispatch) => {
		axios.get('api/login.json?account='+ account + '&pwd=' + pwd).then((res) => {
			const flag = res.data.data;
			if(flag){
				dispatch(loginchange())
			}else {
				alert('登录失败')
			}
		})
	}
}
