import { useState } from "react"
import CSS from 'csstype'

//Components
import TextInput from "../../Components/Inputs/TextInput"
import SubmitButton from "../../Components/Buttons/SubmitButton/SubmitButton"
import Label from "../../Components/Labels/Label"

//Api
import { apiUserLogin } from "../../API/User/users"

//Store
import { useStoreActions } from '../../Store/hooks'


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
        let res = await apiUserLogin(username, password)
        
        localStorage.setItem('userId', res.data.id)
        setName(username)
        
    }

    return (
      <div style={LoginStyles}>
          <form onSubmit={handleSubmit}>
                <Label text="Username"/> 
                <TextInput text="Username" onChange={(e) => setUsername(e.target.value)} value={username} />
                <Label text="Password"/> 
                <TextInput text="Password" onChange={(e) => setPassword(e.target.value)} value={password} />
                <SubmitButton value="Login"/>
          </form>
      </div>
    )
}
export default Login