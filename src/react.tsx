import * as React from 'react';
import * as ReactDOM from 'react-dom'

const Index = () => {
    return <div>Hello world!</div>
}

console.log("creating window")
if(typeof window !== 'undefined'){
    
} 
// this throws an error.  
ReactDOM.render(<Index/>, document.getElementById("root"));