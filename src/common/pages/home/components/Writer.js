import React, { PureComponent } from 'react'
import { WriterWrapper } from '../style'
class Writer extends PureComponent {
	render(){
		return (
			<WriterWrapper>
				<div className="header">
					<span className="left">推荐作者</span>
					<span className="right">
						<i className="iconfont">&#xe851;</i>换一批
					</span>
				</div>
				
				<a href='https://github.com/smalllx'>
				<div className="authorInfo">
					<div className="left">
						<img src={require('./img/writer.jpg')} alt="" />
						<div className="name">smalllx</div>
						<div className="desc">点击进入github</div>
					</div>
					<div className="concern">
						<i className="iconfont">&#xe600;</i>关注
					</div>
				</div>
				</a>
				<a href='https://github.com/smalllx'>
				<div className="authorInfo">
					<div className="left">
						<img src={require('./img/writer.jpg')} alt="" />
						<div className="name">smalllx</div>
						<div className="desc">点击进入github</div>
					</div>
					<div className="concern">
						<i className="iconfont">&#xe600;</i>关注
					</div>
				</div>
				</a>
				<a href='https://github.com/smalllx'>
				<div className="authorInfo">

					<div className="left">
						<img src={require('./img/writer.jpg')} alt="" />
						<div className="name">smalllx</div>
						<div className="desc">点击进入github</div>
					</div>
					<div className="concern">
						<i className="iconfont">&#xe600;</i>关注
					</div>
				</div>
			</a>
			</WriterWrapper>
			)
	}
}
export default Writer;