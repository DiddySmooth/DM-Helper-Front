import { MouseEvent } from "react"
import CSS from 'csstype'

//Components
import TextBox from "../../Components/TextBox/TextBox"
import image from "../../Assets/reload.png"
import PictureButton from "../../Components/Buttons/PictureButton/PictureButton"

export type GenTextBoxProps = {
    className: string;
    payload: any;
    text: string;
    onClick: (event: MouseEvent) => void;
    value: string;
}
const GenBoxStyles: CSS.Properties = {
    border: "1px solid grey",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "12rem",
    height: "20px",
    fontSize: "13px",
    padding: ".1rem"
}


const GenTextBox = ({className, text, payload, onClick, value}:GenTextBoxProps) => {
    return(
        <div style={GenBoxStyles}>
            <TextBox className={className} text={text} payload={payload}/>
            <PictureButton 
                onClick={onClick} 
                value={value}
                src={image}
            />
        </div>
    )
}
export default GenTextBox