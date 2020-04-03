import React from 'react'
import IProps from '../Interfaces/IProps';
import IState from '../Interfaces/IState';
import * as c from './container.css';
import * as s from '../SideBar/SideBar.css'
import SideBar from '../SideBar/SideBar';
import Reader from '../Reader/Reader';

// The container is the parent class
export default class Container extends React.Component<IProps,IState>{
    constructor(props){
        super(props);
        this.state = {
            bodyText: ['Upload text here'],
        }
        
    }

    handleText = (textValue) => {

        this.setState({bodyText:textValue});
    }


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
                    <Reader text={this.state.bodyText} />
                </div>
            </div>
            

        );
    }
}