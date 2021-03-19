import "./Header.module.scss";
import create from "../../utils/create.utils.js";
class Header {
  generateLayout() {
      return create("header", null, "Шапка сайта")
  }
}
export default Header;
