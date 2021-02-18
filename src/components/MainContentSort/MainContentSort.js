import "./MainContentSort.module.scss";
import create from "../../utils/create.utils.js";
class MainContentSort {
  generateLayout() {
    const mainContentSort_showCounter_container = create(
      "div",
      "mainContentSort_showCounter_container",
      [
        create("span", "mainContentSort_showCounter_label", "показывать по"),
        create("select", "mainContentSort_showCounter", [
          create("option", "mainContentSort_showCounter_item", "24"),
          create("option", "mainContentSort_showCounter_item", "12"),
          create("option", "mainContentSort_showCounter_item", "3"),
        ]),
      ]
    );
    const mainContentSort_sortBy_container = create(
      "div",
      "mainContentSort_sortBy_container",
      [
        create("div", "mainContentSort_sortBy_list", [
          create("span", "mainContentSort_sortBy_title", "Сортировать по:"),
          create("ul", "mainContentSort_sortBy_list", [
            create(
              "li",
              "mainContentSort_sortBy_list_item mainContentSort_sortBy_list_item__chosen",
              create("a", null, "популярности")
            ),
            create(
              "li",
              "mainContentSort_sortBy_list_item",
              create("a", null, "сначала дешевые")
            ),
            create(
              "li",
              "mainContentSort_sortBy_list_item",
              create("a", null, "сначала дорогие")
            ),
          ]),
        ]),
      ]
    );
    const addItem = create("div", "mainContentSort_addItem button__prime", "Уточнение");
    const mainContentSort_addItems_container = create(
      "div", "mainContentSort_addItems_container"
    );
    for(let i=0; i<4;i++){
      mainContentSort_addItems_container.append(addItem.cloneNode(true))
    }
    const mainContentSort_container = create(
      "div",
      "mainContentSort_container",
      [
        create("div", "mainContentSort_sortItems_container", [
          mainContentSort_sortBy_container,
          mainContentSort_showCounter_container,
        ]),
        mainContentSort_addItems_container
      ]
    );
    return mainContentSort_container;
  }
}
export default MainContentSort;
