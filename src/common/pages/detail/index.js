import React, { Component } from 'react'
import { DetailWrapper } from './style'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import * as actions from './store/actionCreator'
class Detail extends Component {
	render(){
		return (
			<DetailWrapper>
				<h1>{this.props.title}</h1>
				<div dangerouslySetInnerHTML = {{__html: this.props.contant}}>
				
				</div>
			</DetailWrapper>
			)
	}
	componentDidMount() {
		this.props.getDetail(this.props.match.params.id);
	}
}
const mapState = (state) => ({
	title: state.getIn(['detail','title']),
	contant: state.getIn(['detail','contant'])
})
const mapDispatch = (dispatch) => ({
	getDetail(id){
		dispatch(actions.detailAction(id))
	}
})
export default connect(mapState,mapDispatch)(withRouter(Detail));