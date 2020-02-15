import React from "react";
import IProps from "../Interfaces/IProps";
import IState from "../Interfaces/IState";
import * as s from './SideBar.css';
import Button from 'react-bootstrap/Button';
import Glyphicon from 'react-bootstrap/lib/Glyphicon'
export default class SideBar extends React.Component<IProps,IState>{
    constructor(props){
        super(props);
        
        this.openFile = this.openFile.bind(this);
        this.speakText = this.speakText.bind(this)
    }
    openFile(){console.log("Open Button Pressed")}

    speakText(){console.log("Speech Button Pressed")}


    render(){
        return(
            <div className={s.sideBarStyling}>
                <Button variant="primary" onClick={this.openFile}>Open</Button>
                <Button variant="primary" onClick={this.speakText}>Speech</Button>
            </div>
        );
    }


}