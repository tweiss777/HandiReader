export default interface IState {
    // declare states here

    messageShown?: boolean; //delete declaration and component
    
    // The body text itself to be presented in the Reader component.
    bodyText?: {id:number,text:string,isHovered:boolean}[],
    
    // used for hovering over the text in our reader component
    
    // state var that determines if the whole text isn't highlighted
    textNotHovered?:boolean

    // state that tells us if a text is open or not
    // if open, the open button should be unclickable
    openDisabled?: boolean

    // State that holds the current filename which influences the open file button's behavior
    currentFileName?: string


    highlightedText?: string

    isSpeaking?: boolean
}


