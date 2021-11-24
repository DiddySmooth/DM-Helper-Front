import CSS from 'csstype'
import {MouseEvent, useState} from "react"

//Components
import Button from '../../Components/Buttons/Button/Button'

type props = { 
    onClick: (event: MouseEvent) => void; 
}

const CustomContentBar = ({onClick}: props) => {
    
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
            <Button text="Magic Items" value="magic item" width="10rem" onClick={onClick}/>
            <Button text="Spells" value="spell" width="10rem" onClick={onClick}/>
            <Button text="Monsters" value="monster" width="10rem" onClick={onClick}/>
            <Button text="Race" value="race" width="10rem" onClick={onClick}/>
            <Button text="Feat" value="feat" width="10rem" onClick={onClick}/>
            <Button text="Class" value="class" width="10rem" onClick={onClick}/>
        </div>
    )
}
export default CustomContentBar