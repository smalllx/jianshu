import React,{PureComponent} from 'react';

export default class SlidersItem extends PureComponent{
    render(){
        let style={
            width:this.props.images.length*625+'px',
            left:this.props.index*-625+'px',
            transitionDuration:this.props.speed+'s'
        };
        return (
           <ul className="sliders" style={style}>
               {
                   this.props.images.map((item,index)=>(
                       <li
                           className="slider"
                           key={index}
                       >
                           <img src={item} alt=""/>
                       </li>
                   ))
               }
           </ul>
        )
    }
}