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

    strikeText = (text) => {
        this.props.strikeText(text)
    }

    render(){
        var textToRender: any[] = this.props.text;
       
        // var textToRender: any[] = text.map(t =>{
        //     return <p className={r.paragraphStyle}>{t}</p>
        // })

    
        return(
            // Need to get text to strikethrough on hover
            // onMouseEnter handles events triggered when hoverring over element
            <div onMouseEnter={()=> this.strikeText(textToRender)} onMouseLeave={()=>this.strikeText(textToRender)}>
                {textToRender}
            </div>

        );
    }
}
