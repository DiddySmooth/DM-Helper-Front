import TextInput from "../../../Components/Inputs/TextInput"
import {useState} from 'react'
import DropDownInput from "../../../Components/Inputs/DropDownInput"
import TextAreaInput from "../../../Components/Inputs/TextAreaInput"
import { apiCreateSpell } from "../../../API/Content/Spells/Spells"
import SubmitButton from "../../../Components/Buttons/SubmitButton/SubmitButton"
const CreateSpellMenu = () => {

    const [name, setName] = useState<string>("")
    const [level, setLevel] = useState<string>("")
    const [school, setSchool] = useState<string>("")
    const [castingTime, setCastingTime] = useState<string>("")
    const [range, setRange] = useState<string>("")
    const [area, setArea] = useState<string>("")
    const [components, setComponents] = useState<string>("")
    const [duration, setDuration] = useState<string>("")
    const [attack, setAttack] = useState<string>("")
    const [damage, setDamage] = useState<string>("")
    const [save, setSave] = useState<string>("")
    const [effect, setEffect] = useState<string>("")
    const [description , setDescription] = useState<string>("")


    const levelOptions = [
        {value: "1", text: "1"},
        {value: "2", text: "2"},
        {value: "3", text: "3"},
        {value: "4", text: "4"},
        {value: "5", text: "5"},
        {value: "6", text: "6"},
        {value: "7", text: "7"},
        {value: "8", text: "8"},
        {value: "9", text: "9"},
    ]
    const schoolOptions = [
        {value: "Conjuration", text: "Conjuration"},
        {value: "Necromancy", text: "Necromancy"},
        {value: "Evocation", text: "Evocation"},
        {value: "Abjuration", text: "Abjuration"},
        {value: "Transmutation", text: "Transmutation"},
        {value: "Divination", text: "Divination"},
        {value: "Enchantment", text: "Enchantment"},
        {value: "Illusion", text: "Illusion"},
    ]
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault()
        const userId = localStorage.getItem("userId")
        if(userId)
        apiCreateSpell(name, level, school, castingTime, range, area, components, duration, attack, damage, save, effect, description, userId)
    }

    return(
        <div style={{border: "solid black", display: "flex", width: "60vw", flexDirection: "column"}}>
            <h1>Create Spell</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <TextInput
                        text="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <label>Level</label>
                    <DropDownInput 
                        value={level}
                        onChange={(e) => setLevel(e.target.value)}
                        options={levelOptions}
                    />
                    <label>School</label>
                    <DropDownInput 
                        value={school}
                        onChange={(e)  => setSchool(e.target.value)}
                        options={schoolOptions}
                    />
                    <TextInput 
                        text="Casting Time"
                        value={castingTime}
                        onChange={(e) => setCastingTime(e.target.value)}
                    />
                    <TextInput 
                        text="Range"
                        value={range}
                        onChange={(e) => setRange(e.target.value)}
                    />
                    <TextInput 
                        text="Area"
                        value={area}
                        onChange={(e) => setArea(e.target.value)}
                    />
                    <TextInput 
                        text="Components"
                        value={components}
                        onChange={(e) => setComponents(e.target.value)}
                    />
                    <TextInput 
                        text="Duration"
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                    />
                    <TextInput 
                        text="Attack"
                        value={attack}
                        onChange={(e) => setAttack(e.target.value)}
                    />
                    <TextInput 
                        text="Damage"
                        value={damage}
                        onChange={(e) => setDamage(e.target.value)}
                    />
                    <TextInput 
                        text="Save"
                        value={save}
                        onChange={(e) => setSave(e.target.value)}
                    />
                    <TextInput 
                        text="Effect"
                        value={effect}
                        onChange={(e) => setEffect(e.target.value)}
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
export default CreateSpellMenu