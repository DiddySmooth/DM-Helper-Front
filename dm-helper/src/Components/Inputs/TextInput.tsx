import CSS from 'csstype'

export type props = {
    text: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
}



const TextInput = ({text, onChange, value}:props) => {

    const style: CSS.Properties = {
        backgroundColor: 'rgba(255, 255, 255, 0.85)',
        color: 'black',
        padding: '0.5rem',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
        border: '1px solid black' ,
        width: "15rem",
        textAlign: "left",
        resize: "none",
    }
    
    return(
        <input style={style} placeholder={text} onChange={onChange} value={value}/>
    )
}
export default TextInput