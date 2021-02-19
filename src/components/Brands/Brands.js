import "./Brands.module.scss";
import create from "../../utils/create.utils.js";
import CustomeCheckbox from '../CustomeCheckbox/CustomeCheckbox.js'
class Brands {
  generateLayout() {
    const brands_title = create("span", "brands_title", "Бренды");
    this.brands_container = create("div", "brands_container", [brands_title]);
const customeCheckbox = new CustomeCheckbox("brands_checkbox")
     const brands = ["(ххх)", "(х)", "(х ххх)"];
    for (let i = 0; i < brands.length; i++) {
      const brands_item = create("label", "brands_item", [
          create("input", null, null, null, ["type", "checkbox"],['id',`${brands[i]}`]),
          customeCheckbox.generateLayout(),
          create("span", null, "Бренд "),
          create('span', "brands_brandName", brands[i]),
        ],null,['for', `${brands[i]}`])
        this.brands_container.append(brands_item)
    }
    this.addEventListeners()
    return this.brands_container;
  }
  addEventListeners(){
    this.brands_container.addEventListener('click',(e)=>{
      e.preventDefault()
      if(Array.from(e.target.classList).includes('brands_checkbox')){
        e.target.classList.toggle("checkbox_castome__checked")      }
console.log("e.target",Array.from(e.target.classList).includes('brands_checkbox'));
    })
  }
}
export default Brands;
