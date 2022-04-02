export default interface IProps{
    // declare props here
    doSomething?:any; //delete declaration and component
    handleText?:any; //declaration for the handletext function
    text?:any; // declaration for the text property in the Reader component
    strikeText?:any // declaration for strikethrough function

    unstrikeText?:any // declaration for unstrikethrough function

    docNotHovered?: boolean;

    // prop function that calls the disableOpen event handler in the container component
    updateInfo?: any;

    // prop toggling whether open is disabled
    openDisabled?: any;

    // prop for the current filename
    currentFileName?: string;


    highlightedText?: any;

    unhighlightText?: any;
    speakText?: Function
}