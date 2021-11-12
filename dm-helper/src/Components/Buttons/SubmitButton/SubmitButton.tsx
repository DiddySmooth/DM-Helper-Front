import CSS from 'csstype'

const SubmitButtonStyles: CSS.Properties = {
    padding: ".5rem",
    marginTop: ".5rem",
    width: "5rem"
};

export type SubmitButtonProps = {
    className?: string;
    value?: string; 
    
}

const SubmitButton = ({className, value}: SubmitButtonProps) => {
    return(
        <input style={SubmitButtonStyles} type="submit" value={value} className={className}></input>
    )
}
export default SubmitButton