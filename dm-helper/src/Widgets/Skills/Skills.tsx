import CheckBoxInput from "../../Components/Inputs/CheckBoxInput"
import { ISkills } from "../../Interface/Skills"
import { IStats } from "../../Interface/Stats"
import CSS from "csstype"
import {useState} from "react"

export type props = {
    skills?: ISkills
    stats: IStats
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Skills = ({skills, stats, onChange}:props) => {

    const verticalStyle: CSS.Properties = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "start",
        border: "2px solid black",
        width: "11em"
    }
    const horizontalStyle: CSS.Properties = {

    }

    let style: CSS.Properties = verticalStyle

    return (
        <div style={style}>
            {skills && (

            <CheckBoxInput 
                skill="Acrobatics"
                statValue={Math.floor((stats.dexterity - 10) / 2)}
                stat={"dex"}
                onChange={onChange}
                proficient={skills.acrobatics}
            />
            )}
            <CheckBoxInput 
                skill="Animal Handling"
                statValue={Math.floor((stats.wisdom - 10) / 2)}
                stat={"wis"}
                onChange={onChange}
                proficient={skills?.animalHandling}
            />
            <CheckBoxInput 
                skill="Arcana"
                statValue={Math.floor((stats.intelligence - 10) / 2)}
                stat={"int"}
                onChange={onChange}
                proficient={skills?.arcana}
            />
            <CheckBoxInput 
                skill="Athletics"
                statValue={Math.floor((stats.strength - 10) / 2)}
                stat={"str"}
                onChange={onChange}
                proficient={skills?.athletics}
            />
            <CheckBoxInput 
                skill="Deception"
                statValue={Math.floor((stats.charisma - 10) / 2)}
                stat={"cha"}
                onChange={onChange}
                proficient={skills?.deception}
            />
            <CheckBoxInput 
                skill="History"
                statValue={Math.floor((stats.intelligence - 10) / 2)}
                stat={"int"}
                onChange={onChange}
                proficient={skills?.history}
            />
            <CheckBoxInput 
                skill="Insight"
                statValue={Math.floor((stats.wisdom - 10) / 2)}
                stat={"wis"}
                onChange={onChange}
                proficient={skills?.insight}
            />
            <CheckBoxInput 
                skill="Intimidation"
                statValue={Math.floor((stats.charisma - 10) / 2)}
                stat={"cha"}
                onChange={onChange}
                proficient={skills?.intimidation}
            />
            <CheckBoxInput 
                skill="Investigation"
                statValue={Math.floor((stats.intelligence - 10) / 2)}
                stat={"int"}
                onChange={onChange}
                proficient={skills?.investigation}
            />
            <CheckBoxInput 
                skill="Medicine"
                statValue={Math.floor((stats.wisdom - 10) / 2)}
                stat={"wis"}
                onChange={onChange}
                proficient={skills?.medicine}
            />
            <CheckBoxInput 
                skill="Nature"
                statValue={Math.floor((stats.intelligence - 10) / 2)}
                stat={"int"}
                onChange={onChange}
                proficient={skills?.nature}
            />
            <CheckBoxInput 
                skill="Perception"
                statValue={Math.floor((stats.wisdom - 10) / 2)}
                stat={"wis"}
                onChange={onChange}
                proficient={skills?.perception}
            />
            <CheckBoxInput 
                skill="Performance"
                statValue={Math.floor((stats.charisma - 10) / 2)}
                stat={"cha"}
                onChange={onChange}
                proficient={skills?.performance}
            />
            <CheckBoxInput 
                skill="Persuasion"
                statValue={Math.floor((stats.charisma - 10) / 2)}
                stat={"cha"}
                onChange={onChange}
                proficient={skills?.persuassion}
            />
            <CheckBoxInput 
                skill="Religion"
                statValue={Math.floor((stats.intelligence - 10) / 2)}
                stat={"int"}
                onChange={onChange}
                proficient={skills?.religion}
            />
            <CheckBoxInput 
                skill="Sleight of Hand"
                statValue={Math.floor((stats.dexterity - 10) / 2)}
                stat={"dex"}
                onChange={onChange}
                proficient={skills?.sleightOfHand}
            />
            <CheckBoxInput 
                skill="Stealth"
                statValue={Math.floor((stats.dexterity - 10) / 2)}
                stat={"dex"}
                onChange={onChange}
                proficient={skills?.stealth}
            />
            <CheckBoxInput 
                skill="Survival"
                statValue={Math.floor((stats.wisdom - 10) / 2)}
                stat={"wis"}
                onChange={onChange}
                proficient={skills?.survival}
            />

        </div>
    )
}
export default Skills