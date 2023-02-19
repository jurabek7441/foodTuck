import Chefs1 from './photo/chefs1.png'
import Chefs2 from './photo/chefs2.png'
import Chefs3 from './photo/chefs3.png'
import Chefs4 from './photo/chefs4.png'

export const Chefs = ()=>{
    let chefsData = [
        {
            id: 1, photo: Chefs1, name: "D.Estwood", info: "Chief Chef"
        },
        {
            id: 2, photo: Chefs2, name: "D.Scoriesh", info: "Assistant Chef"
        },
        {
            id: 3, photo: Chefs3, name: "M. William", info: "Advertising Chef"
        },
        {
            id: 4, photo: Chefs4, name: "W.Readfroad", info: "Chef"
        },
    ]
    return(
        <div className="chefs">
            <h3>Chefs</h3>
            <h2><span>Me</span>et Our Chef</h2>
            <div className="chefs_content">
                {
                    chefsData.map((item, index)=>(
                        <div className="chefs_card" key={item.id}>
                            <img src={item.photo} alt="" />
                            <div className="chefs_card_text">
                                <h4>{item.name}</h4>
                                <p>{item.info}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <button>See More</button>
        </div>
    )
}