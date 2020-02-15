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
            <div className="container">
            <h1 className={s.test}>React has successfully loaded!</h1>
                <div className="float-left">
                    <SideBar />
                </div>
                <div className="float-right">
                    Where the text will be read
                </div>
            </div>
            

        );
    }
}