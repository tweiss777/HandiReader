import IProps from "../Interfaces/IProps";
import IState from "../Interfaces/IState";
import React from 'react';
import * as r from './Reader.css';


export default class Reader extends React.Component<IProps,IState>{
    constructor(props){
        super(props);

    }


    render(){
        var text: any[] = this.props.text;
        for(var i = 0; i<= text.length - 1; i++){
            if(text[i].length == 0){
                text[i] = <br />
            }
            else{
             
                text[i] = <p>{text[i]}</p>
            }
        }
        return(

            <div className={r.ReaderBorder}>
                {text}
            </div>

        );
    }
}
