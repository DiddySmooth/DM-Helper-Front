import TextInput from "../../Components/Inputs/Inputs"
import { useState } from "react"
import { useStoreActions } from '../../Store/hooks'
import axios from "axios"


interface User {
    id: string;
    username: string;
}

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