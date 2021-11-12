import CSS from 'csstype'
import { useState, MouseEvent } from "react"

//components
import Button from '../../Components/Buttons/Button/Button'
import RandomNpc from '../../Pages/Generators/NpcGen/RandomNpc'



export type GenVariant = | "npc" | "magic" | "town" | "none"

const GenContainerStyles: CSS.Properties = {
    width: "25rem",
    height: "25rem",
    border: "1px solid black",
    margin: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fffaf0"
}
const MenuStyles: CSS.Properties = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "start",
}

const GenContainer = () => {


    const [addMenuOpen, setAddMenuOpen] = useState<boolean>(false)
    const [plusMenu, setPlusMenu] = useState<boolean>(true)
    const [selectedGen, setSelectedGen] = useState<GenVariant>("none")

    const addClick = () => {
        setAddMenuOpen(true)
        setPlusMenu(false)
    }

    const onClick = (event: MouseEvent) => {
        if(!(event.target instanceof HTMLButtonElement)) return;
        if(event.target.value === "npc"){
            setSelectedGen("npc")
        }
        else if(event.target.value === "magic"){
            setSelectedGen("magic")
        }
        else if (event.target.value === "town"){
            setSelectedGen("town")
        }
        setAddMenuOpen(false)
    }

    return(
      <div style={GenContainerStyles}>
        
        {addMenuOpen &&(
            <div style={MenuStyles}>
                <Button text="NPC" value="npc" width="100%" onClick={onClick}/>
                <Button text="Magic Shop" value="magic" width="100%" onClick={onClick}/>
                <Button text="Town" value="town" width="100%" onClick={onClick}/>
            </div>
        )}
        {plusMenu &&(
            <Button 
                value="+" 
                text="+" 
                width="50px" 
                height="50px" 
                color="white"
                onClick={addClick}
            />
        )}
        {selectedGen === "npc" &&(
            <RandomNpc />
        )}
      </div>
    )
}
export default GenContainer