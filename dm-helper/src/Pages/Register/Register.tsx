import {useState} from 'react'
import axios from "axios"
import Label from '../../Components/Labels/Label'
import TextInput from '../../Components/Inputs/Inputs'
import SubmitButton from '../../Components/Buttons/SubmitButton/SubmitButton'
import CSS from 'csstype'


const RegisterStyles: CSS.Properties = {
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

const Register = () => {
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        try {
            let res = await axios.post(`${process.env.REACT_APP_BACKEND}/user/create`, {
                username: username,
                password: password,
                email: email,
            })
            //
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div style={RegisterStyles}>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <Label text="Email" />
                <TextInput text="Email" onChange={(e) => setEmail(e.target.value)} value={email}/>
                <Label text="Username" />
                <TextInput text="Username" onChange={(e) => setUsername(e.target.value)} value={username}/>
                <Label text="Password" />
                <TextInput text="Password" onChange={(e) => setPassword(e.target.value)} value={password}/>
                <SubmitButton value="Register"/>
            </form>
        </div>
    )
}
export default Register