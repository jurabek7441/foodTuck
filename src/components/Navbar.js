import Logo from '../pages/Home/photo/Foodtuck.png'
import {BiChevronDown} from 'react-icons/bi'
import {FiSearch} from 'react-icons/fi'
import {SlHandbag} from 'react-icons/sl'
import { NavLink } from 'react-router-dom'

export const Navbar = ()=>{
    return(
        <div className="navbar">

            <div className="logo">
                <img src={Logo} alt="" />
            </div>
            <div className="nav">
                <ul className="menu">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/menu">Menu</NavLink></li>
                    <li><NavLink to="/blog">Blog</NavLink></li>
                    <li><NavLink to="/pages">Pages</NavLink></li>
                    <li><NavLink to="/about">About <BiChevronDown/></NavLink></li>
                    <li><NavLink to="/shop">Shop</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
                <div className="search_cart">
                    <div className="search">
                        <input type="text" placeholder='Search...'/>
                        <i><FiSearch/></i>
                    </div>
                    <div className="cart">
                        <SlHandbag/>
                    </div>
                </div>
            </div>
        </div>
    )
}