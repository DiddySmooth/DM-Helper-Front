import { IMagicItem } from "../../../Interface/CustomContent/Items/Items"
import CSS from 'csstype'
import { useState } from 'react'
type props = {
    data: IMagicItem[]    
}


const MagicItemList = ({data}: props) => {
    const [expandedView, setExpandedView] = useState<boolean>(false)
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
    const styles1: CSS.Properties = {
        display: "flex",
        justifyContent: "space-between"
    }
    return(
        //change the data tables to have attunement just be a string 
        <div>
            {data.map((item) =>
                <div style={styles}>
                    <div style={styles1}>
                        <span>{item.name}</span>
                        <span>{item.type}</span>
                        
                    </div>
                    <button onClick={() => {setExpandedView(true)}}>↓</button>
                    {expandedView &&(
                        <h1>{item.description}</h1>
                    )

                    }
                </div>
            )}
        </div>
     
    )
}
export default MagicItemList