import CSS from 'csstype'
import { useEffect } from 'react'



const SidebarStyles: CSS.Properties = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fffaf0",
    boxShadow: '0 0 8px rgba(0, 0, 0, 0.3)',
    position: "fixed",
    top: "0",
    left: "0",
    bottom: "0",
    width: "50px",
    
}
const Sidebar = () => {
    return(
      <div style={SidebarStyles}>
        
      </div>
    )
}
export default Sidebar