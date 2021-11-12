import { Link } from 'react-router-dom'
import CSS from 'csstype'

export type NavButtonProps = {
    className?: string;
    text: string;
    destination: string;
}
const NavButtonStyles: CSS.Properties = {
    backgroundColor: "#fffaf0",
    color: 'black',
    padding: '0.5rem 0.9rem ',
    margin: "0rem 0.5rem",
    textDecoration: "none",
    fontSize: "20px",
    textShadow: "2px 2px 8px grey",
    border: "none"
}

const NavButton = ({className, text, destination}: NavButtonProps) => {
    return(
      <span>
          <Link style={NavButtonStyles}className={className} to={destination}>{text}</Link>
      </span>
    )
}
export default NavButton   