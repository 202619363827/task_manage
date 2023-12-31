import React from "react";
import style from "./Navbar.module.css";


const Navbar = () => {

  const userData=JSON.parse(localStorage.getItem('user'))

  const clearStorageData = () => {
    localStorage.clear();
    window.location.reload();
  };


  return (
    <div className={style.navbar}>
      <div className={style.navbarLeft}>    
        <h2 className={style.logo}>Task Management</h2>
      </div>
      <div className={style.navbarRight}>
        <img
          className={style.userImage}
          src="https://th.bing.com/th/id/OIP.0KXEfkEY75TAV-MuuvO_-wHaHa?w=195&h=195&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          alt="user"
        />
        {userData? <h3 className={style.user}>{userData.firstName}{" "}{userData.lastName}</h3>:''}
        <button
          className={style.logout}
          onClick={clearStorageData}
        >
          logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;