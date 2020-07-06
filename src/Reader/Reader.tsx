import IProps from "../Interfaces/IProps";
import IState from "../Interfaces/IState";
import React from 'react';
import * as r from './Reader.css';


export default class Reader extends React.Component<IProps,IState>{
    constructor(props){
        super(props);
        this.state = {
            hover: false, // Remove this soon
        }

    }

    strikeText = (id,highlight) => {
        this.props.strikeText(id,highlight)
    }

    render(){
        console.log(this.props.text);
       
        var textToRender:any[]= this.props.text.map(t=>{
            if(t.isHovered){
                return <p className={r.paragraphStyle} key={t.id} onMouseEnter={()=> this.strikeText(t.id,false)} onMouseLeave={()=>this.strikeText(t.id,true)}>{t.text}</p>
            }

            return <p className={r.paragraphStyleStrikeThrough} key={t.id} onMouseEnter={()=> this.strikeText(t.id,true)} onMouseLeave={()=>this.strikeText(t.id,false)}>{t.text}</p>

            
        })

        return(
            // Need to get text to strikethrough on hover
            // onMouseEnter handles events triggered when hoverring over element
            <div>
                {textToRender}
            </div>

        );
    }
}
