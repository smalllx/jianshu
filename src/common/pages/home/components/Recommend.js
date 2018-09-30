import React, { PureComponent } from 'react'
import { Recommenddiv } from '../style'
import { connect } from 'react-redux'

class Recommend extends PureComponent {
	render(){
	 const { list } = this.props;
		return (
		
			<Recommenddiv>
			{
				list.map((item) => {
					return (
						<div key={item.get('id')} flag='true' className="item"
						 style={{background:item.get('background'),color:item.get('color')}}>
							<h3>{item.get('title')}</h3>
						</div>
					)
				})
			}
			</Recommenddiv>
			)
	}
}
const mapState = (state) => ({
	list:state.getIn(['home','recommendList'])
})
export default connect(mapState,null)(Recommend);