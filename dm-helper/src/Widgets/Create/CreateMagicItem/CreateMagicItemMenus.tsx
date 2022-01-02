import { useState } from "react"
import CSS from 'csstype'
//Components
import TextInput from "../../../Components/Inputs/TextInput"
import TextAreaInput from "../../../Components/Inputs/TextAreaInput"
import SubmitButton from "../../../Components/Buttons/SubmitButton/SubmitButton"
import DropDownInput from "../../../Components/Inputs/DropDownInput"
//Store
import { useStoreState } from '../../../Store/hooks';
//API
import { apiCreateMagicItem } from "../../../API/Content/MagicItems/MagicItems"

type props = {
    onSubmit:() => void;
}
const CreateMagicItemMenu = () => {
    const [name, setName] = useState<string>("")
    const [description, setDescription] = useState<string>("")
    const [type, setType] = useState<string>("Armor")
    const [attunement, setAttunement] = useState<string>("true")
    const [rarity, setRarity] = useState<string>("")
    const { id } = useStoreState((store) => store)

    

    const ItemOptions = [
        {value: "Armor",text: "Armor"},
        {value: "Potion",text: "Potion"},
        {value: "Ring", text: "Ring"},
        {value: "Rod", text: "Rod"},
        {value: "Scroll", text: "Scroll"},
        {value: "Staff", text: "Staff"},
        {value: "Wand", text: "Wand"},
        {value: "Weapon", text: "Weapon"},
        {value: "Wondrous", text: "Wondrous"}
    ]

    const AttunementOptions = [
        {value: "true", text: "Attunement"},
        {value: "false", text: "No Attunement"}
    ]

    const RarityOptions = [
        {value: "Common", text: "Common"},
        {value: "Uncommon", text: "Uncommon"},
        {value: "Rare", text: "Rare"},
        {value: "Very Rare", text: "Very Rare"},
        {value: "Legendary", text: "Legendary"},
        {value: "Artifact", text: "Artifact"},
    ]

    const resetState = () => {
        setName("")
        setType("")
        setAttunement("true")
        setRarity("Common")
        setDescription("")
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault()
        const userId = localStorage.getItem('userId')
        let attune = false
        if(attunement === "true"){attune = true}
        if(userId)
        apiCreateMagicItem(name, type, attune, description, userId, rarity)
        resetState()
        console.log("submitted")
    }
    
    return(
        <div style={{border: "solid black"}}>
            <h1>Create Magic Item</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <TextInput
                        text="Name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                    />
                    <DropDownInput 
                        value={type} 
                        onChange={(e) => setType(e.target.value)} 
                        options={ItemOptions}
                    />
                    <DropDownInput 
                        value={attunement} 
                        onChange={(e) => setAttunement(e.target.value)} 
                        options={AttunementOptions}
                    />
                    <DropDownInput 
                        value={rarity} 
                        onChange={(e) => setRarity(e.target.value)} 
                        options={RarityOptions}
                    />
                </div>
                <div>
                    <TextAreaInput 
                        text="Description" 
                        value={description} 
                        onChange={(e) => setDescription(e.target.value)} 
                        rows={15}
                    />
                </div>
                <SubmitButton />
            </form>
        </div>
    )
}
export default CreateMagicItemMenu