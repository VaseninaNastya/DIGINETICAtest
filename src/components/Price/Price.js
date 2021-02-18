import "./Price.module.scss";
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
    const slider = create('p',null,[
      create('input', null, null, null, ["type","text"],['id',"amount"],["style","border:0; color:#f6931f; font-weight:bold;"]),
      create('div',null,null,null,["id","slider-range"])
    ])
/*<p>
  <label for="amount">Price range:</label>
  <input type="text" id="amount" readonly style="border:0; color:#f6931f; font-weight:bold;">
</p>*/

    const price_container = create("div", "price_container", [price_title,price_inputs_container,slider ]);
    return price_container;
  }
}
export default Price;

