import "./CustomeCheckbox.module.scss";
import create from "../../utils/create.utils.js";
class CustomeCheckbox {
  constructor(classNames){
    this.classNames = classNames
  }
  generateLayout() {
      return create('div',`${this.classNames} checkbox_castome`)
  }
}
export default CustomeCheckbox;
