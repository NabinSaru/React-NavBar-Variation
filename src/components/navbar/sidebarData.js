import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as Io5Icons from 'react-icons/io5';
import * as FaIcons from 'react-icons/fa';

export const SidebarData = [
    {
        title:'Home',
        path:'/',
        icon: <AiIcons.AiFillHome/>,
        cName:'nav-text'
    },
    {
        title:'About',
        path:'/about',
        icon: <FaIcons.FaRegUserCircle/>,
        cName:'nav-text'
    },
    {
        title:'Discover',
        path:'/discover',
        icon: <AiIcons.AiOutlineUser/>,
        cName:'nav-text'
    },
    {
        title:'Services',
        path:'/services',
        icon: <FaIcons.FaCartPlus/>,
        cName:'nav-text'
    },
    {
        title:'Contact US',
        path:'/contact-us',
        icon: <AiIcons.AiFillMail/>,
        cName:'nav-text'
    },
    {
        title:'Sign Up',
        path:'/signup',
        icon: <IoIcons.IoMdDoneAll/>,
        cName:'nav-text'
    },
    {
        title:'Sign In',
        path:'/signin',
        icon: <Io5Icons.IoEnter/>,
        cName:'nav-text'
    },

]