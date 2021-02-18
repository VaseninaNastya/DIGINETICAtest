import "./Aside.module.scss";
import create from "../../utils/create.utils.js";
import Price from "../Price/Price.js";
class Aside {
  generateLayout() {
    const categoryList = create("ul", "categoryList");
    const price = new Price();
    const categoryList_container = create(
      "div",
      "aside_categoryList_container",
      [
        create("span", "aside_categoryList_title", "Все категории"),
        categoryList,
      ]
    );
    const categoryList_item = create("li", "categoryList_item", [
      "Категория в которой нашли что-то ",
      create("span", "categoryList_item_description", "(ххх)"),
    ]);
    for (let i = 0; i < 8; i++) {
      categoryList.append(categoryList_item.cloneNode(true));
    }
    const categoryList_item__showOther = create(
      "li",
      "categoryList_item categoryList_item__showOther",
      "Ещё 10 категорий..."
    );
    categoryList.append(categoryList_item__showOther);
    return create("div", "aside_container", [
      categoryList_container,
      price.generateLayout(),
    ]);
  }

}
export default Aside;
