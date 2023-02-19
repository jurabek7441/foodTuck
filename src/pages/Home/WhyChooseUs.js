import Photo1 from './photo/whyChoose1.png'
import Photo2 from './photo/whyChoose2.png'
import Photo3 from './photo/whyChoose3.png'
import Photo4 from './photo/whyChoose4.png'
import Photo5 from './photo/whyChoose5.png'
import Photo6 from './photo/whyChoose6.png'
import FastFood from './photo/Hamburger.png'
import Lunch from './photo/Cookie.png'
import Dinner from './photo/Dinner.png'
import Year30 from './photo/year30.png'

export const WhyChooseUs = ()=> {
    return(
        <div className="whyChoose">
            <div className="whyChoose_left">
                <div className="line1">
                    <img src={Photo1} alt="" />
                    <img src={Photo2} alt="" />
                </div>
                <div className="line2">
                    <img src={Photo3} alt="" />
                    <img src={Photo4} alt="" />
                    <figure>
                        <img src={Photo5} alt="" />
                        <img src={Photo6} alt="" />
                    </figure>
                </div>
            </div>
            <div className="whyChoose_right">
                <h3>Why Choose us</h3>
                <h2><span>Ex</span>ta ordinary taste And Experienced </h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
                <div className="food_lunch_diner">
                    <div className="fastFood">
                        <img src={FastFood} alt="" />
                    </div>
                    <div className="lunch">
                        <img src={Lunch} alt="" />
                    </div>
                    <div className="dinner">
                        <img src={Dinner} alt="" />
                    </div>
                </div>
                <div className="year30">
                    <img src={Year30} alt="" />
                </div>
            </div>
        </div>
    )
}