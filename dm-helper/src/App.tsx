import {Route, Redirect} from 'react-router-dom'
import {useState, useEffect} from 'react'
import axios from "axios"
import './App.css';
import TextInput from './Components/Inputs/Inputs';
import Generators from './Pages/Generators/Generators';
import NavBar from './Pages/Home/Components/NavBar';
import Home from './Pages/Home/Home';
import { useStoreState, useStoreActions } from './Store/hooks';

interface User {
    email: string;
    id: string;
    username: string;
}

function App() {
    const { name } = useStoreState((store) => store)
    const {setName} = useStoreActions(store => store)
    const [user, setUser] = useState<User>()

    const userId = localStorage.getItem('userId')

    const getUserInfo = async () => {
        if(userId === null){return}
        try{
            let user = await axios.get<User>(`http://localhost:3001/user/getinfo`, {
                headers:{
                    Authorization: userId
                }
            })
            setName(user.data.username)
        }catch(error){
            console.log(error)
        }
    }
    
    useEffect(() => {
        getUserInfo()
    },[])
  return (
    <div className="App">
        <h1>Hello{name}</h1>
        <NavBar />
        <Route exact path="/home"><Home /></Route>
        <Route exact path="/gen"><Generators /></Route>
    </div>
  );
}

export default App;
