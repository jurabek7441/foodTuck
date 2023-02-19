

import Dessert_photo from "./photo/desert_photo.png";
import { FiCoffee } from "react-icons/fi";
export let Dessert = () => {
  let Dessert_data = [
    {
      id: 1,
      name: "Fig and lemon cake",
      info: "Toasted French bread topped with romano, cheddar",
      cal: "560",
      price: 32,
    },
    {
      id: 2,
      name: "Creamy mascarpone cake",
      info: "Gorgonzola, ricotta, mozzarella, taleggio",
      cal: "700",
      price: 43,
    },
    {
      id: 3,
      name: "Pastry, blueberries, lemon juice",
      info: "Ground cumin, avocados, peeled and cubed",
      cal: "1000",
      price: 14,
    },
    {
      id: 4,
      name: "Pain au chocolat",
      info: "Spreadable cream cheese, crumbled blue cheese",
      cal: "560",
      price: 35,
    },
  ];
  return (
    <div className="dessert">
      <div className="dessert_left">
        <figure>
          <img src={Dessert_photo} alt="" />
        </figure>
      </div>
      <div className="dessert_right">
        <div className="dessert_title">
          <i>
            <FiCoffee />
          </i>
          <h2>Dessert</h2>
        </div>
        <div className="dessert_body">
          {
          Dessert_data.map((item, index) => (
            <div className="dessert_card" key={item.id}>
              <div className="name_info">
                <h4>{item.name}</h4>
                <h6>{item.info}</h6>
                <p>{item.cal} CAL</p>
              </div>
              <div className="card_price">
                <h4>{item.price}$</h4>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
