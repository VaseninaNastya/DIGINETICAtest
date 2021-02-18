import "./ResultsHeaderItem.module.scss";
import create from "../../utils/create.utils.js";
class ResultsHeaderItem {
  generateLayout() {
    return create("div", "resultsHeader_item", [
      create("img", "resultsHeader_item_img"),
      create("div", "resultsHeader_item_description", [
        create("span", "resultsHeader_item_title", "Название категории"),
        create("span", "resultsHeader_item_quantity", "134 товара"),
      ]),
    ]);
  }
}
export default ResultsHeaderItem;
