import IProps from "../Interfaces/IProps";
import IState from "../Interfaces/IState";
import React from 'react';
import * as r from './Reader.css';


export default class Reader extends React.Component<IProps,IState>{
    textToRender:any[];
    constructor(props){
        super(props);
    }

    strikeText = (id) => {
        this.props.strikeText(id)
    }

    unstrikeText = (id) => {
        this.props.unstrikeText(id);
    }

    getText = ():string => {
        // Example of type assertion
        const doc =  document as any;
        
        var text: string  = "";
        if (window.getSelection) {
            text = window.getSelection().toString();
        } else if (doc.selection && doc.selection.type != "Control") {
                console.log(doc.selection)
            console.log(doc.selection.type)
            text = doc.selection.createRange().text;
        }
        console.log(text);
        console.log(text.length);
        return text;
        
        
    }

    render(){
        // Output used for debugging purposes
        // console.log(this.props.text);
       
        // Need to unstrike text when one of the texts isn't highlighted

        if(this.props.docNotHovered){
            this.textToRender = this.props.text.map(t =>
            {
            return <p onMouseEnter={() => this.strikeText(t.id)} onMouseLeave={() => this.unstrikeText(t.id)} key={t.id}>{t.text}</p>
            })
            // Output used for debugging purposes
            // console.log("whole text not hovered.")
        }
        else{
                this.textToRender = this.props.text.map(t=>{            
                // Output used for debugging purposes
                // console.log("passing 1st if statement");
                
                if(t.isHovered && t.isHovered != null){
                    return <p className={r.paragraphStyle} key={t.id} onMouseUp={this.getText} onMouseEnter={()=> this.strikeText(t.id)} onMouseLeave={()=>this.unstrikeText(t.id)}>{t.text}</p>
                }            
                // Output used for debugging purposes
                // console.log("passing 2nd if statement");
                if(!t.isHovered && t.isHovered != null){
                    return <p className={r.paragraphStyleStrikeThrough} key={t.id} onMouseEnter={()=> this.strikeText(t.id)} onMouseLeave={()=>this.unstrikeText(t.id)}>{t.text}</p>
                }
                // Output used for debugging purposes
                // console.log("passed 1st if statement");
                return <p key={t.id}>{t.text}</p>   
            })
        }
         

        return(
            // Need to get text to strikethrough on hover
            // onMouseEnter handles events triggered when hoverring over element
            <div style={{margin:'30px'}}>
                {this.textToRender}
            </div>

        );
    }
}
