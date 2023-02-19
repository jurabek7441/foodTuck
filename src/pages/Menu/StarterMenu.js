import Stratmenu_photo from "./photo/starterMenu_photo.png";
import { FiCoffee } from "react-icons/fi";
export let StarterMenu = () => {
  let starterMenu_data = [
    {
      id: 1,
      name: "Alder Grilled Chinook Salmon",
      info: "Toasted French bread topped with romano, cheddar",
      cal: "560",
      price: 32,
    },
    {
      id: 2,
      name: "Berries and creme tart",
      info: "Gorgonzola, ricotta, mozzarella, taleggio",
      cal: "700",
      price: 43,
    },
    {
      id: 3,
      name: "Tormentoso Bush Pizza Pintoage",
      info: "Ground cumin, avocados, peeled and cubed",
      cal: "1000",
      price: 14,
    },
    {
      id: 4,
      name: "Spicy Vegan Potato Curry",
      info: "Spreadable cream cheese, crumbled blue cheese",
      cal: "560",
      price: 35,
    },
  ];
  return (
    <div className="starterMenu">
      <div className="starterMenu_left">
        <figure>
          <img src={Stratmenu_photo} alt="" />
        </figure>
      </div>
      <div className="starterMenu_right">
        <div className="starterMenu_title">
          <i>
            <FiCoffee />
          </i>
          <h2>Starter Menu</h2>
        </div>
        <div className="starterMenu_body">
          {
          starterMenu_data.map((item, index) => (
            <div className="starterMenu_card" key={item.id}>
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
