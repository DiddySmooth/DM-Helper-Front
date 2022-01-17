export type props = {
    skill: string;
    stat: number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckBoxInput = ({skill, stat, onChange}: props) => {

    return(
        <div>
            <input onChange={onChange}type="checkbox" value={skill}></input>
            <label>{skill}</label>
            <label>{stat}</label>
        </div>
    )
}
export default CheckBoxInput