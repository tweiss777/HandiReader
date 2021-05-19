import React from 'react';
import IProps from '../Interfaces/IProps';
import IState from '../Interfaces/IState';
import * as h from './HighlightedText.css';

export default class HighlightedText extends React.Component<IProps,IState>{


    constructor(props){
        super(props);
    }


    UnHighlightText = () => {
        console.log("un-highlighting text");
        this.props.unhighlightText();
        
    }



    render(){
        var text: string = this.props.highlightedText as string;

        // testText should be used for debugging purposes
        // var testText: string = "Test string"
        return(
            <div className={h.highlightContainer}>
                <p  className={h.highlightedText}>{text}</p>
            </div>
        ) 
        
    }

}