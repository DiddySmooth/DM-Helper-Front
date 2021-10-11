import {Route, Redirect} from 'react-router-dom'
import './App.css';
import TextInput from './Components/Inputs/Inputs';
import Generators from './Pages/Generators/Generators';
import NavBar from './Pages/Home/Components/NavBar';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="App">
        <NavBar />
        <Route exact path="/home"><Home /></Route>
        <Route exact path="/gen"><Generators /></Route>
        <TextInput 
            className="button"
            text="Dude"
        />
        
    </div>
  );
}

export default App;
