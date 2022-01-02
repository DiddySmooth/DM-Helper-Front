import ButtonBar from "../../Components/ButtonBar/ButtonBar"
import { MouseEvent } from "react-router/node_modules/@types/react";
import {useState} from 'react'
import CreateSpellMenu from "../../Widgets/Create/CreateSpell/CreateSpellMenu";
import CreateMagicItemMenu from "../../Widgets/Create/CreateMagicItem/CreateMagicItemMenus";
import CreateMonsterMenu from "../../Widgets/Create/CreateMonster/CreateMonsterMenu";
const Create = () => {
    const [selectedMenu, setSelectedMenu] = useState("")

    const onClick = (event: MouseEvent) => {
        if(!(event.target instanceof HTMLButtonElement)) return;
        console.log(event.target.value)
        setSelectedMenu(event.target.value)
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
            {selectedMenu == "spell" &&(
                <CreateSpellMenu />
            )}
            {selectedMenu == "magic item" &&(
                <CreateMagicItemMenu />
            )}
            {selectedMenu == "monster" &&(
                <CreateMonsterMenu />
            )}
        </div>
    )
}
export default Create
