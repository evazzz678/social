// import React, { useContext } from 'react'
// import './Header.css'
// import logo from "./../../assets/logo.png"
// import SearchBar from '../search/SearchBar'
// import { Link } from 'react-router-dom'
// import { changeTheme } from '../../redux/redux'
// import { useDispatch, useSelector } from 'react-redux'




// function Header() {


//   let theme = useSelector((state) => state.value)
//   let dispatch = useDispatch()




//   const toggle_mode = () => {
//     dispatch(changeTheme())
//   }

//   return (


//     <div className='nav-container'>

//       <div className={`navbar`}>
//         <div className='logo'>
//           <img src={logo} alt="" className='logo-icon' />
//         </div>

//         <SearchBar/>
       

//         <div className='menus'>
//           <ul>
//             <li>
//               <Link to="/home" className='link'> 
//               <i className="fa-solid fa-house"></i>
//               </Link>
//             </li>
//             <li>

//               <Link className='link' to="/notification">
//               <i className="fa-solid fa-bell"></i>
//               </Link>
//             </li>
//             <li>
//               <Link className='link' to="/addpost"><li>
//               <i className="fa-regular fa-square-plus"></i>
//                 </li></Link>
//             </li>

//           </ul>
//         </div>


//         <div className='theme-toggle'>

//           <div onClick={() => { toggle_mode() }} className='toggle-btn'>

//             {
//               theme == 'light' ? <i className="fa-solid fa-toggle-off"></i> : <i className="fa-solid fa-toggle-on"></i>
//             }


//           </div>

//         </div>

//       </div>
//     </div>

//   )
// }


// export default Header


import React from 'react';
import './Header.css';
import logo from './../../assets/logo.png';
import SearchBar from '../search/SearchBar';
import { Link } from 'react-router-dom';
import { changeTheme } from '../../redux/redux';
import { useDispatch, useSelector } from 'react-redux';

function Header() {
  const theme = useSelector((state) => state.value);
  const dispatch = useDispatch();

  const toggleMode = () => {
    dispatch(changeTheme());
  };

  return (
    <div className='nav-container'>
      <div className={`navbar ${theme}`}>
        <div className='logo'>
          <Link to="/home">
            <img src={logo} alt="Logo" className='logo-icon' />
          </Link>
        </div>

        <div className='search'>
          <SearchBar />
        </div>

        <div className='menus'>
          <ul>
            <li>
              <Link to="/home" className='links'>
                <i className="fa-solid fa-house"></i>
              </Link>
            </li>
            <li>
              <Link to="/notification" className='links'>
                <i className="fa-solid fa-bell"></i>
              </Link>
            </li>
            <li>
              <Link to="/addpost" className='links'>
                <i className="fa-regular fa-square-plus"></i>
              </Link>
            </li>
          </ul>
        </div>

        <div className='theme-toggle' onClick={toggleMode}>
          <i className={`fa-solid ${theme === 'light' ? 'fa-toggle-off' : 'fa-toggle-on'}`}></i>
        </div>
      </div>
    </div>
  );
}

export default Header;
