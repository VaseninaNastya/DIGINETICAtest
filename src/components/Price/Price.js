import "./Price.module.scss";
import "../../lib/multirange.css";
import multirange from "../../lib/multirange.js";
import create from "../../utils/create.utils.js";
class Price {
  generateLayout() {
    const price_title = create("span", "price_title", "Цена, валюта");
    const price_inputs_container = create("div", "price_inputs_container",[
      create('span', null, 'от'),
      create('input', "price_input",null,null,['id',"price_input__start"]),
      create('span', null, 'до'),
      create('input', "price_input",null,null,['id',"price_input__end"]),
      create('span', null, 'p'),
    ]);
    const slider = create('input', "price_slider", null,null,['type',"range"],['multiple',''],['value',"10,80"])

    const price_container = create("div", "price_container", [price_title,price_inputs_container,slider ]);
    return price_container;
  }
}
export default Price;

