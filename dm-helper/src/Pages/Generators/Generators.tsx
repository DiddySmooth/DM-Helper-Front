import React, { useState } from 'react';
import Npc from '../../Assets/npc.png'
import MagicShop from '../../Assets/magicShop.png'
import RandomNpc from './NpcGen/RandomNpc';
import RandomMagicShop from './MagicShopGen/MagicShop';
import TownGen from './TownGen/TownGen';

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
            <img className="genIcon" src={Npc} onClick={ () => {clickHandle("NPC")}}/>
            <img className="genIcon" src={MagicShop} onClick={ () => {clickHandle("MagicShop")}}/>
            <img className="genIcon" src={Npc} onClick={ () => {clickHandle("Town")}}/>
            {npc && <RandomNpc />}
            {magicShop && <RandomMagicShop />}
            {town && <TownGen />}
            
        </div>
    )
}
export default Generators