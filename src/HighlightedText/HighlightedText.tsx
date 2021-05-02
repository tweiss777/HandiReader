import React from 'react';
import IProps from '../Interfaces/IProps';
import IState from '../Interfaces/IState';
import * as h from './HighlightedText.css';

export default class HighlightedText extends React.Component<IProps,IState>{


    constructor(props){
        super(props);
    }



    render(){
        var text: string = this.props.highlightedText as string;

        var testText: string = "Test string"
        return(
            <div className={h.highlightContainer}>
                <p style={{position:'relative',top:'45%'}}>{testText}</p>
            </div>
        ) 
        
    }

}