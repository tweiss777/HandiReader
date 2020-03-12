import React from "react";
import IProps from "../Interfaces/IProps";
import IState from "../Interfaces/IState";
import * as s from './SideBar.css';
import Button from 'react-bootstrap/Button';

import IoIosOpen from 'react-icons/io';
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
                <div className={s.btnStack}>
                    <button className={[s.sideBarBtn, s.primary].join(' ')} onClick={this.openFile}>Open</button>
                </div>
                <div className={s.btnStack}>
                    <button className={[s.sideBarBtn, s.primary].join(' ')} onClick={this.speakText}>Speech</button>
                </div>
            </div>
        );
    }


}