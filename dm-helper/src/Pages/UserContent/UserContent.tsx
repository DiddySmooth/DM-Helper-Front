import { apiGetMagicItems } from "../../API/Content/MagicItems/MagicItems"
import { IMagicItem } from "../../Interface/CustomContent/Items/Items"
import { useState, useEffect } from "react"
import TextInput from "../../Components/Inputs/Inputs"

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
                {items.map((item) => 
                <>
                    <h1>{item.name}</h1>
                </>
                )}
            </div>
            <div>
                <h1>Create Magic Item</h1>
                <form>
                    <TextInput text="Name" value="name"/>
                    <TextInput text="Description" value="Description"/>
                    <TextInput text="Name" value="name"/>
                </form>
            </div>
        </div>
    )
}
export default UserContent