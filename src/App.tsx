// Import libraries and other created react components here below.
import React from 'react';
import ReactDOM from 'react-dom';
import Container from './Container/Container'
// import * as bootstrap from 'bootstrap/dist/css/bootstrap.css';
// This is the root component where each component in our app will be nested.
const Index = () => {
    // Place your main container beneath the div tags
    return <div className="container">
        <Container />
        React has succesfully rendered in the window
    </div>
}

console.log("Rendering content in Electron window");
ReactDOM.render(<Index />,document.getElementById("root"));