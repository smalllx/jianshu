import React, { Component } from 'react'
import { HomeWrapper,HomeLeft,HomeRight } from './style'
import { connect } from 'react-redux'
import Sliders from './components/slider/sliders';
import List from './components/List'
import Topic from './components/Topic'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import * as actions from './store/actioncreator'
import { Totop } from './style'

class Home extends Component {
	totop(){
		window.scrollTo(0,0)
	}
	

	render(){
		const Img=[
		   require("./components/img/contantImg.jpg"),
		   require("./components/img/contantImg2.jpg"),
		   require("./components/img/contantImg3.jpg"),
		   require("./components/img/contantImg4.jpg")
		]
		return (
			<HomeWrapper>
				<HomeLeft>
				<Sliders
			        images={Img}
			        speed={1}
			        delay={2}
			        autoPlay={true}
			        autoParse={true}
			    />
				
					<Topic/>
					<List/>
				</HomeLeft>
				<HomeRight>
					<Recommend/>
					<Writer/>
				</HomeRight>
				 { this.props.scrollnum ? <Totop onClick={this.totop}>返回顶部</Totop> : null }

			</HomeWrapper>
			)
	}
	componentDidMount() {
		this.props.changeHomeList();
		this.bindEvents();
	}
	bindEvents(){
		window.addEventListener('scroll',this.props.scroll)
	}
}

const mapState = (state) => ({
	scrollnum : state.getIn(['home','scrollnum'])
})
const mapDispatch = (dispatch) => ({
	changeHomeList(){
		const action = actions.HomeInfoAction();
		dispatch(action);	
	},
	scroll(){
		if(document.body.scrollTop > 250 || document.documentElement.scrollTop>250){
			dispatch(actions.toggleShow(true))
		}else{
			dispatch(actions.toggleShow(false))
		}
	}

})
export default connect(mapState,mapDispatch)(Home);