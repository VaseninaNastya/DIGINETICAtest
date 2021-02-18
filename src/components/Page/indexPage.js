import "./indexPage.module.scss";
import create from "../../utils/create.utils.js";
import Header from "../Header/Header.js";
import Search from "../Search/Search.js";
import ResultsHeader from "../ResultsHeader/ResultsHeader.js";
import Aside from "../Aside/Aside.js";
import MainContent from "../MainContent/MainContent.js";
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
    this.generateSlider();
  }
  generateSlider() {
    $(function () {
      $("#slider-range").slider({
        range: true,
        min: 0,
        max: 1001000,
        values: [1000, 1000000],
        slide: function (event, ui) {
          $("#price_input__start").val(ui.values[0]);
          $("#price_input__end").val(ui.values[1]);
        },
      });
      $("#price_input__start").val(
          $("#slider-range").slider("values", 0)
      );
      $("#price_input__end").val(
        $("#slider-range").slider("values", 1)
    );
    });
  }
}
export default StartPage;
