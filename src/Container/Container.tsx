import React from 'react'
import IProps from '../Interfaces/IProps';
import IState from '../Interfaces/IState';
import * as s from './container.css'
export default class Container extends React.Component<IProps,IState>{
    constructor(props){
        super(props);
    }


    render(){
        return(
            <h1 className={s.foo}>Container class where everything in the project goes...</h1>
        );
    }
}