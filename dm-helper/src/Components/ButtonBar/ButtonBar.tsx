import Button from "../Buttons/Button/Button"
import { MouseEvent } from "react-router/node_modules/@types/react"
import { StringLiteralLike } from "typescript"
import CSS from 'csstype'

export type ButtonProps = {
    text: string;
    onClick?: (event: MouseEvent) => void;
    value: string;
    width?: string;
    height?: string;
    color?: string;
}

export type ButtonBarProps ={
    buttons: ButtonProps[];
    color?: string;
    buttonHeight?: string;
}
  
const ButtonBar = ({buttons, color, buttonHeight}: ButtonBarProps) => {
    const width = 60 / buttons.length
    const styles: CSS.Properties = {
        display: "flex",
        justifyContent: "space-between",
        width: "60vw",
        height: "3em",
        border: "solid black",
        marginTop: "6rem",
        marginBottom: "1rem",
        backgroundColor: "white"
    }

    return( 
        <div style={styles}>
            {buttons.map((button) => 
                <Button 
                    text={button.text} 
                    onClick={button.onClick} 
                    value={button.value} 
                    width={width + "em"} 
                    height={buttonHeight}
                    color={button.color}    
                />
            )

            }
        </div>
    )
}
export default ButtonBar