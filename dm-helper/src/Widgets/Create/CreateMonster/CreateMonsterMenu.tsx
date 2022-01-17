import TextInput from "../../../Components/Inputs/TextInput"
import { useState } from "react"
import DropDownInput from "../../../Components/Inputs/DropDownInput"
import NumberInput from "../../../Components/Inputs/NumberInput"
import { IStats } from "../../../Interface/Stats"
import Stats from "../../Stats/Stats"
import Skills from "../../Skills/Skills"

const CreateMonsterMenu = () => {
    const [name, setName] = useState<string>("")
    const [size, setSize] = useState<string>("")
    const [type, setType] = useState<string>("")
    const [alignment, setAlignment] = useState<string>("")
    const [armorClass, setArmorClass] = useState<string>("")
    const [hitPoints, setHitPoints] = useState<string>("")
    const [speed, setSpeed] = useState<string>("")

    const [stats, setStats] = useState<IStats>({
        strength: "0",
        dexterity: "0",
        constitution: "0",
        wisdom: "0",
        intelligence: "0",
        charisma: "0"
    })
    const [savingThrows, setSavingThrows] = useState<string>("")
    const [skills, setSkills] = useState<string>("")
    const [damageResistances, setDamageResistances] = useState<string>("")
    const [damageVunerabilities, setDamageVunerablilities] = useState<string>("")
    const [damageImmunities, setDamageImmunities] = useState<string>("")
    const [conditionImmunities, setConditionImmunities] = useState<string>("")
    const [senses, sestSenses] = useState<string>("")
    const [languages, setLanguages] = useState<string>("")
    const [challenge, setChanllengeRating] = useState<string>("")
    const [prof, setProf] = useState<string>("")
    const [abilities, setAbilities] = useState<string>("")
    const [actions, setActions] = useState<string>("")
    const [legendaryActions, setLegendaryActions] = useState<string>("")

    const SizeOptions = ["Tiny","Small","Medium","Large","Huge","Gargantuan",]
    const TypeOptions = [
        "Aberration", "Beast", "Celestial", "Construct", 
        "Dragon", "Elemental", "Fey", "Fiend", "Giant",
        "Humanoid","Monstrosity","Ooze","Plant","Undead",  
    ]
    const AlignmentOptions = [
        "Lawful Good", "Neutral Good", "Chaotic Good",
        "Lawful Neutral", "True Neutral", "Chaotic Neutral",
        "Lawful Evil", "Neutral Evil", "Chaotic Evil"
    ]


    return(
        <div>
            <h1>Create Monster</h1>
            <form>
                <div>
                    <TextInput
                        text="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <DropDownInput 
                        value={size}
                        onChange={(e) => setSize(e.target.value)}
                        options={SizeOptions}
                    />
                    <DropDownInput 
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        options={TypeOptions}
                    />
                    <DropDownInput 
                        value={alignment}
                        onChange={(e) => setAlignment(e.target.value)}
                        options={AlignmentOptions}
                    />
                </div>
                <div>
                    <TextInput 
                        text="Armor Class"
                        value={armorClass}
                        onChange={(e) => setArmorClass(e.target.value)}
                    />
                    <TextInput 
                        text="Hitpoints"
                        value={hitPoints}
                        onChange={(e) => setHitPoints(e.target.value)}
                    />
                    <TextInput 
                        text="Speed"
                        value={speed}
                        onChange={(e) => setSpeed(e.target.value)}
                    /> 
                </div>
                <div>
                    <Stats 
                        stats={stats}
                        setStats={setStats}
                        direction="row"
                    />
                </div>
                <div>
                    <Skills />
                </div>
            </form>
        </div>
    )
}
export default CreateMonsterMenu