import axios from "axios"

//Interfaces
import { IUser } from "../../Interface/User/Auth"


export const apiUserLogin = async (username: string, password: string) => {
    try {
        let res = await axios.post<IUser>(`${process.env.REACT_APP_BACKEND}/user/login`, {
            username: username,
            password: password,
            
        })
        return(res)
    } catch (error: any) {
        return(error)
    }
}

export const apiUserRegister = async (username: string, password: string, email: string) =>{
    try {
        let res = await axios.post(`${process.env.REACT_APP_BACKEND}/user/create`, {
            username: username,
            password: password,
            email: email,
        })
        return(res)
        
    } catch (error: any) {
        return error
    }
}
