// Import libraries and other created react components here below.
import React from 'react';
import ReactDOM from 'react-dom';
import Container from './Container/Container'
// This is the root component where each component in our app will be nested.
const Index = () => {
    // Place your main container beneath the div tags
    return <Container />
}

console.log("Rendering content in Electron window");
ReactDOM.render(<Index />,document.getElementById("root"));