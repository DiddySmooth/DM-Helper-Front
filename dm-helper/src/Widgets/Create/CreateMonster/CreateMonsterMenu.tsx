import TextInput from "../../../Components/Inputs/TextInput"
import { useState } from "react"
import DropDownInput from "../../../Components/Inputs/DropDownInput"
import NumberInput from "../../../Components/Inputs/NumberInput"
import { IStats } from "../../../Interface/Stats"
import Stats from "../../Stats/Stats"
import Skills from "../../Skills/Skills"
import { ISkills } from "../../../Interface/Skills"

const CreateMonsterMenu = () => {
    const [name, setName] = useState<string>("")
    const [size, setSize] = useState<string>("")
    const [type, setType] = useState<string>("")
    const [alignment, setAlignment] = useState<string>("")
    const [armorClass, setArmorClass] = useState<string>("")
    const [hitPoints, setHitPoints] = useState<string>("")
    const [speed, setSpeed] = useState<string>("")

    const [stats, setStats] = useState<IStats>({
        strength: 0,
        dexterity: 0,
        constitution: 0,
        wisdom: 0,
        intelligence: 0,
        charisma: 0
    })
    const [savingThrows, setSavingThrows] = useState<string>("")
    const [skills, setSkills] = useState<ISkills>({
        acrobatics: false,
        animalHandling: false,
        arcana: false,
        athletics: false,
        deception: false,
        history: false,
        insight: false,
        intimidation: false,
        investigation: false,
        medicine: false,
        nature: false,
        perception: false,
        performance: false,
        persuassion: false,
        religion: false,
        sleightOfHand: false,
        stealth: false,
        survival: false,
    })
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
    const skillChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
        if(e.target.value === "acrobatics"){
            setSkills(prevState => ({...prevState, acrobatics: !skills.acrobatics}))
        }
        else if(e.target.value === "animal handling"){
            setSkills(prevState => ({...prevState, animalHandling: !skills.animalHandling}))
        }
        else if(e.target.value === "arcana"){
            setSkills(prevState => ({...prevState, arcana: !skills.arcana}))
        }
        else if(e.target.value === "athletics"){
            setSkills(prevState => ({...prevState, athletics: !skills.athletics}))
        }
        else if(e.target.value === "deception"){
            setSkills(prevState => ({...prevState, deception: !skills.deception}))
        }
        else if(e.target.value === "history"){
            setSkills(prevState => ({...prevState, history: !skills.history}))
        }
        else if(e.target.value === "insight"){
            setSkills(prevState => ({...prevState, insight: !skills.insight}))
        }
        else if(e.target.value === "intimidation"){
            setSkills(prevState => ({...prevState, intimidation: !skills.intimidation}))
        }
        else if(e.target.value === "investigation"){
            setSkills(prevState => ({...prevState, investigation: !skills.investigation}))
        }
        else if(e.target.value === "medicine"){
            setSkills(prevState => ({...prevState, medicine: !skills.medicine}))
        }
        else if(e.target.value === "nature"){
            setSkills(prevState => ({...prevState, nature: !skills.nature}))
        }
        else if(e.target.value === "perception"){
            setSkills(prevState => ({...prevState, perception: !skills.perception}))
        }
        else if(e.target.value === "performance"){
            setSkills(prevState => ({...prevState, performance: !skills.performance}))
        }
        else if(e.target.value === "persuassion"){
            setSkills(prevState => ({...prevState, persuassion: !skills.persuassion}))
        }
        else if(e.target.value === "religion"){
            setSkills(prevState => ({...prevState, religion: !skills.religion}))
        }
        else if(e.target.value === "sleight of hand"){
            setSkills(prevState => ({...prevState, sleightOfHand: !skills.sleightOfHand}))
        }
        else if(e.target.value === "stealth"){
            setSkills(prevState => ({...prevState, stealth: !skills.stealth}))
        }
        else if(e.target.value === "survival"){
            setSkills(prevState => ({...prevState, survival: !skills.survival}))
        }

    }

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
                    <Skills 
                        stats={stats}
                        skills={skills}
                        onChange={skillChange}
                    />
                </div>
            </form>
        </div>
    )
}
export default CreateMonsterMenu