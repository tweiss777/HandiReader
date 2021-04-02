import React from "react";
import IProps from "../Interfaces/IProps";
import IState from "../Interfaces/IState";
import * as s from './SideBar.css';
import {extractContent} from "../docx_parser/docx";
export default class SideBar extends React.Component<IProps,IState>{
    fileReference: React.RefObject<HTMLInputElement>;
    fileName: string;
    constructor(props){
        super(props);
        
        // method bind
        this.speakText = this.speakText.bind(this)
        this.fileReference = React.createRef();
    }
    


    // This gets called in the form submit
    handleSubmit = (event) =>{
        
        // helper method to extract text from word document
        extractContent(this.fileReference.current.files[0].path).then((res) =>{
            // this is how you pass data from the child to the parent component
            this.fileName = this.fileReference.current.files[0].name;
            this.props.handleText(res)
            this.props.updateInfo(this.fileName,true); 
        })
        console.log(this.fileReference.current.files[0].name)
        event.preventDefault();
        
    }
    
    //#region file explorer event handlers
    // add event listener for when the user opens the file explorer
    clickedFileExplorer = () =>{
        window.addEventListener('focus',this.handleFocusBack)
    }
    // remove event listener
    handleFocusBack = () =>{
        window.removeEventListener('focus',this.handleFocusBack)
    }

    // remove event listener + evaluate filename
    fileInputClicked = (event) =>{
        let fileName = event.target.files[0].name;
        console.log("event handler")
        console.log(fileName);
        if(this.props.currentFileName != fileName){
 
            this.props.updateInfo(fileName,false);
        }
        
    }

    //#endregion

    // this will utilize a text to speech api.
    speakText(){console.log("Speech Button Pressed")}


    render(){
        var disableOpenFile = this.props.openDisabled;
    
        if(!disableOpenFile){
           var openBtn = <button className={[s.sideBarBtn,s.primary].join(' ')} type="submit">Open</button>
        }
        else{
            openBtn = <button className={[s.sideBarBtn,s.primary].join(' ')} type="submit" disabled>File opened</button>
        }
        return(
            <div className={s.sideBarStyling}>
                
{/*                     
                    <button className={[s.sideBarBtn, s.primary].join(' ')} onClick={this.openFile}>Open</button> */}
                    <form onSubmit={this.handleSubmit}>

                        <div className={s.btnStack}>
                            {/* Fix styling for the input tag */}
                            <input onClick={this.clickedFileExplorer} onChange={this.fileInputClicked} type="file" ref={this.fileReference}/>
                        </div>

                        <div className={s.btnStack}>
                            {/* Once a file is loaded on to the reader
                            the file must be cleared from the file uploader and the button text potentially changed from open to clear */}
                            {openBtn}
                        </div>
                    </form>
            
                <div className={s.btnStack}>
                    <button className={[s.sideBarBtn, s.primary].join(' ')} onClick={this.speakText}>Speech</button>
                </div>
            </div>
        );
    }


}