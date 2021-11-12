import CSS from 'csstype'

const LabelStyles: CSS.Properties = {
    margin: "1rem",
}

export type LabelProps = {
    text: string;
    className?: string;
}

const Label = ({text, className}: LabelProps) => {
    return(
        <label className={className}>{text}</label>
    )
}
export default Label