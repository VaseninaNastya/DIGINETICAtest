import "./indexPage.module.scss";
import create from "../../utils/create.utils.js";
import Header from "../Header/Header.js";
import Search from "../Search/Search.js";
import ResultsHeader from "../ResultsHeader/ResultsHeader.js";
class StartPage {
  generateLayout() {
    const header = new Header();
    const search = new Search();
    const resultsHeader = new ResultsHeader();
    const container = create("div", "container", [
      header.generateLayout(),
      search.generateLayout(),
      resultsHeader.generateLayout()
    ]);
    const wrapper = create("div", "wrapper", container);
    document.body.prepend(wrapper);
  }
}
export default StartPage;
