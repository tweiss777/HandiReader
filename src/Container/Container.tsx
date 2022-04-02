import React from 'react'
import IProps from '../Interfaces/IProps';
import IState from '../Interfaces/IState';
import * as c from './container.css';
import SideBar from '../SideBar/SideBar';
import Reader from '../Reader/Reader';
import  HighlightedText from '../HighlightedText/HighlightedText';
// The container is the parent class
export default class Container extends React.Component<IProps,IState>{
    tags: {id:number,text:string,isHovered:boolean}[]= [];
    
    constructor(props){
        super(props);
        this.state = {
            // This is the body of the text stored as a dictionary
            bodyText: [{id:0,text:"Enter Text here",isHovered:null}],
            textNotHovered: true,
            // This indicates whether to disable the open file in the sidebar container
            openDisabled: false,
            // The state stores the current filename
            currentFileName: "",
            highlightedText: "",
            isSpeaking: false


            
        }
        
    }

    //#region event handlers for sidebar component
    // Event handler gets passed in as a prop to the SideBar component
    handleText = (textValue) => {
        if(this.tags.length >=1){
            this.tags = []
            
        }
        // Set number of paragraphs hovered to 0 whenever new text is loaded
        for(let i = 0; i < textValue.length; i++) {
            this.tags.push({id:i,text:textValue[i],isHovered:false});
        }
        
        

        this.setState({bodyText:this.tags});
        
    }
    
    // event handler that disables the open file button
    // in addition to updating the current fileName 
    updateInfo = (fileName,isDiabled) =>{
        this.setState({
            openDisabled: isDiabled, 
            currentFileName: fileName,
        })
    }

    // event handler for updating state of highlighted text
    // if text is highlighed by the user, then the highlighted 
    // text component should be rendered
    highlightedText = (text) =>{
        console.log("text being passed => " + text );
        this.setState(
            {
                highlightedText: text
            },() =>
            {
                console.log("from the setState => " + this.state.highlightedText);
            });

    }

    unhighlightText = () =>{
        this.setState({
            highlightedText: "",
        })
    }

    //#endregion
    // Event handler gets passed in as a prop to the Reader component
    
    //#region event handlers for reader component
    strikeText = (id) => {
        //iterate through text
        //if text is not hovered over --> strike through
        
           this.tags[id].isHovered = true;

        //Output for debugging purposes
        this.setState({
            bodyText:this.tags,
            textNotHovered:false,
        });

    }
    // Event handler gets passed in as a prop to the Reader component
    unstrikeText = (id) =>
    {
        this.tags[id].isHovered = false;
        this.setState({
            bodyText: this.tags,
            textNotHovered:true,
            

        })
    }



    //#endregion
    // Create a handler to strike the text and set the state of bodytext

//#region render function
    render(){
        
        console.log("from the render function => " + this.state.highlightedText);

        return(
            // create a css class that will replace container fluid
            <div className={["container-fluid",c.containerHeight].join(' ')}>
                {/* Container for the sidebar */}
                <div className={c.sideBarContainer}>
                    <SideBar currentFileName={this.state.currentFileName}handleText={this.handleText} updateInfo={this.updateInfo} openDisabled={this.state.openDisabled} />
                </div>
                {/* Container for the reader */}
                {/* This is what needs to blurred when the user highlights a piece of text */}
                <div className={[c.readerContainer].join(' ')}>
                    {/* Here we can make a reader component where the text is passed as a prop */}
                    {/* This doesn't work for some reason... */}
                    {this.state.highlightedText !== ""? <HighlightedText highlightedText={this.state.highlightedText} unhighlightText={this.unhighlightText} />: null } 

                    <Reader text={this.state.bodyText} strikeText={this.strikeText}unstrikeText={this.unstrikeText}
                    docNotHovered={this.state.textNotHovered} highlightedText={this.highlightedText} />
                </div>
            </div>
            

        );
    }
    //#endregion
}