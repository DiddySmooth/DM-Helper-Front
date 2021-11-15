import {useState} from 'react'
import CSS from 'csstype'

//Components
import Label from '../../Components/Labels/Label'
import TextInput from '../../Components/Inputs/Inputs'
import SubmitButton from '../../Components/Buttons/SubmitButton/SubmitButton'

//api
import { apiUserRegister } from '../../API/User/users'

//store
import { useStoreActions } from '../../Store/hooks'

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
    const {setName} = useStoreActions(store => store)

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        let res = await apiUserRegister(username, password, email)
        console.log(res)
        if((res.data.hasOwnProperty("error")) !== true){
            localStorage.setItem('userId', res.data.id)
            setName(username)
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