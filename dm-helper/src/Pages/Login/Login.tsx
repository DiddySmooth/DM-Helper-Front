import TextInput from "../../Components/Inputs/Inputs"
import { useState } from "react"
import { useStoreActions } from '../../Store/hooks'
import axios from "axios"
import CSS from 'csstype'
import SubmitButton from "../../Components/Buttons/SubmitButton/SubmitButton"
import Label from "../../Components/Labels/Label"

interface User {
    id: string;
    username: string;
}
const LoginStyles: CSS.Properties = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid black",
    width: "18rem",
    padding: "2rem",
    marginTop: "10rem",
    borderRadius: "5px",
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
    backgroundColor: "#fffaf0",
};

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const {setName} = useStoreActions(store => store)

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        try {
            let res = await axios.post<User>(`${process.env.REACT_APP_BACKEND}/user/login`, {
                username: username,
                password: password,
                
            })
            localStorage.setItem('userId', res.data.id)
            setName(username)
        } catch (error) {
            console.log(error)
        }
    }

    return (
      <div style={LoginStyles}>
          <form onSubmit={handleSubmit}>
                <Label text="Username"/> 
                <TextInput text="Username" onChange={(e) => setUsername(e.target.value)} value={username}/>
                <Label text="Password"/> 
                <TextInput text="Password" onChange={(e) => setPassword(e.target.value)} value={password}/>
                <SubmitButton value="Login"/>
          </form>
      </div>
    )
}
export default Login