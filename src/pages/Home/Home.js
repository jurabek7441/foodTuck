import { AboutUs } from "./AboutUs"
import { BlogPost } from "./BlogPost"
import { Chefs } from "./Chefs"
import { Choose_pick } from "./Choose&Pick"
import { FoodCategory } from "./FoodCategory"
import { Header } from "./Header"
import { Restaurant_active } from "./Restaurant_active"
import { Stat } from "./Stat"
import { Testimonial } from "./Tetsimonial"
import { WhyChooseUs } from "./WhyChooseUs"



export let Home = ()=>{
    return(
        <div className="home">
            <Header/>
            <AboutUs/>
            <FoodCategory/>
            <WhyChooseUs/>
            <Stat/>
            <Choose_pick/>
            <Chefs/>
            <Testimonial/>
            <Restaurant_active/>
            <BlogPost/>
        </div>
    )
}