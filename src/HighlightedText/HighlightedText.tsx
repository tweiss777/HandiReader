import React, { MouseEventHandler, useState } from 'react';
import { Button } from 'react-bootstrap';
import IProps from '../Interfaces/IProps';
import IState from '../Interfaces/IState';
import * as h from './HighlightedText.css';


export default function HighlightedText(props: IProps){
    const [isSpeaking,setIsSpeaking] = useState<boolean>(false)
    
    var text: string = props.highlightedText as string;
    
    const UnHighlightText = (event) => {
        // console.log(event.keyCode);
        console.log("un-highlighting text");
        props.unhighlightText();
        
    }

    const speakText: MouseEventHandler = () => {
        console.log("speaking text")
    }
    // testText should be used for debugging purposes
    // var testText: string = "Test string"
    return(
        <div className={h.highlightContainer}>
            <p onClick={UnHighlightText} className={h.highlightedText}>{text}</p>
            <Button onClick={speakText}>Speak text</Button>

        </div>
    ) 
}