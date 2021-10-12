import TextBox from "./TextBox"
import image from "../../Assets/reload.png"
import "./GenTextBox.css"
export type GenTextBoxProps = {
    className: string;
    payload: any;
    text: string;
    onClick: () => void;
}


const GenTextBox = ({className, text, payload, onClick}:GenTextBoxProps) => {
    return(
        <div className="genBox">
            <TextBox className={className} text={text} payload={payload}/>
            <img src={image} onClick={ () => onClick()} className="reloadImg"/>
        </div>
    )
}
export default GenTextBox