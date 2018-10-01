import styled from 'styled-components';
import logopic from '../../static/logo.png'

export const HeaderWrap = styled.div`
	position: relative;
	height:58px;
	border-bottom: 1px solid red;
`
export const Logo = styled.div`
	position: absolute;
	height:58px;
	width:100px;
	top:0;
	left:0;
	background: url(${logopic});
	background-size: contain;
`
export const Nav = styled.div`
	width:960px;
	margin:0 auto;
	padding-right:150px;
	box-sizing:border-box;
	.left{
		display:inline-block;
	}
	.right{
		display:inline-block;
		margin-left:460px;
	}
`
export const NavItem = styled.div`
	&.inline{
		color:#969696;
	}
	&.active{
		color:#ea6f5a;
		font-size:18px;
	}
	color:#333;
	line-height:56px;
	padding:0 25px;
	cursor:pointer;
	display:inline-block
`
export const Search = styled.input.attrs({
	placeholder:'search'
})`
	width:160px;
	height:38px;
	padding:0 32px 0 20px;
	box-sizing:border-box;
	margin-top:9px;
	margin-left:20px;
	border-radius:19px;
	border:none;
	outline:none;
	background:#eee;
	font-size:14px
	transition:width .5s;

	&::placeholder{
		color:#999;
	}
	&.focused{
		width:260px;
		transition:all .5s;
	}
`
export const Addition = styled.div`
	position:absolute;
	right:0;
	top:0;
	height:56px;
`
export const Button = styled.button`
	float:right;
	margin-top:9px;
	line-height:38px;
	border-radius:19px;
	border:1px solid #ea6f5a;
	padding:0 25px;
	box-sizing:border-box;
	margin-right:20px;
	outline:none;
	&.reg{
		background:#fff;
		color:#ea6f5a;
	}
	&.write{
		padding:0 15px;
		background:#ea6f5a;
		color:#fff;
	}
`
export const SearchGroup = styled.div`
	position:absolute;
	top:0;
	left:320px;
	user-select:none;
	.fdj{
		padding:9px 15px;
		margin-left:-35px;
		border-radius:20px;
		transition:all .5s;
		&.focused{
			background:#888;
			color:#fff;
			transition:all .5s;
		}
	}
`
export const SearchList = styled.div`{
	position:absolute;
	top:56px;
	left:30px;
	z-index:9999;
	width:240px;
	padding: 15px 20px;
	box-shadow: 0 0 8px #ccc;
	background: rgb(253,253,253);

}`
export const SearchHeader = styled.div`{
	overflow:hidden;
	margin-bottom:10px;
	color:#666;
}`
export const SearchChange = styled.span`{
	position:absolute;
	right:15px;
	top:15px;
	display:block;
	font-size:13px;
	user-select:none;
	cursor:pointer;
	.changeIcon{	
		display:inline-block;
		transform-origin:center center;
		transition: all .15s ease-in;
	}
}`
export const SearchItem = styled.a`{
	margin:5px 10px 5px 0;
	display:inline-block;
	padding:5px 10px;
	border:1px solid #ccc;
	color:#777;
	font-size:12px;
	border-radius:5px
	:hover{
		background:#ea6f5a;
		color:#fff;
	}
}`