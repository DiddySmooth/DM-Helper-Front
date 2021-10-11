import TextBox from "./TextBox"

export type GenTextBoxProps = {
    className: string;
    payload: any;
    text: string;
    image: string;
    onClick: (buttonName: string) => void;
    buttonClicked: string;
}


const GenTextBox = ({className, text, payload, image, onClick, buttonClicked}:GenTextBoxProps) => {
    return(
        <div>
            <TextBox className={className} text={text} payload={payload}/>
            <img src={image} onClick={ () => {onClick(buttonClicked)}}/>
        </div>
    )
}
export default GenTextBox