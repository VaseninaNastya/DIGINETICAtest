import "./ResultsHeader.module.scss";
import create from "../../utils/create.utils.js";
import ResultsHeaderItem from "../ResultsHeaderItem/ResultsHeaderItem";
class ResultsHeader {
  generateLayout() {
    const title = create("h1", "resultsHeader_title", "Результаты по запросу");
    const erroneousRequest = create("span", "resultsHeader_erroneousRequest", [
      create("i", null, "Зопрос"),
      " пользователя",
    ]);
    const description = create("span", "resultsHeader_description", [
      "Показаны результаты для “Запрос пользозвателя”. Вы искали ",
      erroneousRequest,
    ]);
    const results_container = create("div", "resultsHeader_results_container");
    const resultsHeaderItem = new ResultsHeaderItem();
    for(let i = 0; i<7; i++){
      results_container.append(resultsHeaderItem.generateLayout())
    }
    return create("div", "resultsHeader_container", [
      create("div", "resultsHeader_title_container", [title, description]),
      results_container,
    ]);
  }
}
export default ResultsHeader;
