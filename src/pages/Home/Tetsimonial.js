import CardPhoto from './photo/testimonial_photo.png'
import Quotes from './photo/Quotes.png'
import Star_true from './photo/star_true.png'
import Star_false from './photo/star_false.png'


export const Testimonial= ()=>{
    return(
        <div className="testimonial">
            <h3>Testimonials</h3>
            <h2>What our client are saying</h2>
            <div className="testimonial_content">
                <div className="testimonial_card">
                    <figure><img src={CardPhoto} alt="" /></figure>
                    <div className="quotes">
                        <img src={Quotes} alt="" />
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
                    <div className="star_box">
                        <img src={Star_true} alt="" />
                        <img src={Star_true} alt="" />
                        <img src={Star_true} alt="" />
                        <img src={Star_true} alt="" />
                        <img src={Star_false} alt="" />
                    </div>
                    <h4>Alamin Hasan</h4>
                    <p>Food Specialist</p>
                </div>
            </div>
            
            <div className="slider_box">
                <span className="treu"></span>
                <span className="false"></span>
                <span className="false"></span>
                <span className="false"></span>
            </div>
        </div>
    )
}