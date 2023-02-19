import { MainCourse } from "./MainCourse"
import { StarterMenu } from "./StarterMenu"
import { Stat } from "../Home/Stat"
import { Footer } from "../../components/Footer"
import { Dessert } from "./Dessert"
import { Drinks } from "./Drinks"
import { Partners_Clients } from "./Partners&Clients"

export let Menu =()=>{
    return(
        <div className="menu_page">
            <StarterMenu/>
            <MainCourse/>
            <Stat/>
            <Dessert/>
            <Drinks/>
            <Partners_Clients/>
        </div>
    )
}