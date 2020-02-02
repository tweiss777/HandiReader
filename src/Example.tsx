import React, {Component} from 'react';
import IProps from './Interfaces/IProps';
import IState from './Interfaces/IState';

// Example component that showcases how child sends data to parent component
// Note: In typescript you need to declare state and prop interfaces to use state and props in your component
export default class Parent extends Component<IProps,IState>{
    // handler: any;
    constructor(props: IProps){
        super(props);
        
        // this binds the function
        this.handler = this.handler.bind(this);

        this.state = {
            messageShown: false,
        };

    }

    handler(){
        const showMessage = this.state.messageShown? false: true;
        this.setState({
            messageShown: showMessage
        })
        console.log(this.state.messageShown);
    }

    render(){
        return(
            <Child doSomething={this.handler} />
        )
    }


}

class Child extends Component<IProps>{
    render(){
        
        return(
           <div>
               <button onClick={this.props.doSomething} />
           </div> 
        ) 
    }
}