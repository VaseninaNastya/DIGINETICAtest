import "./CardProduct.module.scss";
import create from "../../utils/create.utils.js";
class CardProduct {
  generateLayout() {
    const cardProduct_img = create("img", "cardProduct_img");
    const cardProduct_name = create("div", "cardProduct_name", "Наименование товара, которое не более 2 строк");
    const cardProduct_button = create("div", "button__prime", "Кнопка")
    const cardProduct_prise = create('div',"cardProduct_prise",[
      create('span',"cardProduct_prise__new", 'ХХ ХХХ , $'),
      create('span',"cardProduct_prise__old", 'ХХ ХХХ $'),
    ])
    const cardProduct_container = create("div", "cardProduct_container", [
      cardProduct_img,
      cardProduct_name,
      cardProduct_prise,
      cardProduct_button,
    ]);
    return cardProduct_container;
  }
}
export default CardProduct;
