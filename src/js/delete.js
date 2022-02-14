import {ref as databaseRef,  get, remove} from 'firebase/database'
import { db  } from "./libs/firebase/firebaseConfig";
import {displayDeleteProduct} from "./templates/productDelete";

async function pageInit(){
  const key = sessionStorage.getItem('key')
  const productsRef = databaseRef(db,'products/')
  const productsSnapShot = await get(productsRef)
  const products = productsSnapShot.val()
  const productObjects = Object.values(products)
  const array = Array.from(productObjects)
  const product = array.find(product => product.key === key)
  //populate form with values
  const display = displayDeleteProduct(product);
  
  display.querySelector('#delete').addEventListener('click', onProductDelete)
  document.querySelector('.panel').append(display)

  async function onProductDelete(product){
    const itemRef = databaseRef( db, 'products/' + key)
    remove(itemRef);
    window.location.assign('viewproducts.html')
  }
}
pageInit()