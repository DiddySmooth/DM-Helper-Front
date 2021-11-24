import { IMagicItem } from "../../Interface/CustomContent/Items/Items"
import MagicItemListItem from "./MagicItemListItem"
type props = {
    data: IMagicItem[]    
}


const MagicItemList = ({data}: props) => {
    return(
        //change the data tables to have attunement just be a string 
        <div>
            {data.map((item) =>
                <MagicItemListItem
                    data={item}
                />
            )}
        </div>
     
    )
}
export default MagicItemList