import CheckBoxInput from "../../Components/Inputs/CheckBoxInput"
import { ISkills } from "../../Interface/Skills"
import { IStats } from "../../Interface/Stats"

export type props = {
    skills?: ISkills
    stats: IStats
}

const Skills = ({skills, stats}:props) => {

    const change = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
    }
    return (
        <div>
            <CheckBoxInput 
                skill="Athletics"
                statValue={(stats.strength - 10) / 2}
                stat={"str"}
                onChange={change}
            />
        </div>
    )
}
export default Skills