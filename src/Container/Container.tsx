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
            {/* Dummy component that we will need to remove soon */}
            <h1 className={s.test}>React has successfully loaded!</h1>
                {/* Container for the sidebar */}
                <div className={s.sideBarContainer}>
                    <SideBar />
                </div>
                {/* Container for the reader */}
                <div className={[s.readerContainer,'pull-right'].join(' ')}>
                    Where the text will be read
                </div>
            </div>
            

        );
    }
}