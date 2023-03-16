// class Car {
//     constructor(brand, model, color) {
//     this.brand = brand;
//     this.model = model;
//     this.color = color;
//     }

// start() {
//     console.log("vrrr braaap vrr"); 
//     }
// }
// class CarService {

//     constructor(brand,color,carEl){
//     this.list=new List(brand,color);
//     this.carEl=carEl;
//     }
  
//     addItem(args) {
//       this.item.addItem(args);
//       this.updateDom();
  
//     }
  
//     updateDom(){
//       this.carEl.innerHTML = "";
//       this.list.getItems().forEach(car =>{
//         const carEl = document.createElement("div");
//         carEl.classList.add(["todo"]);
//         if(car.isChecked) carEl.classList.add(["checked"]);;
//         carEl.innerText = car.text;
//         carEl.addEventListener("click", ()=>{
//           car.toggleCheck();
//           this.updateDom();
//         })
//         carEl.addEventListener('dblclick', () => {
//           this.list.deleteItem(car);
//           this.updateDom();
//         })
//         this.carEl.append(carEl);
//       })
//     }
//   }

