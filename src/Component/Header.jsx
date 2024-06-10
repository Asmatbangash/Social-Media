import { IoHomeOutline } from "react-icons/io5";
import { IoHome } from "react-icons/io5";
import { CiYoutube } from "react-icons/ci";
import { FaYoutubeSquare } from "react-icons/fa";
import { BsPeople } from "react-icons/bs";
import { BsPeopleFill } from "react-icons/bs";
import { VscArchive } from "react-icons/vsc";
import { HiArchiveBox } from "react-icons/hi2";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoNotifications } from "react-icons/io5";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

function Header() {
let [selectedTab, setSelectedTab]= useState("Home")
  return (
    <header className="p-3 text-bg-dark header">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <Link
            to="/"
            className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
          >
            <svg
              className="bi me-2"
              width="40"
              height="32"
              role="img"
              aria-label="Bootstrap"
            >
              <use xlinkHref="#bootstrap"></use>
            </svg>
          </Link>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <Link to="/" className="nav-link px-2 text-light fs-4 h-icon">
            {selectedTab === "Home" ? <IoHome /> : <IoHomeOutline />}
              </Link>
            </li>
            <li onClick={()=>setSelectedTab('Vedios')} >
              <Link to="/vedios" className="nav-link px-2 text-light fs-4 h-icon">
            {selectedTab === "Vedios" ? <FaYoutubeSquare /> : <CiYoutube />}
              </Link>
            </li>
            <li onClick={()=>setSelectedTab('FriendRequest')}>
              <Link to="/friend-Request" className="nav-link px-2 text-white fs-4 h-icon">
               {selectedTab === "FriendRequest" ? <BsPeopleFill /> : <BsPeople /> } 
              </Link>
            </li>
            <li onClick={()=>setSelectedTab('market-place')}>
              <Link to="/market-place" className="nav-link px-2 text-white fs-4 h-icon">
               {selectedTab === "market-place" ?  <HiArchiveBox/> : <VscArchive />}
              </Link>
            </li>
            <li onClick={()=>setSelectedTab('Notification')}>
              <Link to="/Notification" className="nav-link px-2 text-white fs-4">
                {selectedTab === "Notification" ? <IoNotifications /> : <IoMdNotificationsOutline />}
              </Link>
            </li>
          </ul>

          <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
            <input
              type="search"
              className="form-control form-control-dark text-bg-dark"
              placeholder="Search..."
              aria-label="Search"
            />
          </form>

          <div className="text-end">
            <Link to="/Login">
              <button type="button" className="btn btn-outline-light me-2">
              Login
            </button>
            </Link>
            <Link to="/signUp">
              <button type="button" className="btn btn-warning">
              Sign-up
            </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
