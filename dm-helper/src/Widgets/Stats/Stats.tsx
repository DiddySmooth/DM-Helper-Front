import { SetStateAction, Dispatch } from "react"
import NumberInput from "../../Components/Inputs/NumberInput"
import { IStats } from "../../Interface/Stats"
import CSS from 'csstype'


export type props = {
    stats: IStats;
    setStats: Dispatch<SetStateAction<IStats>>;
    direction: "column" | "row";
}




const Stats = ({stats, setStats, direction}: props) => {
    const RowStyle: CSS.Properties = {
        display: "flex",
        flexDirection: "row"
    }
    const ColumnStyle: CSS.Properties = {
        display: "flex",
        flexDirection: "column"
    }
    let style: CSS.Properties = {}


    if(direction === "column"){
        style = ColumnStyle
    }else{
        style = RowStyle
    }
    return(
        <div style={style}>
            <NumberInput 
                text="Str"
                value={stats?.strength}
                onChange={(e) => setStats(prevState => ({...prevState, strength: parseInt(e.target.value)}))}
            />
            <NumberInput 
                text="Dex"
                value={stats?.dexterity}
                onChange={(e) => setStats(prevState => ({...prevState, dexterity: parseInt(e.target.value)}))}
            />
            <NumberInput 
                text="Con"
                value={stats?.constitution}
                onChange={(e) => setStats(prevState => ({...prevState, constitution: parseInt(e.target.value)}))}
            />
            <NumberInput 
                text="Wis"
                value={stats?.wisdom}
                onChange={(e) => setStats(prevState => ({...prevState, wisdom: parseInt(e.target.value)}))}
            />
            <NumberInput 
                text="Int"
                value={stats?.intelligence}
                onChange={(e) => setStats(prevState => ({...prevState, intelligence: parseInt(e.target.value)}))}
            />
            <NumberInput 
                text="Cha"
                value={stats?.charisma}
                onChange={(e) => setStats(prevState => ({...prevState, charisma: parseInt(e.target.value)}))}
            />
        </div>
    )
}
export default Stats