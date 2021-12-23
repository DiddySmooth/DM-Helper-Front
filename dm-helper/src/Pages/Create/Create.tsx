import ButtonBar from "../../Components/ButtonBar/ButtonBar"
import { MouseEvent } from "react-router/node_modules/@types/react";

const Create = () => {
    const onClick = (event: MouseEvent) => {
        if(!(event.target instanceof HTMLButtonElement)) return;
        console.log(event.target.value)
    }
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
            <ButtonBar 
                buttons={buttons}
                color="black"
            />
        </div>
    )
}
export default Create
