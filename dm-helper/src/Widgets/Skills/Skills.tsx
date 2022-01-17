import CheckBoxInput from "../../Components/Inputs/CheckBoxInput"
import { ISkills } from "../../Interface/Skills"

export type props = {
    skills?: ISkills
}

const Skills = ({skills}:props) => {


    const change = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
    }
    return (
        <div>
            <CheckBoxInput 
                skill="Athletics"
                stat={15}
                onChange={change}
            />
        </div>
    )
}
export default Skills