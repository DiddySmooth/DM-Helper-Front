export type props = {
    skill: string;
    stat: |"str" | "dex" | "con" | "int" | "wis" | "cha" 
    statValue: number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckBoxInput = ({skill, statValue, onChange}: props) => {

    return(
        <div>
            <input onChange={onChange}type="checkbox" value={skill}></input>
            <label>{skill}</label>
            <label>{statValue}</label>
        </div>
    )
}
export default CheckBoxInput