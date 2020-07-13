import React from 'react'
import IProps from '../Interfaces/IProps';
import IState from '../Interfaces/IState';
import * as c from './container.css';
import SideBar from '../SideBar/SideBar';
import Reader from '../Reader/Reader';
// The container is the parent class
export default class Container extends React.Component<IProps,IState>{
    tags: {id:number,text:string,isHovered:boolean}[]= [];
    
    constructor(props){
        super(props);
        this.state = {
            bodyText: [{id:0,text:"Enter Text here",isHovered:null}],
            textNotHovered: true,
        }
        
    }

    handleText = (textValue) => {
        // Set number of paragraphs hovered to 0 whenever new text is loaded
        for(let i = 0; i < textValue.length; i++) {
            this.tags.push({id:i,text:textValue[i],isHovered:false});
        }
        
        this.setState({bodyText:this.tags});
        
    }
    
    strikeText = (id) => {
        //iterate through text
        //if text is not hovered over --> strike through
        
           this.tags[id].isHovered = true;

        //Output for debugging purposes
           console.log(this.tags[id].isHovered);
        this.setState({
            bodyText:this.tags,
            textNotHovered:false,
        })

    }

    unstrikeText = (id) =>
    {
        console.log("unstrikeText Called");
        this.tags[id].isHovered = false;
        this.setState({
            bodyText: this.tags,
            textNotHovered:true, 
        })
    }
    // Create a handler to strike the text and set the state of bodytext

    render(){
        
        

        return(
            // create a css class that will replace container fluid
            <div className={["container-fluid",c.containerHeight].join(' ')}>
                {/* Container for the sidebar */}
                <div className={c.sideBarContainer}>
                    <SideBar handleText={this.handleText}/>
                </div>
                {/* Container for the reader */}
                <div className={[c.readerContainer].join(' ')}>
                    {/* Here we can make a reader component where the text is passed as a prop */}
                    <Reader text={this.state.bodyText} strikeText={this.strikeText}unstrikeText={this.unstrikeText}
                    docNotHovered={this.state.textNotHovered}/>
                </div>
            </div>
            

        );
    }
}