import {Route, Redirect} from 'react-router-dom'
import {useState, useEffect} from 'react'
import axios from "axios"
import './App.css';
import Generators from './Pages/Generators/Generators';
import NavBar from './Modules/NavBar/NavBar';
import Home from './Pages/Home/Home';
import { useStoreActions, useStoreState } from './Store/hooks';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import UserContent from './Pages/UserContent/UserContent';
import Create from './Pages/Create/Create';



interface User {
    email: string;
    id: string;
    username: string;
}

function App() {
    const {setName} = useStoreActions(store => store)
    const userId = localStorage.getItem('userId')
    const { name } = useStoreState((store) => store)

    const getUserInfo = async () => {
        if(userId === null){return}
        try{
            let user = await axios.get<User>(`${process.env.REACT_APP_BACKEND}/user/getinfo`, {
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
    <div className="App" >
        <NavBar />
        <Route exact path="/home"><Home /></Route>
        <Route exact path="/gen"><Generators /></Route>
        <Route exact path="/login">{name ? <Redirect to="/home" />:<Login />}</Route>
        <Route exact path="/register">{name ? <Redirect to="/home" />:<Register />}</Route>
        <Route exact path="/cc"><UserContent /></Route>
        <Route exact path="/create"><Create /></Route>
    </div>
  );
}

export default App;
