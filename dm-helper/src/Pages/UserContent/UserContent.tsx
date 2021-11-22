import { apiGetMagicItems } from "../../API/Content/MagicItems/MagicItems"
import { IMagicItem } from "../../Interface/CustomContent/Items/Items"
import { useState, useEffect } from "react"
import TextInput from "../../Components/Inputs/TextInput"
import CreateMagicItemMenu from "../../Widgets/UserContent/CreateMagicItem/CreateMagicItemMenus"
import MagicItemList from "../../Widgets/UserContent/MagicItemList/MagicItemList"

const UserContent = () => {

    const [items, setItems] = useState<IMagicItem[]>([])
    const getItems = async() => {
        let data = await apiGetMagicItems()
        setItems(data.items)
    }
    useEffect(() => {
        getItems()
    },[])

    return(
        <div>
            <CreateMagicItemMenu />
            <MagicItemList data={items}/>
        </div>
    )
}
export default UserContent