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
        return(
            <p className={h.testClass}>{text}</p>
            )
    }

}