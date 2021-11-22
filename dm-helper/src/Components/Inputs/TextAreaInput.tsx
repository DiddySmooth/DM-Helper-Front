import CSS from 'csstype'

type props = {
    text: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    value: string;
    style?: CSS.Properties;
    rows: number;
}

const TextAreaInput = ({text, onChange, value, rows}:props) => {
    const styles: CSS.Properties = {
        backgroundColor: 'rgba(255, 255, 255, 0.85)',
        color: 'black',
        padding: '0.5rem',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
        border: '1px solid black' ,
        width: "31.1rem",
        textAlign: "left",
        resize: "none",
    }

    return (
      <textarea style={styles} placeholder={text} onChange={onChange} value={value} rows={rows}/>
    )
}
export default TextAreaInput