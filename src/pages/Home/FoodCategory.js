import Photo1 from './photo/foodCategory1.png' 
import Photo2 from './photo/foodCategory2.png' 
import Photo3 from './photo/foodCategory3.png' 
import Photo4 from './photo/foodCategory4.png' 
import Background from './photo/foodCategory_background.png' 

export const FoodCategory = ()=>{
    return(
        <div className="foodCategory">
            <h3>Food Category</h3>
            <h2><span>Ch</span>oose Food Iteam</h2>
            <img src={Background} alt="" />
            <div className="foodCategory_content">
                <img src={Photo1} alt="" />
                <img src={Photo2} alt="" />
                <img src={Photo3} alt="" />
                <img src={Photo4} alt="" />
            </div>
        </div>
    )
}