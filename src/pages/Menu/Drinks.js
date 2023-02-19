


import Drinks_photo from "./photo/drinks_photo.png";
import { FiCoffee } from "react-icons/fi";
export let Drinks = () => {
  let Drinks_data = [
    {
      id: 1,
      name: "Caffè macchiato",
      info: "Toasted French bread topped with romano, cheddar",
      cal: "560",
      price: 32,
    },
    {
      id: 2,
      name: "Aperol Spritz Capacianno",
      info: "Gorgonzola, ricotta, mozzarella, taleggio",
      cal: "700",
      price: 43,
    },
    {
      id: 3,
      name: "Caffe Latte Campuri",
      info: "Ground cumin, avocados, peeled and cubed",
      cal: "1000",
      price: 14,
    },
    {
      id: 4,
      name: "Tormentoso BushTea Pintoage",
      info: "Spreadable cream cheese, crumbled blue cheese",
      cal: "560",
      price: 35,
    },
  ];
  return (
    <div className="drinks">
      <div className="drinks_left">
            <div className="drinks_title">
                <i>
                    <FiCoffee />
                </i>
                <h2>Drinks</h2>
            </div>
            <div className="drinks_body">
            {Drinks_data.map((item, index) => (
                <div className="drinks_card" key={item.id}>
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
      <div className="drinks_right">
            <figure>
            <img src={Drinks_photo} alt="" />
            </figure>
      </div>
    </div>
  );
};
