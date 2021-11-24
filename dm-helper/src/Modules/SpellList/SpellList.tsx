import { ISpells } from "../../Interface/CustomContent/Spells/Spells"
import SpellListItem from "./SpellListItem"

type props = {
    data: ISpells[]
}

const SpellList = ({data}: props) => {
    
    return(
        <div>
            {data.map((item) => 
                <SpellListItem 
                    data={item}
                />
            )}
        </div>
    )
}
export default SpellList