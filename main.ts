import {Product} from "./Product";
import {ProductManager} from "./ProductManager";

 let laptop = new Product("Laptop",2000);
 let iphone = new Product("IphoneX",5000);

 let productManager = new ProductManager();
 productManager.add=laptop;
 productManager.add=iphone;

 console.log(productManager.getAll);