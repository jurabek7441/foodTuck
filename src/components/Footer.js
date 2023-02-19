import FooterWatch from '../pages/Home/photo/footer_watch.png'
import Footer1 from '../pages/Home/photo/footerCard1.png'
import Footer2 from '../pages/Home/photo/footerCard2.png'
import Footer3 from '../pages/Home/photo/footerCard3.png'
import {FaFacebookF} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaYoutube} from 'react-icons/fa'
import {BsPinterest} from 'react-icons/bs'
export const Footer=()=>{
    return(
        <div className="footer">
            <div className="footer_top">
                <div className="footer_top_text">
                    <h2><span>St</span>ill You Need Our Support ?</h2>
                    <p>Don’t wait make a smart & logical quote here. Its pretty easy.</p>
                </div>
                <div className="footer_top_input">
                    <input type="text" placeholder=" Enter Your Email"/>
                    <button>Subscribe Now</button>
                </div>
            </div>
            <div className="footer_center">
                <div className="footer_center_col col1">
                    <h4>About Us.</h4>
                    <h5>orporate clients and leisure travelers has been relying on Groundlink for dependab safe, and professional chauffeured car service in major cities across World.</h5>
                    <div className="opening_hourses">
                        <figure><img src={FooterWatch} alt="" /></figure>
                        <div className="o_h_text">
                            <h6>Opening Houres</h6>
                            <p>Mon - Sat(8.00 - 6.00)</p>
                            <p>Sunday - Closed</p>
                        </div>
                    </div>
                </div>
                <div className="footer_center_col col2">
                    <h4>Useful Links</h4>
                    <p>About</p>
                    <p>News</p>
                    <p>Partners </p>
                    <p>Team</p>
                    <p>Menu</p>
                    <p>Contacts</p>
                </div>
                <div className="footer_center_col col3">
                    <h4>Help?</h4>    
                    <p>FAQ </p>
                    <p>Term & conditions</p>
                    <p>Reporting </p>
                    <p>Documentation</p>
                    <p>Support</p>
                    <p>Policy Privacy</p>
                </div>
                <div className="footer_center_col col4">
                    <h4>Recent Post</h4>
                    <div className="footer_center_col_card">
                        <figure>
                            <img src={Footer1} alt="" />
                        </figure>
                        <div className="date_name">
                                <p className="footer_date">
                                20 Feb 2022
                                </p>
                                <p className="footer_name">
                                Keep Your Business 
                                </p>
                        </div>
                    </div>
                    <div className="footer_center_col_card">
                        <figure>
                            <img src={Footer2} alt="" />
                        </figure>
                            <div className="date_name">
                                <p className="footer_date">
                                20 Feb 2022
                                </p>
                                <p className="footer_name">
                                Keep Your Business 
                                </p>
                            </div>
                    </div>
                    <div className="footer_center_col_card">
                        <figure>
                            <img src={Footer3} alt="" />
                        </figure>
                            <div className="date_name">
                                <p className="footer_date">
                                20 Feb 2022
                                </p>
                                <p className="footer_name">
                                Keep Your Business 
                                </p>
                            </div>
                    </div>
                </div>
            </div>
            <div className="footer_bottom">
                <div className="footer_bottom_left">
                    <p>
                    Copyright © 2022 by Ayeman. All Rights Reserved.
                    </p>
                </div>
                <div className="footer_bottom_right">
                    <i><FaFacebookF/></i>
                    <i><FaTwitter/></i>
                    <i><FaInstagram/></i>
                    <i className='youtube'><FaYoutube/></i>
                    <i><BsPinterest/></i>
                </div>
            </div>
        </div>
    )
}