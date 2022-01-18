export type props = {
    skill: string;
    stat: |"str" | "dex" | "con" | "int" | "wis" | "cha" 
    statValue: number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    proficient?: boolean
}

const CheckBoxInput = ({skill, statValue, onChange, proficient}: props) => {
    let bonus = 0;
    if(proficient === true){
        bonus = 2
    }
    return(
        <div>
            <input onChange={onChange}type="checkbox" value={skill.toLowerCase()}></input>
            <label>{skill}</label>
            <span> + </span>
            <label>{statValue + bonus}</label>
        </div>
    )
}
export default CheckBoxInput