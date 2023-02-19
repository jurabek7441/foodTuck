import { AboutUs } from "./pages/Home/AboutUs"
import { BlogPost } from "./pages/Home/BlogPost"
import { Chefs } from "./pages/Home/Chefs"
import { Choose_pick } from "./pages/Home/Choose&Pick"
import { FoodCategory } from "./pages/Home/FoodCategory"
import { Footer } from "./components/Footer"
import { Header } from "./pages/Home/Header"
import { Restaurant_active } from "./pages/Home/Restaurant_active"
import { Stat } from "./pages/Home/Stat"
import { Testimonial } from "./pages/Home/Tetsimonial"
import { WhyChooseUs } from "./pages/Home/WhyChooseUs"
import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home/Home"
import { Navbar } from "./components/Navbar"
import { Menu } from "./pages/Menu/Menu"
import { Shop } from "./pages/Shop/Shop"

export const Main = () =>{
    return (
        <div className="container">
        <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/menu" element={<Menu/>}/>
                <Route path="/shop" element={<Shop/>}/>

            </Routes>
        <Footer/>
        </div>
    )
}