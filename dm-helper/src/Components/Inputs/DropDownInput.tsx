import CSS from "csstype"

type options = {
    value: string;
    text: string;
}

type props = {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    options: options[];
}

const DropDownInput = ({value, onChange, options}: props) => {
    return(
        <select value={value} onChange={onChange}>
            {options.map((option) => 
            <>
                <option value={option.value}>{option.text}</option>
            </>
            )

            }
        </select>
    )
}
export default DropDownInput