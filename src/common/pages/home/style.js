import styled from 'styled-components'

export const HomeWrapper = styled.div`
	width: 960px;
	margin: 0 auto;	
	overflow:hidden;
`
export const HomeLeft = styled.div`
	width: 625px;
	margin-left: 15px;
	margin-top: 30px;
	float: left;
`
//topic 部分的样式
export const TopicWrapper = styled.div`
	padding:20px 0 10px 0;	
	overflow:hidden;
`
export const TopicItem = styled.div`
	border: 1px solid #ccc;
	border-radius: 5px;
	font-size: 14px;
	margin-right: 25px;
	margin-bottom: 20px;
	float: left;
	background-color: #f7f7f7;
	color: #333;
	height: 32px;
	line-height: 32px;
	padding-right:10px;
	overflow:hidden;
	img{
		width:32px;
		display:block;
		float:left;
		margin-right:10px;
	}
`
// list 部分的样式
export const ListItem = styled.div`
	:hover{
		opacity:0.9;
		cursor:pointer;
	}
	position:relative;
	padding: 20px 0;
	margin-bottom:20px;
	overflow: hidden;
	border-top: 1px solid #ccc;	
	h3{
		font-weight:bold;
		font-size:18px;
		padding-bottom:10px;
		color:#333;
	}
	.title{
		width:495px;
		float:left;
		color:#777;
	}
	.author{
		display: block;
		position:absolute;
		color:#999;
		font-size:13px;
		left:0;
		bottom:0px;
	}
	.pic{
		display: block;
		position:absolute;
		right:0;
		top:15px;
		width: 125px;
		border-radius:10px;
	}
`

// 右侧区域样式
export const HomeRight = styled.div`
	width: 245px;
	margin-right:20px;
	float: right;	
`
//热门
export const Recommenddiv = styled.div`
	width:100%;
	padding:20px 0;
	.item{
		padding:10px 0 10px 30px;
		margin-top:20px;
		font-size:20px;
		height:30px;
		line-height:30px;
		border-radius:10px;
		letter-spacing:2px;
		cursor:pointer;
	}
	.item:hover{
		opacity:0.8;
	}
`
//作者推荐
export const WriterWrapper = styled.div`
	width: 100%;
	position:relative;
	padding:1px;
	.header{
		font-size:14px;
		margin-bottom:40px;
		.left{
			float:left;			
		}
		.right{
			float:right;
		}
	}
	.authorInfo{
		position: relative;
		margin-top:15px;
		padding；10px;
		width:100%;
		height:60px;
		border:1px solid rgb(234,111,90);
		border-radius:5px;
		overflow:hidden;
		cursor:pointer;
		.left{
			width: 180px;			
			img{
				width: 60px;
				height:60px;
				position: absolute;
				top: 0;
				left: 0;
			}
			.name{
				position:absolute;
				left:70px;
				top:5px;
				color:#333;
			}
			.desc{
				position:absolute;
				bottom:10px;
				left:70px;
				width:100%;
				color:#999;
			}
		}
		.concern{
			position:absolute;
			right:5px;
			top:7px;
			color:#42c02e;
		}
	}
`
//右下角的回到顶部
export const Totop = styled.div`
	position:fixed;
	right:70px;
	bottom: 50px;
	width: 100px;
	height: 50px;
	line-height: 50px;
	text-align: center;
	background-color: rgb(234,111,90);
	color: #fff;
	border-radius: 15px;
`