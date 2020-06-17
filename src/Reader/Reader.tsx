import IProps from "../Interfaces/IProps";
import IState from "../Interfaces/IState";
import React from 'react';
import * as r from './Reader.css';


export default class Reader extends React.Component<IProps,IState>{
    constructor(props){
        super(props);
        this.state = {
            hover: false,
        }

    }

    handleStrikeThrough = (event) => {
       this.props.handleStrikeThrough(event.target.value)
    }

    render(){
        var textToRender: any[] = this.props.text;
       
        // var textToRender: any[] = text.map(t =>{
        //     return <p className={r.paragraphStyle}>{t}</p>
        // })

    
        return(
            // Need to get text to strikethrough on hover
            // onMouseEnter handles events triggered when hoverring over element
            <div onMouseEnter={this.handleStrikeThrough} onMouseLeave={this.handleStrikeThrough}>
                {textToRender}
            </div>

        );
    }
}
