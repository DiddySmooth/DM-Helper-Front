import {Link} from "react-router-dom"

const NavBar = () => {
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
        </div>
    )
}
export default NavBar