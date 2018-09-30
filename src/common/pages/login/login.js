import React,{ PureComponent } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { LoginWrapper } from './style'
import * as actions from './store/actionCreator'

class Login extends PureComponent {
	render(){
		const { loginflag } = this.props;
		if(!loginflag){
			return(
				<LoginWrapper>
					<input type="text" placeholder="账号" ref={(ref) => { this.account = ref}}/>
					<input type="password" placeholder="密码" ref={(ref) => { this.pwd = ref}}/>
					<button onClick = {() => 
						this.props.login(this.account,this.pwd)
					}>登录</button>
				</LoginWrapper>
			)
		}else{
			return <Redirect to='/' />
		}

	}
}
const mapState = (state) => ({
	loginflag: state.getIn(['login','loginflag'])
})
const mapDisptch = (dispatch) => ({
	login(account,pwd){
		dispatch(actions.loginAction(account.value,pwd.value))
	}
})
export default connect(mapState,mapDisptch)(Login)