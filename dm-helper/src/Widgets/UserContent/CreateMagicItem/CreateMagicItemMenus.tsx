import TextInput from "../../../Components/Inputs/TextInput"
import { useState } from "react"
import TextAreaInput from "../../../Components/Inputs/TextAreaInput"
import SubmitButton from "../../../Components/Buttons/SubmitButton/SubmitButton"
import DropDownInput from "../../../Components/Inputs/DropDownInput"
import { useStoreState } from '../../../Store/hooks';
import { apiCreateMagicItem } from "../../../API/Content/MagicItems/MagicItems"

const CreateMagicItemMenu = () => {
    const [name, setName] = useState<string>("")
    const [description, setDescription] = useState<string>("")
    const [type, setType] = useState<string>("Armor")
    const [attunement, setAttunement] = useState<string>("true")
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


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault()
        const userId = localStorage.getItem('userId')
        let attune = false
        if(attunement === "true"){attune = true}
        if(userId)
        apiCreateMagicItem(name, type, attune, description, userId)
    }

    return(
        <div style={{border: "solid black"}}>
            <h1>Create Magic Item</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <TextInput text="Name" value={name} onChange={(e) => setName(e.target.value)} />
                    <DropDownInput value={type} onChange={(e) => setType(e.target.value)} options={ItemOptions}/>
                    <DropDownInput value={attunement} onChange={(e) => setAttunement(e.target.value)} options={AttunementOptions}/>
                </div>
                <div>
                    <TextAreaInput text="Description" value={description} onChange={(e) => setDescription(e.target.value)} rows={15}/>
                </div>
                <SubmitButton />

                
            </form>
        </div>
    )
}
export default CreateMagicItemMenu