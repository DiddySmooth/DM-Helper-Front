import { MagicItems } from "./Arrays";

export const RandomItem = () => {
    return(MagicItems[Math.floor(Math.random() * MagicItems.length)])
}