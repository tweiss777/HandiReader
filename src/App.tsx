// Import libraries and other created react components here below.
import React from 'react';
import ReactDOM from 'react-dom';
// This is the root component where each component in our app will be nested.
const Index = () => {
    
    return <div>
        React has succesfully rendered in the window
    </div>
}

console.log("Rendering content in Electron window");
ReactDOM.render(<Index />,document.getElementById("root"));