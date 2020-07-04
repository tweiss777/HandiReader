export default interface IState {
    // declare states here

    messageShown?: boolean; //delete declaration and component
    
    // The body text itself to be presented in the Reader component.
    bodyText?: {id:number,text:string,isHovered:boolean}[],
    
    // used for hovering over the text in our reader component
    
    hover?: boolean; 
}

