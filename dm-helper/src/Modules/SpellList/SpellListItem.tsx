import CSS from 'csstype'
import { useState } from "react"
import { apiLikeSpell } from '../../API/Content/Spells/Spells'
import { ISpells } from '../../Interface/CustomContent/Spells/Spells'

type props = {
    data: ISpells
}

const SpellListItem = ({data}: props) => {
    const [expandedView, setExpandedView] = useState<boolean>(false)

    const styles: CSS.Properties = {
        backgroundColor: 'rgba(255, 255, 255, 0.85)',
        color: 'black',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
        border: 'solid black' ,
        width: "60vw",
        textAlign: "left",
        resize: "none",
    }
    const styles1: CSS.Properties = {
        display: "flex",
        justifyContent: "space-between"
    }

    const onLike = () => {
        const userId = localStorage.getItem('userId')
        if(userId)
        apiLikeSpell(userId, data.id)
        console.log(data)
    }

    return(
        <div style={styles}>
            <div style={{padding: "10px"}}>
                <div style={styles1}>
                    <span>{data.name}</span>
                    <span>{data.level}</span>
                    <span>{data.school}</span>
                </div>
                {!expandedView &&(
                    <button onClick={() => {setExpandedView(true)}}>↓</button>
                )}
                {expandedView &&(
                    <>
                        <h1>{data.description}</h1>
                        <button onClick={() => {setExpandedView(false)}}>X</button>
                        <button onClick={onLike}>Like</button>
                        <label>Likes : </label>
                        <span>{data.likes}</span>
                    </>
                )}
            </div> 
        </div>
    )
}
export default SpellListItem