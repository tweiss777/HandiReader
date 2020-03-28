import React from "react";
import IProps from "../Interfaces/IProps";
import IState from "../Interfaces/IState";
import * as s from './SideBar.css';
import {extractContent} from "../docx_parser/docx";
export default class SideBar extends React.Component<IProps,IState>{
    fileReference: React.RefObject<HTMLInputElement>;
    constructor(props){
        super(props);
        
        // method bind
        this.speakText = this.speakText.bind(this)
        this.fileReference = React.createRef();
    }
    
    handleSubmit = (event) =>{ 
        extractContent(this.fileReference.current.files[0].path).then((res) =>{
            this.props.handleText(res)
        })
        event.preventDefault();
        
    }
    
    // this will utilize a text to speech api.
    speakText(){console.log("Speech Button Pressed")}


    render(){
        return(
            <div className={s.sideBarStyling}>
                
{/*                     
                    <button className={[s.sideBarBtn, s.primary].join(' ')} onClick={this.openFile}>Open</button> */}
                    <form onSubmit={this.handleSubmit}>

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