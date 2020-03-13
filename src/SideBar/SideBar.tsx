import React from "react";
import IProps from "../Interfaces/IProps";
import IState from "../Interfaces/IState";
import * as s from './SideBar.css';
export default class SideBar extends React.Component<IProps,IState>{
    fileReference: React.RefObject<HTMLInputElement>;
    constructor(props){
        super(props);
        
        // method binds
        this.openFile = this.openFile.bind(this);
        this.speakText = this.speakText.bind(this)
        this.fileReference = React.createRef();



    }
    // this will use the docx reader installed from npm
    openFile(event){
        event.preventDefault();
        console.log("File name")
        console.log(this.fileReference.current.files[0]);
    }
    
    // this will utilize a text to speech api.
    speakText(){console.log("Speech Button Pressed")}


    render(){
        return(
            <div className={s.sideBarStyling}>
                
{/*                     
                    <button className={[s.sideBarBtn, s.primary].join(' ')} onClick={this.openFile}>Open</button> */}
                    <form onSubmit={this.openFile}>

                        <div className={s.btnStack}>
                            {/* Fix styling for the input tag */}
                            <input  type="file" ref={this.fileReference}/>
                        </div>

                        <div className={s.btnStack}>
                            <button className={[s.sideBarBtn,s.primary].join(' ')} type="submit">Open</button>
                        </div>
                    </form>
            
                <div className={s.btnStack}>
                    <button className={[s.sideBarBtn, s.primary].join(' ')} onClick={this.speakText}>Speech</button>
                </div>
            </div>
        );
    }


}