import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from './store/actionCreator'
import * as logins from '../pages/login/store/actionCreator'
import { Link } from 'react-router-dom'
import { 
	HeaderWrap, Logo, Nav, 
	NavItem, Search, Addition, 
	Button, SearchGroup, SearchList,
	SearchItem, SearchHeader, SearchChange,
} from './style'
class Header extends Component {
	getListArea(){
		const { focused,list,page,total,mouseIn,mouseEnter,mouseLeave,changeList } = this.props;
		const jslist = list.toJS();
		const pageList = [];

		for (var i = (page-1)*10; i< page * 10; i++) {
			pageList.push(
				<SearchItem key={i}>{jslist[i]}</SearchItem>
				)
		}
		if (focused || mouseIn) {
			return(
			<SearchList onMouseEnter={ mouseEnter }
						onMouseLeave={ mouseLeave }
			>
				<SearchHeader>
					热门搜索
					<SearchChange 
					onClick={ () => {changeList(page,total,this.spin)} }>
						<i ref={(icon) => { this.spin = icon }} className="iconfont changeIcon">&#xe851;</i>换一批		
					</SearchChange>
				</SearchHeader>						
				{ pageList }
			</SearchList>
			)
		}else{
			return null;
		}	
	}
	render(){
		const { focused,list,loginflag,focusHandle,blurHandle,logout} = this.props;
		
		return(
		<HeaderWrap>
			<Link to='/'>
				<Logo/>
			</Link>
			<Nav>
				<div className="left">
					<NavItem className="inline active">首页</NavItem>
					<NavItem className="inline">下载App</NavItem>
				</div>
				<div className="right">				
					{
						loginflag ?
						<NavItem onClick={logout}>退出</NavItem>:
						<Link to='/login'>
							<NavItem>登录</NavItem>
						</Link>
					}
					<NavItem>
						<i className="iconfont">&#xe636;</i>
					</NavItem>				
				</div>	
				<SearchGroup>					
					<Search className={focused?'focused':''} 
							onFocus={() => focusHandle(list)}
							onBlur={blurHandle}>
					</Search>
					<i className={focused?'focused iconfont fdj':'iconfont fdj'}>
						&#xe623;
					</i>
					{this.getListArea()}
				</SearchGroup>	
			</Nav>
			<Addition>
				<Button className="write">
					<i className="iconfont" style={{marginRight:'6px'}}>&#xe61c;</i>写文章
				</Button>
				<Link to='/login'>
					<Button className="reg">注册</Button>
				</Link>
			</Addition>
		</HeaderWrap>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		//focused:state.get('header').get('focused')
		//等价于
		 focused:state.getIn(['header','focused']),
		 list:state.getIn(['header','list']),
		 page:state.getIn(['header','page']),
		 total:state.getIn(['header','total']),
		 mouseIn:state.getIn(['header','mouseIn']),
		 loginflag: state.getIn(['login','loginflag'])
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		focusHandle(list){
			//list为空时去获取数据，否则不获取
			(list.size === 0) && dispatch(actions.getList());
			dispatch(actions.focusAction());
		},
		blurHandle(){
			dispatch(actions.blurAction());
		},
		mouseEnter(){
			dispatch(actions.mouseEnterAction());
		},
		mouseLeave(){
			dispatch(actions.mouseLeaveAction());
		},
		changeList(page,total,spin){
			//截取旋转的度数
			let originA = spin.style.transform.replace(/[^0-9]/ig,'');	
				if(originA){
					originA = parseInt(originA, 10)
				}else{
					originA = 0
				}
			spin.style.transform = 'rotate('+(originA+360)+'deg)';
			(page < total)?page++:page=1;
			dispatch(actions.changePageAction(page))
		},
		logout(){
			dispatch(logins.logout())
		}
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(Header);