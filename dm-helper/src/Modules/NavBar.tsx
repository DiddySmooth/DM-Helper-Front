import {Link} from "react-router-dom"
import { useStoreActions, useStoreState } from '../Store/hooks';
const NavBar = () => {
    const {setName} = useStoreActions(store => store)
    const { name } = useStoreState((store) => store)

    const clickHandle = () => {
        setName("")
        localStorage.setItem('userId', "")
    }
    return (
        <div className="navBarContainer">
            {name ?
                <span style={{margin:"5px"}}className="navLink" onClick={clickHandle}>Logout</span>
            :
            <>
                <Link style={{margin:"5px"}}className="navLink" to="/login">Login</Link>
                <Link style={{margin:"5px"}}className="navLink" to="/register">Register</Link>
            </>
            }
            <Link style={{margin:"5px"}}className="navLink" to="/home">Home</Link>
            <Link style={{margin:"5px"}}className="navLink" to="/gen">Generators</Link>
            <Link style={{margin:"5px"}}className="navLink" to="/cc">Custom Content</Link> 
        </div>
    )
}
export default NavBar