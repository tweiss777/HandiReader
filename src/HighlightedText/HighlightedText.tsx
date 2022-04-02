import React, { MouseEventHandler, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import IProps from '../Interfaces/IProps';
import * as h from './HighlightedText.css';
import {useSpeechSynthesis} from 'react-speech-kit'


export default function HighlightedText(props: IProps){


    const {speak,stop} = useSpeechSynthesis()
    var text: string = props.highlightedText as string;
    
    const UnHighlightText = (event) => {
        console.log("un-highlighting text");
        props.unhighlightText();
        
    }   

    const speakText: MouseEventHandler = () => {
        console.log("speaking text")
        
    }
    return(
        <div className={h.highlightContainer}>
            <p onClick={UnHighlightText} className={h.highlightedText}>{text}</p>
            <Button onClick={speakText}>Speak text</Button>

        </div>
    ) 
}