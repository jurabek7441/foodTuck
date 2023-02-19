import Stat1 from './photo/stat1.png'
import Stat2 from './photo/stat2.png'
import Stat3 from './photo/stat3.png'
import Stat4 from './photo/stat4.png'


export const Stat =()=>{
    let statDate = [
        {
            id: 1, photo: Stat1, name: 'Professional Chefs', number: '420'
        },
        {
            id: 2, photo: Stat2, name: 'Items Of Food', number: '320'
        },
        {
            id: 3, photo: Stat3, name: 'Years Of Experienced', number: '30+'
        },
        {
            id: 4, photo: Stat4, name: 'Happy Customers', number: '220'
        }
    ]
    return(
        <div className="stat">{
            statDate.map((item, index)=>(
                <div className="statCard" key={item.id}>
                    <figure><img src={item.photo} alt={item.name} /></figure>
                    <h5>{item.name}</h5>
                    <h4>{item.number}</h4>
                </div>
            ))

            
        }
        </div>
    )
}