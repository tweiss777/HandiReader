import React from 'react'
import IProps from '../Interfaces/IProps';
import IState from '../Interfaces/IState';
import * as s from './container.css'
import SideBar from '../SideBar/SideBar';
// The container is the parent class
export default class Container extends React.Component<IProps,IState>{
    constructor(props){
        super(props);
    }


    render(){
        return(
            // create a css class that will replace container fluid
            <div className={["container-fluid",s.containerHeight].join(' ')}>
                {/* Container for the sidebar */}
                <div className={s.sideBarContainer}>
                    <SideBar />
                </div>
                {/* Container for the reader */}
                <div className={[s.readerContainer].join(' ')}>
                    Where the text will be read
                </div>
            </div>
            

        );
    }
}