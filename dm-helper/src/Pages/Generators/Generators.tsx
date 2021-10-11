import React, { useState } from 'react';
import Npc from '../../Assets/npc.png'
import MagicShop from '../../Assets/magicShop.png'
import RandomNpc from './NpcGen/RandomNpc';
import RandomMagicShop from './MagicShopGen/MagicShop';

const Generators = () => {

    const [npc, setNpc] = useState<boolean>(false)
    const [magicShop, setMagicShop] = useState<boolean>(false)


    const clickHandle = (button: string) => {
        if(button === "NPC"){
            setNpc(true)
            setMagicShop(false)
        }
        else if(button === "MagicShop"){
            setMagicShop(true)
            setNpc(false)
        }
    }
    return(
        <div>
            <img className="genIcon" src={Npc} onClick={ () => {clickHandle("NPC")}}/>
            <img className="genIcon" src={MagicShop} onClick={ () => {clickHandle("MagicShop")}}/>
            {npc && <RandomNpc />}
            {magicShop && <RandomMagicShop />}
        </div>
    )
}
export default Generators