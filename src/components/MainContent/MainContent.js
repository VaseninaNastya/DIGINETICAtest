import "./MainContent.module.scss";
import create from "../../utils/create.utils.js";
import MainContentSort from "../MainContentSort/MainContentSort.js";
import CardProduct from "../CardProduct/CardProduct.js"
import Pagination from "../Pagination/Pagination.js"
class MainContent {
  generateLayout() {
    const sort = new MainContentSort();
    const cardProduct = new CardProduct();
    const pagination = new Pagination();
    const cardProducts_list = create('div', "cardProducts_list")
    const cardProducts_list_row = create("div","cardProducts_list_row")
    const mainContent_container = create("div", "mainContent_container", [
      sort.generateLayout(),
      cardProducts_list,
      pagination.generateLayout()
    ]);
    for(let i = 0; i<3;i++){
      cardProducts_list_row.append(cardProduct.generateLayout())
    }
    for(let i = 0; i<3;i++){
      cardProducts_list.append(cardProducts_list_row.cloneNode(true))
    }
    return mainContent_container
  }
}
export default MainContent;
