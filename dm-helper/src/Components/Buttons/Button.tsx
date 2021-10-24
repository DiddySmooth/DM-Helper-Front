import CSS from 'csstype'
import { MouseEvent } from "react"
export type ButtonProps = {
    className?: string;
    text: string;
    onClick?: (event: MouseEvent) => void;
    value: string;
}

const ButtonStyles: CSS.Properties = {
    backgroundColor: "black",
    color: 'white',
    padding: '0.5rem',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
    border: '1px solid white' 
}
const Button = ({className, text, onClick, value}: ButtonProps) => {
    return(
        <button 
        style={ButtonStyles}
        className={className}
        onClick={onClick}
        value={value}
        >
        {text}
        </button>
    )
}
export default Button