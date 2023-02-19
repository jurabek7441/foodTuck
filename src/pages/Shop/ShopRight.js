import { BsSearch } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import LatestCard_photo from "./photo/latest_product.png";
export let ShopRight = () => {
  let shopRight_data = [
    {
      id: 1,
      name: "Pizza",
      price: 35,
      photo: LatestCard_photo,
    },
    {
      id: 2,
      name: "Cupchake",
      price: 35,
      photo: LatestCard_photo,
    },
    {
      id: 3,
      name: "Cookies",
      price: 35,
      photo: LatestCard_photo,
    },
    {
      id: 4,
      name: "Burger",
      price: 35,
      photo: LatestCard_photo,
    },
  ];
  let productTags_data = [
    { id: 1, name: "Services" },
    { id: 2, name: "Our Menu" },
    { id: 3, name: "Pizza" },
    { id: 4, name: "Cupcake" },
    { id: 5, name: "Burger" },
    { id: 6, name: "Cookies" },
    { id: 7, name: "Our Shop" },
    { id: 8, name: "Tandoori Chicken" },
  ];
  let shopCategory_data = [
    { id: 1, name: "Sandwiches" },
    { id: 2, name: "Burger" },
    { id: 3, name: "Chicken Chup" },
    { id: 4, name: "Drink" },
    { id: 5, name: "Pizza" },
    { id: 6, name: "Thi" },
    { id: 7, name: "Non Veg" },
    { id: 8, name: "Uncategorized" },
  ];
  return (
    <div className="shopRight">
      <div className="search_product">
        <input type="text" placeholder="Search Product" />
        <i>
          <BsSearch />
        </i>
      </div>
      <div className="shopRight_category">
        <h2>Category</h2>
        <div className="shopCategory_content">
          {shopCategory_data.map((item, index) => (
            <form className="shopCategory_item" key={index}>
              <input type="checkbox" name={item.name} id={item.name} />
              <label htmlFor={item.name}>{item.name}</label>
            </form>
          ))}
        </div>
      </div>
      <div className="perfect_taste">
        <div className="perfect_name_price">
          <div className="perfect_name">
            <h4>Perfect Taste</h4>
            <h3>Classic Restaurant</h3>
            <div className="perfect_price">
              <p>45.00$</p>
            </div>
          </div>
        </div>
        <div className="perfect_shop">
          <p>Shop Now</p>
          <i>
            <BsArrowRight />
          </i>
        </div>
      </div>
      <div className="shopFilter">
        <h3>Filter By Price</h3>
        <input type="range" />
        <div className="filter_item">
          <p>From $0 to $8000</p>
          <p>Filter</p>
        </div>
      </div>
      <div className="latest_product">
        <div className="latest_product_title">
          <h2>Latest Products</h2>
        </div>
        <div className="latest_product_content">
          {shopRight_data.map((item, index) => (
            <div className="shopRight_card" key={index}>
              <figure>
                <img src={item.photo} alt={item.name} />
              </figure>
              <div className="shopRight_card_content">
                <h5>{item.name}</h5>
                <div className="starBox">stars</div>
                <h4>${item.price.toFixed(2)}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="productTags">
        <h2>Product Tags</h2>
        {productTags_data.map((item, index) => (
          <div className="productTags_content" key={index}>
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
