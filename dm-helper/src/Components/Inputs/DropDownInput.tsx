import CSS from "csstype"

type props = {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    options: string[];
}

const DropDownInput = ({value, onChange, options}: props) => {

    const styles: CSS.Properties = {
        backgroundColor: 'rgba(255, 255, 255, 0.85)',
        color: 'black',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
        border: '1px solid black' ,
        textAlign: "left",
        height: "2.07rem",
        width: "8.05rem"
    }

    return(
        <select value={value} onChange={onChange} style={styles}>
            {options.map((option) => 
            <>
                <option value={option}>{option}</option>
            </>
            )

            }
        </select>
    )
}
export default DropDownInput