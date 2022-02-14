import {ref as databaseRef, get} from 'firebase/database'
import { db } from "./libs/firebase/firebaseConfig";
import {displayProduct} from "./templates/productDetails";

async function pageInit(){
  const key = sessionStorage.getItem('key')
  const productsRef = databaseRef(db,'products/')
  const productsSnapShot = await get(productsRef)
  const products = productsSnapShot.val()
  const productObjects = Object.values(products)
  const array = Array.from(productObjects)
  const product = array.find(product => product.key === key)
  //populate form with values
  const display = displayProduct(product);
  //render(product);
  document.querySelector('.panel').append(display)
}
pageInit()