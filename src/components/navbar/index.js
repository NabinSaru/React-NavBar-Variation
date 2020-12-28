import React,{useState} from 'react';
import {Nav, Bars, NavMenu, NavLink, NavBtn, NavBtnLink} from './navbarcomponents';
import * as AiIcons from 'react-icons/ai';
import {IconContext} from 'react-icons';
import { Link } from 'react-router-dom';
import {SidebarData} from './sidebarData';
import './Sidebar.css';


const Navbar = () => {
    const [sidebar,setSidebar]=useState(false);

    const showSidebar = ()=>{setSidebar(!sidebar)};

    return (
        <>
            <Nav>
                <NavLink to="/"><h1>LOGO</h1></NavLink>
            
                <Bars onClick={showSidebar}/>
                <NavMenu>
                    <NavLink to='/about' activeStyle>About</NavLink>
                    <NavLink to='/discover' activeStyle>Discover</NavLink>
                    <NavLink to='/services' activeStyle>Services</NavLink>
                    <NavLink to='/contact-us' activeStyle>Contact</NavLink>
                    <NavLink to='/signup' activeStyle>Sign Up</NavLink>
                    {/* 2nd variation, uncomment and comment the NavBtn */}
                    {/* <NavBtnLink to='/signin'>Sign In</NavBtnLink> */}
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                </NavBtn>
            </Nav>
            <nav className={sidebar? 'nav-menu active':'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                <IconContext.Provider value={{color:'#fff'}}>
                    <li className='navbar-toggle'>
                        <Link to="#" className="menu-bars">
                            <AiIcons.AiOutlineClose onClick={showSidebar}/>
                        </Link>
                    </li>
                    {SidebarData.map((item,index)=>{
                        return(
                            <li key={index} className={item.cName}>
                            <Link to={item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                            </li>
                        );
                    })}
                </IconContext.Provider>
                </ul>

            </nav>
        </>
    )
}

export default Navbar;
