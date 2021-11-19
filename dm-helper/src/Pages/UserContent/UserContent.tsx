import { apiGetMagicItems } from "../../API/Content/MagicItems/MagicItems"
import { IMagicItem } from "../../Interface/CustomContent/Items/Items"
import { useState, useEffect } from "react"
import TextInput from "../../Components/Inputs/TextInput"
import CreateMagicItemMenu from "../../Widgets/UserContent/CreateMagicItem/CreateMagicItemMenus"

const UserContent = () => {

    const [items, setItems] = useState<IMagicItem[]>([])
    const getItems = async() => {
        let data = await apiGetMagicItems()
        setItems(data.items)
    }
    useEffect(() => {
        getItems()
    },[])
    if(items){
        console.log(items)
    }
    
    return(
        <div>
            <div>
                {/* {items.map((item) => 
                <>
                    <h1>{item.name}</h1>
                </>
                )} */}
            </div>
            <CreateMagicItemMenu />
        </div>
    )
}
export default UserContent