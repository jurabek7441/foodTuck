import MainCourse_photo from "./photo/mainCourse_photo.png";
import { FiCoffee } from "react-icons/fi";
export let MainCourse = () => {
  let MainCourse_data = [
    {
      id: 1,
      name: "Optic Big Breakfast Combo Menu",
      info: "Toasted French bread topped with romano, cheddar",
      cal: "560",
      price: 32,
    },
    {
      id: 2,
      name: "Cashew Chicken With Stir-Fry",
      info: "Gorgonzola, ricotta, mozzarella, taleggio",
      cal: "700",
      price: 43,
    },
    {
      id: 3,
      name: "Vegetables & Green Salad",
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
    <div className="mainCourse">
      <div className="mainCourse_left">
            <div className="mainCourse_title">
                <i>
                    <FiCoffee />
                </i>
                <h2>Main Course</h2>
            </div>
            <div className="mainCourse_body">
            {MainCourse_data.map((item, index) => (
                <div className="mainCourse_card" key={item.id}>
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
      <div className="mainCourse_right">
            <figure>
            <img src={MainCourse_photo} alt="" />
            </figure>
      </div>
    </div>
  );
};
