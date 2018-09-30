import React, { PureComponent } from 'react'
import { ListItem } from '../style'
import { connect }  from 'react-redux'
import { Link } from 'react-router-dom'

class List extends PureComponent {
	render(){
		const { list } = this.props;
		return (
		<div>
		{
			list.map((item) => {
				return (
					<Link key={item.get('id')} to={'/detail/'+ item.get('id')} style={{textDecoraction: 'none'}}>
					<ListItem>
						<h3>{item.get('title')}</h3>
						<p className="title">{item.get('desc')}</p>
						<p className="author">{item.get('author')} &emsp; 
							<i className="icon iconfont">&#xe689;</i>
						 {item.get('read')}  &emsp;
						 	<i className="icon iconfont">&#xe67b;</i> 
						 {item.get('praise')}</p>
						<img className="pic" src={item.get('imgUrl')} alt=''/>
					</ListItem>
					</Link>
				)
			})

		}
			
		</div>
			)
	}
}
const mapState = (state) => ({
	list: state.getIn(['home','articleList'])
})
export default connect(mapState)(List);