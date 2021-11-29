import { useState, useEffect, MouseEvent } from "react"
//components
import CreateMagicItemMenu from "../../Widgets/UserContent/CreateMagicItem/CreateMagicItemMenus"
import MagicItemList from "../../Modules/MagicItemList/MagicItemList"
import CustomContentBar from "../../Modules/CustomContentBar/CustomContentBar"
import SpellList from "../../Modules/SpellList/SpellList"
import CreateSpellMenu from "../../Widgets/UserContent/CreateSpell/CreateSpellMenu"
//API
import { apiGetMagicItems } from "../../API/Content/MagicItems/MagicItems"
import { apiGetSpells } from "../../API/Content/Spells/Spells"
//Interfaces
import { IMagicItem } from "../../Interface/CustomContent/Items/Items"
import { ISpells } from "../../Interface/CustomContent/Spells/Spells"


const UserContent = () => {

    const [magicItems, setMagicItems] = useState<IMagicItem[]>([])
    const [spells, setSpells] = useState<ISpells[]>([])

    const [magicItemSubmitted, setMagicItemSubmitted] = useState<boolean>(false)
    const [createMenu, setCreateMenu] = useState<boolean>(false)
    const [currentTab, setCurrentTab] = useState<string>("magic item")

    const getItems = async() => {
        let magicData = await apiGetMagicItems()
        setMagicItems(magicData.items)
        let spellData = await apiGetSpells()
        setSpells(spellData.items)

    }
    useEffect(() => {
        getItems()
    },[])

    const onSubmit = () => {
        setMagicItemSubmitted(true)
    }

    const onClick = (event: MouseEvent) => {
        if(!(event.target instanceof HTMLButtonElement)) return;
        setCurrentTab(event.target.value)
    }

    return(
        <div>
            <h1>Create</h1>
            {createMenu &&(
                <div>
                    <CreateSpellMenu />
                    <CreateMagicItemMenu onSubmit={onSubmit}/>
                </div>
            )}
            <CustomContentBar onClick={onClick}/>
            {currentTab === "magic item" && (
                <MagicItemList data={magicItems}/>
            )}
            {currentTab === "spell" && (
                <SpellList data={spells}/>
            )}
        </div>
    )
}
export default UserContent