import React,{PureComponent} from 'react';
export default class SlidersDots extends PureComponent{
    render(){
        return (
            <div
                className = "dots"
            >
                {
                    this.props.images.map((item,index) => (
                        <span
                            key={index}
                            className={"dot "+(index === this.props.index?'active':'')}
                            onMouseOver={()=>this.props.turn(index-this.props.index)}
                        >
                        </span>
                    ))
                }
            </div>
        )
    }
}