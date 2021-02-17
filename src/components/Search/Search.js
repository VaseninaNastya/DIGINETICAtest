import "./Search.module.scss";
import create from "../../utils/create.utils.js";
class Search {
  generateLayout() {
    const search_input = create("input", "search_input");
    const search_button__prime = create("button", "button__prime", "Найти");
    const search_button__secondary = create(
      "button",
      "button__secondary",
      "Закрыть"
    );
    const search_container = create("form", "search_container", [
      search_input,
      search_button__prime,
      search_button__secondary
    ]);
    return search_container;
  }
}
export default Search;
