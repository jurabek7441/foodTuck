import Restaurant_logo from './photo/restaurant_logo.png'
import Bakery_logo from './photo/bakery_logo.png'
import Fork_spoon from './photo/fork&spoon_logo.png'
import Wolf_coffee from './photo/wolf_coffee.png'
import Bistro_logo from './photo/bistro_logo.png'
import Bakery_slogan from './photo/bakery_slogan.png'

export let Partners_Clients = ()=>{
    return(
        <div className="partners_clients">
            <h6>
            Partners & Clients
            </h6>
            <h2>We work with the best pepole</h2>
            <div className="partners_clients_logos">
                <img src={Restaurant_logo} alt="" />
                <img src={Bakery_logo} alt="" />
                <img src={Fork_spoon} alt="" />
                <img src={Wolf_coffee} alt="" />
                <img src={Bistro_logo} alt="" />
                <img src={Bakery_slogan} alt="" />
            </div>
        </div>
    )
}