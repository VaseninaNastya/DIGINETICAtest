import "./Pagination.module.scss";
import create from "../../utils/create.utils.js";
class Pagination {
  generateLayout() {
    const arrow__right = create('img',"arrow__right", null, null, ['src', './img/vector_icon.png'])
   // const arrow__left = create('img',"arrow__left", null, null, ['src', './img/vector_icon.png'])
   
    const pagination_container = create('div',"pagination_container",[
      create('span','pagination_pages__prev', '2'),
      create('span','pagination_pages__cur', '3'),
      create('span','pagination_pages__middle', '...'),
      create('span','pagination_pages__next', '13'),
      arrow__right])
    return pagination_container
  }
}
export default Pagination;
