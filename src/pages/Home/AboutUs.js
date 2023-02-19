import {BsCheck2} from 'react-icons/bs'
import Line1 from './photo/about_us1.png'
import Line2_1 from './photo/about_us2.png'
import Line2_2 from './photo/about_us3.png'
export const AboutUs = () =>{
    return(
        <div className="aboutUs">
            <div className="aboutUs_left">
                <h3>About us</h3>
                <h2><span>We</span> Create the best foody product</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
                <p><BsCheck2/> Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
                <p><BsCheck2/>  Quisque diam pellentesque bibendum non dui volutpat fringilla </p>
                <p><BsCheck2/> Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                <button>Read More</button>
            </div>
            <div className="aboutUs_right">
                <figure className="line_1">
                    <img src={Line1} alt="" />
                </figure>
                <figure className="line_2">
                    <img src={Line2_1} alt="" />
                    <img src={Line2_2} alt="" />
                </figure>
            </div>
        </div>
    )
}