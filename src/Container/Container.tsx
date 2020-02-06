import React from 'react'
import IProps from '../Interfaces/IProps';
import IState from '../Interfaces/IState';
import * as s from './container.css'
import Button from 'react-bootstrap/Button';
export default class Container extends React.Component<IProps,IState>{
    constructor(props){
        super(props);
    }


    render(){
        return(
            <div>
                <Button variant="danger">Buton</Button>
                <h1 className={s.foo}>Container class where everything in the project goes...</h1>
            </div>
        );
    }
}