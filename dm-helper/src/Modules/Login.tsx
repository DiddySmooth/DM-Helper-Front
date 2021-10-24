import TextInput from "../Components/Inputs/Inputs"
import { useState } from "react"
import axios from "axios"

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        try {
            let res = await axios.post(`http://localhost:3001/user/login`, {
                username: username,
                password: password,
                
            })
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }

    return (
      <div>
          <form onSubmit={handleSubmit}>
                <div>
                    <label>Username</label>
                    <input type ="text" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)}></input>
                </div>
                <div>
                    <label>Password</label>
                    <input type ="text" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                </div>
                <input type="submit"></input>
          </form>
      </div>
    )
}
export default Login