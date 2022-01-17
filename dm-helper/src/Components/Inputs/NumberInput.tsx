import CSS from 'csstype'

export type props = {
    text: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: number | undefined;
}


const NumberInput = ({text, onChange, value}: props) => {

    const style: CSS.Properties = {
        backgroundColor: 'rgba(255, 255, 255, 0.85)',
        width: "3.5em",
        height: "3.5em",
        border: '1px solid black'
    }
    const inputStyle: CSS.Properties = {
        width: "3em",
        height: "3em",
        border: 'none'
    }
    return(
        <div style={style}>
            <input type="number" style={inputStyle} value={value} placeholder={text} onChange={onChange}></input>
            <label>{text}</label>
        </div>
    )
}
export default NumberInput