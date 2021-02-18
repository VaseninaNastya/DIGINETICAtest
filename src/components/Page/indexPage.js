import "./indexPage.module.scss";
import create from "../../utils/create.utils.js";
import Header from "../Header/Header.js";
import Search from "../Search/Search.js";
import ResultsHeader from "../ResultsHeader/ResultsHeader.js";
import Aside from "../Aside/Aside.js";
import MainContent from "../MainContent/MainContent.js";
import multirange from "../../lib/multirange.js";
class StartPage {
  generateLayout() {
    const header = new Header();
    const search = new Search();
    const resultsHeader = new ResultsHeader();
    const aside = new Aside();
    const mainContent = new MainContent();
    const container = create("div", "container", [
      header.generateLayout(),
      search.generateLayout(),
      resultsHeader.generateLayout(),
      create("div", "content_container", [
        aside.generateLayout(),
        mainContent.generateLayout(),
      ]),
    ]);
    const wrapper = create("div", "wrapper", container);
    document.body.prepend(wrapper);
    multirange();
  }

}
export default StartPage;
