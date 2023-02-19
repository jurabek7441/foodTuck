import FreshLime from "./photo/fresh_lime.png";
import ChocolateMuffin from "./photo/chocolate_muffin.png";
import Burger from "./photo/burger.png";
import CountryBurger from "./photo/country_burger.png";
import Drink from "./photo/drink.png";
import Pizza from "./photo/pizza.png";
import CheeseButter from "./photo/cheese_butter.png";
import Sandwiches from "./photo/sandwiches.png";
import ChickenChup from "./photo/chicken_chup.png";

import { FiChevronsLeft } from "react-icons/fi";
import { FiChevronsRight } from "react-icons/fi";

export let ShopLeft = () => {
  let shopLeft_data = [
    { id: 1, name: "Fresh Lime", price: 38, discount: "$45", photo: FreshLime },
    {
      id: 2,
      name: "Chocolate Muffin",
      price: 28,
      discount: "",
      photo: ChocolateMuffin,
    },
    { id: 3, name: "Burger", price: 21, discount: "$45", photo: Burger },
    {
      id: 4,
      name: "Country Burger",
      price: 45,
      discount: "",
      photo: CountryBurger,
    },
    { id: 5, name: "Drink", price: 23, discount: "$45", photo: Drink },
    { id: 6, name: "Pizza", price: 43, discount: "", photo: Pizza },
    {
      id: 7,
      name: "Cheese Butter",
      price: 10,
      discount: "",
      photo: CheeseButter,
    },
    { id: 8, name: "Sandwiches", price: 25, discount: "", photo: Sandwiches },
    {
      id: 9,
      name: "Chicken Chup",
      price: 12,
      discount: "",
      photo: ChickenChup,
    },
    {
      id: 10,
      name: "Country Burger",
      price: 45,
      discount: "",
      photo: CountryBurger,
    },
    { id: 11, name: "Drink", price: 23, discount: "$45", photo: Drink },
    { id: 12, name: "Pizza", price: 43, discount: "", photo: Pizza },
    {
      id: 13,
      name: "Cheese Butter",
      price: 10,
      discount: "",
      photo: CheeseButter,
    },
    { id: 14, name: "Sandwiches", price: 25, discount: "", photo: Sandwiches },
    {
      id: 15,
      name: "Chicken Chup",
      price: 12,
      discount: "",
      photo: ChickenChup,
    },
  ];
  return (
    <div className="shopLeft">
      <div className="shopLeft_top">
        <div className="sort">
          <label htmlFor="newest">Sort By :</label>
          <input type="text" placeholder="Newest" name="newest" id="newest" />
        </div>
        <div className="show">
          <label htmlFor="">Show :</label>
          <input type="text" placeholder="Default" />
        </div>
      </div>
      <div className="shopLeft_center">
        {shopLeft_data.map((item, index) => (
          <div className="shopLeft_card" key={index}>
            <figure>
              <img src={item.photo} alt={item.name} />
            </figure>
            <h4>{item.name}</h4>
            <div className="price">
              <p>${(item.price).toFixed(2)}</p>
              <del>{item.discount}</del>
            </div>
          </div>
        ))}
      </div>
      <div className="shopLeft_pagination">
        <div className="to_left">
          <FiChevronsLeft />
        </div>
        <div className="page_1">1</div>
        <div className="page_2">2</div>
        <div className="page_3">3</div>
        <div className="to_right">
          <FiChevronsRight />
        </div>
      </div>
    </div>
  );
};
