import Choose_pick_photo from './photo/choose_pick_photo.png'
import Menu1 from './photo/menu1.png'
import Menu2 from './photo/menu2.png'
import Menu3 from './photo/menu3.png'
import Menu4 from './photo/menu4.png'
import Menu5 from './photo/menu5.png'
import Menu6 from './photo/menu6.png'
import Menu7 from './photo/menu7.png'
import Menu8 from './photo/menu8.png'

export const Choose_pick = ()=>{
    let menuData=[
        {
            id: 1, photo: Menu1, name: "Lettuce Leaf", info: "Lacus nisi, et ac dapibus velit in consequat.", price: "12.5$"
        },
        {
            id: 2, photo: Menu2, name: "Glow Cheese", info: "Lacus nisi, et ac dapibus velit in consequat.", price: "12.5$"
        },
        {
            id: 3, photo: Menu3, name: "Fresh Breakfast", info: "Lacus nisi, et ac dapibus velit in consequat.", price: "14.5$"
        },
        {
            id: 4, photo: Menu4, name: "Italian Pizza", info: "Lacus nisi, et ac dapibus velit in consequat.", price: "14.5$"
        },
        {
            id: 5, photo: Menu5, name: "Mild Butter", info: "Lacus nisi, et ac dapibus velit in consequat.", price: "12.5$"
        },
        {
            id: 6, photo: Menu6, name: "Sllice Beef", info: "Lacus nisi, et ac dapibus velit in consequat.", price: "12.5$"
        },
        {
            id: 7, photo: Menu7, name: "Fresh Bread", info: "Lacus nisi, et ac dapibus velit in consequat.", price: "12.5$"
        },
        {
            id: 8, photo: Menu8, name: "Mushaom Pizza", info: "Lacus nisi, et ac dapibus velit in consequat.", price: "12.5$"
        }
    ]
    return(
        <div className="choose_pick">

            <h3>Choose & pick</h3>
            <h2><span>Fr</span>om Our Menu</h2>
            <ul className="menuBar">
                <li><a href="#">Breakfast</a></li>
                <li><a href="#">Lunch</a></li>
                <li><a href="#">Dinner</a></li>
                <li><a href="#">Dessert</a></li>
                <li><a href="#">Drink</a></li>
                <li><a href="#">Snack</a></li>
                <li><a href="#">Suops</a></li>
            </ul>
            <div className="choose_pick_content">
                <div className="choose_pick_left">
                    <img src={Choose_pick_photo} alt="" />
                </div>
                
                <div className="choose_pick_right">
                    {
                        menuData.map((item, index)=>(
                            <div className="choose_pick_card" key={item.id}>
                                <figure><img src={item.photo} alt={item.name} /></figure>
                                <div className="card_content">
                                    <h5>{item.name}</h5>
                                    <p>{item.info}</p>
                                    <h6>{item.price}</h6>
                                </div>
                            </div>
                        ))
                    }
                    
                </div>
            </div>
        </div>
    )
}