import React, { useState } from 'react';
import Npc from '../../Assets/npc.png'
import MagicShop from '../../Assets/magicShop.png'
import RandomNpc from './NpcGen/RandomNpc';
import RandomMagicShop from './MagicShopGen/MagicShop';
import TownGen from './TownGen/TownGen';
import CSS from 'csstype'
import Sidebar from '../../Components/Containers/Sidebar/Sidebar';
import GenContainer from '../../Widgets/GenContainer/GenContainer';

const GenIcon: CSS.Properties = {
    width: "50px",
    height: "50px",
    border: "1px solid black",
}
const GenPageStyles: CSS.Properties = {
    position: "absolute",
    top: "50px",
    left: "50px",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
}

const Generators = () => {
    
    return(
        <div style={GenPageStyles}>
            <GenContainer />
            <GenContainer />
            <GenContainer />
            <GenContainer />
            <GenContainer />
            <GenContainer />
            <GenContainer />
            <GenContainer />
        </div>
    )
}
export default Generators