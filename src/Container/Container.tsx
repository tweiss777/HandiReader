import React from 'react'
import IProps from '../Interfaces/IProps';
import IState from '../Interfaces/IState';
import * as c from './container.css';
import * as s from '../SideBar/SideBar.css'
import SideBar from '../SideBar/SideBar';
import Reader from '../Reader/Reader';
import * as r from '../Reader/Reader.css';

// The container is the parent class
export default class Container extends React.Component<IProps,IState>{
    // tags: {id:number,tag:HTMLElement,isHovered:boolean}[]= [];
    
    constructor(props){
        super(props);
        this.state = {
            bodyText: [{id:0,tag:<p key={0} className={r.paragraphStyle}>Enter Text Here</p>,isHovered:false}],
        }
        
    }

    handleText = (textValue) => {
      
        

        // this.setState({bodyText:textToRender});
        
    }
    
    strikeText = (text) => {
        //iterate through text
        //if text is not hovered over -->strike through

        

        this.setState({
            bodyText:text
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
                    <Reader text={this.state.bodyText} strikeText={this.strikeText}/>
                </div>
            </div>
            

        );
    }
}