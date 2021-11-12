import CSS from 'csstype'

export type InputProps = {
    className?: string;
    text: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
}

const InputStyles: CSS.Properties = {
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    color: 'black',
    padding: '0.5rem',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
    border: '1px solid black' ,
    width: "15rem"
}

const TextInput = ({className, text, onChange, value}:InputProps) => {
    return(
        <input style={InputStyles}className={className} placeholder={text} onChange={onChange} value={value}/>
    )
}
export default TextInput