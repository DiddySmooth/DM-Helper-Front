import CSS from 'csstype'
import {MouseEvent, useState} from "react"
import ButtonBar from '../../Components/ButtonBar/ButtonBar'

//Components
import Button from '../../Components/Buttons/Button/Button'

type props = { 
    onClick: (event: MouseEvent) => void; 
}

const CustomContentBar = ({onClick}: props) => {

    const buttons = [{
        text: "Spell",
        value: "spell",
        onClick: onClick,
    },{
        text: "Magic Item",
        value: "magic item",
        onClick: onClick
    },{
        text: "Monster",
        value: "monster",
        onClick: onClick
    },{
        text: "Race",
        value: "race",
        onClick: onClick
    },{
        text: "Feat",
        value: "feat",
        onClick: onClick
    },{
        text: "Class",
        value: "class",
        onClick: onClick
    }]


    return(
        <div>
            <ButtonBar buttons={buttons} />
        </div>
    )
}
export default CustomContentBar