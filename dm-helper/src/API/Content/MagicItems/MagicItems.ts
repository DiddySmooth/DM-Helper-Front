import axios from "axios"



export const apiGetMagicItems = async () => {
    try {
        let res = await axios.get(`${process.env.REACT_APP_BACKEND}/magicItem/getAll`)
        return(res.data)
    } catch (error: any) {
        return(error)
    }
}