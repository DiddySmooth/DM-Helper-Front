import axios from "axios"



export const apiGetMagicItems = async () => {
    try {
        let res = await axios.get(`${process.env.REACT_APP_BACKEND}/magicItem/getAll`)
        return(res.data)
    } catch (error: any) {
        return(error)
    }
}

export const apiCreateMagicItem = async (name: string, type: string, attunement: boolean, description: string, userId: string, rarity: string) => {
    try{
        let res = await axios.post(`${process.env.REACT_APP_BACKEND}/magicItem/create`, {
            name: name,
            type: type,
            attunement: attunement,
            description: description,
            userid: userId,
            rarity: rarity,
        })

        return res
    }catch (error: any){
        return error
    }
}

export const apiLikeMagicItem = async (userId: string, itemId: string) =>{
    try{
        let res = await axios.post(`${process.env.REACT_APP_BACKEND}/magicItem/like`, {
            userid: userId,
            itemid: itemId,
            type: "magic item"
        })
    }catch (error: any){
        console.log(error)
    }
}