import React, { MouseEventHandler } from 'react';
import { Button } from 'react-bootstrap';
import IProps from '../Interfaces/IProps';
import IState from '../Interfaces/IState';
import * as h from './HighlightedText.css';

export default class HighlightedText extends React.Component<IProps,IState>{


    constructor(props){
        super(props);
        this.state = {
            isSpeaking: false
            
        }
    }


    UnHighlightText = (event) => {
        // console.log(event.keyCode);
        console.log("un-highlighting text");
        this.props.unhighlightText();
        
    }

    speakText: MouseEventHandler = () => {
        console.log("speaking text")
    }

    render(){
        var text: string = this.props.highlightedText as string;

        // testText should be used for debugging purposes
        // var testText: string = "Test string"
        return(
            <div className={h.highlightContainer}>
                <p onClick={this.UnHighlightText} className={h.highlightedText}>{text}</p>
                <Button onClick={this.speakText}>Speak text</Button>

            </div>
        ) 
        
    }

}