import "./ResultsHeader.module.scss";
import create from "../../utils/create.utils.js";
import ResultsHeaderItem from "../ResultsHeaderItem/ResultsHeaderItem";
class ResultsHeader {
  generateLayout() {
    const title = create("h1", "resultsHeader_title", "Результаты по запросу");
    const erroneousRequest = create("span", "resultsHeader_erroneousRequest", [
      create("i", null, `${"Зопрос"}`),
    ]);
    const description = create("span", "resultsHeader_description", [
      "Показаны результаты для “Запрос пользозвателя”. Вы искали ",
      create("spam", null, "&#34;"),
      erroneousRequest,
      "  пользователя",
      create("spam", null, "&#34;."),
    ]);

    const results_container = create("div", "resultsHeader_results_container");
    const results_container_slider__right = create(
      "div",
      "results_container_slider__right"
    );
    const resultsHeaderItem = new ResultsHeaderItem();
    results_container.append(results_container_slider__right);
    for (let i = 0; i < 7; i++) {
      results_container.append(resultsHeaderItem.generateLayout());
    }
    const results_container_slider = create("div", "results_container_slider", [
      results_container,
      results_container_slider__right,
    ]);
    return create("div", "resultsHeader_container", [
      create("div", "resultsHeader_title_container", [title, description]),
      results_container_slider,
    ]);
  }
}
export default ResultsHeader;
