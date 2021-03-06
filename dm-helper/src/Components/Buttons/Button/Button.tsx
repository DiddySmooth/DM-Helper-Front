import CSS from 'csstype'
import { MouseEvent } from "react"

export type ButtonProps = {
    text: string;
    onClick?: (event: MouseEvent) => void;
    value: string;
    width?: string;
    height?: string;
    color?: string;
}

const Button = ({ text, onClick, value, width, height, color}: ButtonProps) => {
    const ButtonStyles: CSS.Properties = {
        backgroundColor: `${color}`,
        color: "black",
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
        border: '1px solid white' ,
        width: `${width}`,
        height: `${height}`
    }

    return(
        <button 
        style={ButtonStyles}
        onClick={onClick}
        value={value}
        >
        {text}
        </button>
    )
}
export default Button