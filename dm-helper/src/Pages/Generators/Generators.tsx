import React, { useState } from 'react';
import Npc from '../../Assets/npc.png'
import MagicShop from '../../Assets/magicShop.png'
import RandomNpc from './NpcGen/RandomNpc';
import RandomMagicShop from './MagicShopGen/MagicShop';
import TownGen from './TownGen/TownGen';
import CSS from 'csstype'

const GenIcon: CSS.Properties = {
    width: "50px",
    height: "50px",
    border: "1px solid black",
}

const Generators = () => {

    const [npc, setNpc] = useState<boolean>(false)
    const [magicShop, setMagicShop] = useState<boolean>(false)
    const [town, setTown] = useState<boolean>(false)

    const resetState = () => {
        setNpc(false)
        setMagicShop(false)
        setTown(false)

    }

    const clickHandle = (button: string) => {
        if(button === "NPC"){
            resetState()
            setNpc(true)
        }
        else if(button === "MagicShop"){
            resetState()
            setMagicShop(true)
        }
        else if(button === "Town"){
            resetState()
            setTown(true)
        }
    }
    return(
        <div>
            <img style={GenIcon} src={Npc} onClick={ () => {clickHandle("NPC")}}/>
            <img style={GenIcon} src={MagicShop} onClick={ () => {clickHandle("MagicShop")}}/>
            <img style={GenIcon} src={Npc} onClick={ () => {clickHandle("Town")}}/>
            {npc && <RandomNpc />}
            {magicShop && <RandomMagicShop />}
            {town && <TownGen />}
            
        </div>
    )
}
export default Generators