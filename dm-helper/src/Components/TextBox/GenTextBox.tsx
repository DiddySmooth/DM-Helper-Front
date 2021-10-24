import TextBox from "./TextBox"
import image from "../../Assets/reload.png"
import { MouseEvent } from "react"
import CSS from 'csstype'
export type GenTextBoxProps = {
    className: string;
    payload: any;
    text: string;
    onClick: (event: MouseEvent) => void;
    value?: string;
}
const GenBoxStyles: CSS.Properties = {
    border: "1px solid white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "300px",
    height: "30px",
    margin: "5px",
    marginBottom: "10px",
    backgroundColor: "black",
    color: "white",
}
const ReloadImgStyles: CSS.Properties = {
    width: "25px",
    height: "25px",
}
const ButtonImageStyles: CSS.Properties = {
    border: "none"
}

const GenTextBox = ({className, text, payload, onClick, value}:GenTextBoxProps) => {
    return(
        <div style={GenBoxStyles}>
            <TextBox className={className} text={text} payload={payload}/>
            <button onClick={onClick} value={value} style={ButtonImageStyles}>
            <img 
                src={image}
                style={ReloadImgStyles}
            />
            </button>
        </div>
    )
}
export default GenTextBox