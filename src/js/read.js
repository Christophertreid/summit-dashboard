import{ref, get} from 'firebase/database'
import{db} from './libs/firebase/firebaseConfig'
import{renderProduct} from './templates/productCard'

async function pageInit(){
  const productsRef = ref(db,'products/')
  const productsSnapShot = await get(productsRef)
  const doc = document.querySelector('.panel--product--card')
  const products = productsSnapShot.val()
  const productObjects = Object.values(products)
  console.log(productObjects)
  const elements = productObjects.map((product) => {
    const element = renderProduct(product)
    return element
   })
  elements.forEach(element => doc.append(element))
}
pageInit()