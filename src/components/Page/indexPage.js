import "./indexPage.module.scss";
import create from "../../utils/create.utils.js";
import Header from "../Header/Header.js"
import Search from "../Search/Search.js"
class StartPage {
  generateLayout() {
    const header = new Header()
    const search = new Search()
    const container = create(
        "div",
        "container",
        [header.generateLayout(),
        search.generateLayout()]
      );
      const wrapper = create("div", "wrapper", container);
      document.body.prepend(wrapper);
  }
}
export default StartPage