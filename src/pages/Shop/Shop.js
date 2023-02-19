import { ShopLeft } from "./ShopLeft"
import { ShopRight } from "./ShopRight"


export let Shop = ()=>{
    return(
        <div className="shop">
            <ShopLeft/>
            <ShopRight/>
        </div>
    )
}