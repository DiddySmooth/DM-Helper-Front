import {Link} from "react-router-dom"
import { useStoreActions } from '../../../Store/hooks';
const NavBar = () => {
    const {setName} = useStoreActions(store => store)

    const clickHandle = () => {
        setName("")
        localStorage.setItem('userId', "")
    }
    return (
        <div className="navBarContainer">
            <div className="NavBarLink">
                <Link className="navLink" to="/home">Home</Link>
            </div>
            <div className="NavBarLink">
                <Link className="navLink" to="/gen">Generators</Link>
            </div>
            <div className="NavBarLink">
                <Link className="navLink" to="/cc">Custom Content</Link> 
            </div>
            <div>
                <button onClick={clickHandle}>Logout</button>
            </div>
        </div>
    )
}
export default NavBar