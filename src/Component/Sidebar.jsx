import { HiOutlineLogout } from "react-icons/hi";
import { NavLink } from "react-router-dom";



function Sidebar({ setSelectedTab}){
 
    return(
        <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark fixed-top" style={{width: "20%", minHeight: '34.5rem'}}>
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
          <span className="fs-4" style={{marginTop: '13px'}}>Facebook</span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item" onClick={()=> setSelectedTab('Home')}>
            <NavLink to="/" className="nav-link  text-white" aria-current="page">
              Home
            </NavLink>
          </li>
          <li onClick={()=>setSelectedTab('Vedios')}>
            <NavLink to="/vedios" className="nav-link text-white">
              Vedios
            </NavLink>
          </li>
          <li onClick={()=>setSelectedTab('FriendRequest')}>
            <NavLink to="/friend-Request" className="nav-link text-white">
              Friend-Request
            </NavLink>
          </li>
          <li onClick={()=>setSelectedTab('MarketPlace')}>
            <NavLink to="/market-place" className="nav-link text-white">
            MarketPlace
            </NavLink>
          </li>
          
          <li onClick={()=>setSelectedTab('Notification')}>
            <NavLink to="/Notification" className="nav-link text-white">
              Notification
            </NavLink>
          </li>
          <li  onClick={()=>setSelectedTab("CreatePost")}>
            <NavLink to="/create-post" className="nav-link text-white">
              CreatePost
            </NavLink>
          </li>
        </ul>
        <hr />
        <div className="dropdown">
        
            <strong><HiOutlineLogout />LogOut</strong>

        </div>
      </div>
    )
}

export default Sidebar;