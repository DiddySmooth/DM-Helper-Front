import CSS from 'csstype'
import { MouseEvent } from "react"

export type PictureButtonProps = {
    onClick: (event: MouseEvent) => void;
    value: string;
    width?: string;
    height?: string;
    src: string;
}

const PictureButton = ({onClick, value, width, height, src}: PictureButtonProps) => {
    const ReloadImgStyles: CSS.Properties = {
        width: "10px",
        height: "10px",
    }

    const ButtonStyles: CSS.Properties = {
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
            <img src={src} style={ReloadImgStyles}/>
        </button>
    )
}
export default PictureButton