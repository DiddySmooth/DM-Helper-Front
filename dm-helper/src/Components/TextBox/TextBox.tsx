import CSS from 'csstype'

export type TextBoxProps = {
    className: string;
    payload: any;
    text: string;
}

const TextBoxStyles: CSS.Properties = {
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    color: 'black',
    padding: '0.5rem',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
    border: '1px solid black' 
  };

const TextBox = ({className, text, payload}:TextBoxProps) => {
    return(
        <span className={className}>{text} {payload}</span>
    )
}
export default TextBox