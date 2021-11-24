import { useStoreActions, useStoreState } from '../../Store/hooks';
import CSS from 'csstype'

//Compenents
import NavButton from "../../Components/Buttons/NavButton/NavButton";

const NavBarStyle: CSS.Properties = {
    backgroundColor: "#fffaf0",
    color: 'white',
    boxShadow: '0 0 8px rgba(0, 0, 0, 0.3)',
    textDecoration: "none",
    width: "100%",
    height: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "none",
    position: "sticky",
    top: "0"
    
}
const NavButtonStyles: CSS.Properties = {
    backgroundColor: "#fffaf0",
    color: 'black',
    padding: '0.5rem 0.9rem ',
    margin: "0rem 0.5rem",
    textDecoration: "none",
    fontSize: "20px",
    textShadow: "2px 2px 8px grey",
    cursor:"pointer"
}


const NavBar = () => {
    const {setName} = useStoreActions(store => store)
    const { name } = useStoreState((store) => store)

    const clickHandle = () => {
        setName("")
        localStorage.setItem('userId', "")
    }
    return (
        <div style={NavBarStyle}className="navBarContainer">
            {name ?
                
                <span style={NavButtonStyles}className="navLink" onClick={clickHandle}>Logout</span>
                
            :
            <>
                <NavButton destination="/login" text="Login"/>
                <NavButton destination="/register" text="Register" />
            </>
            }
            <NavButton destination="/home" text="Home"/>
            <NavButton destination="/gen" text="Generators"/>
            <NavButton destination="/cc" text="Homebrew"/>
            
        </div>
    )
}
export default NavBar