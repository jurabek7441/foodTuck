
import HeaderPhoto from './photo/header_photo.png'

import {RiFacebookFill} from 'react-icons/ri'
import {BsTwitter} from 'react-icons/bs'
import {TfiPinterest} from 'react-icons/tfi'
import { Navbar } from '../../components/Navbar'

export const Header = () => {
    return(
        <div className="header">
            
            <div className="header_content">
                <div className="icon_box">
                    <span></span>
                    <i className='facebook'><RiFacebookFill/></i>
                    <i className='twitter'><BsTwitter/></i>
                    <i className='pinterest'><TfiPinterest/></i>
                    <span></span>
                </div>
                <div className="header_content_left">
                    <h3>Its Quick & Amusing!</h3>
                    <h2><span>Th</span>e Art of speed food Quality</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue</p>
                    <button>See Menu</button>
                </div>
                <div className="header_content_right">
                    <figure>
                    <img src={HeaderPhoto} alt="" />
                    </figure>
                </div>
            </div>
        </div>
    )
}