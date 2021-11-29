import axios from "axios"
export const apiCreateSpell = async (
    name: string,
    level: string, 
    school: string, 
    castingTime: string,
    range: string,
    area: string,
    components: string,
    duration: string,
    attack: string,
    damage: string,
    save: string, 
    effect: string,
    description: string,
    userId: string,
    ) => {
    try{
        let res = await axios.post(`${process.env.REACT_APP_BACKEND}/spells/create`, {
            name: name,
            level: level,
            school: school,
            castingtime: castingTime,
            range: range,
            area: area,
            components: components,
            duration: duration,
            attack: attack,
            damage: damage,
            save: save,
            effect: effect,
            description: description,
            userid: userId,
        })
        return res
    }catch (error: any){
        return error
    }
}
export const apiGetSpells = async () => {
    try {
        let res = await axios.get(`${process.env.REACT_APP_BACKEND}/spells/getAll`)
        return(res.data)
    } catch (error: any) {
        return(error)
    }
}
export const apiLikeSpell = async (userId: string, itemId: number) =>{
    try{
        let res = await axios.put(`${process.env.REACT_APP_BACKEND}/spells/like`, {
            userid: userId,
            itemid: itemId,
            type: "spell"
        })
    }catch (error: any){
        console.log(error)
    }
}