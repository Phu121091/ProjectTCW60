import React, { useEffect ,useState ,useContext } from "react";
import { NavLink,Link, useNavigate, useLocation } from "react-router-dom";
import LogoHome from '../Logo';
import SearchC from "../Search";
import {BsSuitHeart,BsPerson} from 'react-icons/bs';
import './header.css';
import {UserContext} from '../HeadFoot';



const Header = () => {
  
  const username = useContext(UserContext);
  console.log(username);

  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    let current = localStorage.getItem("currentUser")
      ? JSON.parse(localStorage.getItem("currentUser"))
      : null;
    if (current) {
      setCurrentUser(current);
    } else {
      setCurrentUser(null);
    }
    console.log(currentUser);
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/log-in", { replace: true });
  };

  const handleActive = ({ isActive }) => {
    return isActive && "active";
  };

  return (
    <div className="header">
      <div className="header-top">    
      <NavLink to="/" id='logo'>
      <LogoHome/>
      </NavLink>

      <SearchC/>
      </div>

      <div className="header-bot">
      <div className="menu">
      <NavLink to="/nhadatban" className={handleActive} >
        Nhà đất bán
      </NavLink>

      <NavLink to="/nhadatchothue" className={handleActive}>
        Nhà đất cho thuê
      </NavLink>

      <NavLink to="/duan" className={handleActive}>
        Dự án
      </NavLink>

      <NavLink to="/tintuc" className={handleActive}>
        Tin tức
      </NavLink>

      <NavLink to="/danhba" className={handleActive}>
        Danh bạ
      </NavLink>
      </div>
      
      { currentUser ?
      (
        <div className="log">
          <BsSuitHeart/>
          <BsPerson/>
          <Link  className="sign">{currentUser.email}</Link>
          <button className="logout" onClick={handleLogout}>Đăng xuất</button>
          <Link to="/Create_New_Post" className="post" >Đăng tin</Link>
        </div>

      ) :
      (
        <div className="log">
        <Link to="/Dangki" className="sign">Đăng kí</Link>
        <Link to="/Dangnhap" className="login">Đăng nhập</Link>
        </div>
      )
      }
      
      </div>
     
    </div>
  )
}

export default Header