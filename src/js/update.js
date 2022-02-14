import { ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
import {ref as databaseRef, set, get} from 'firebase/database'
import { db, storage  } from "./libs/firebase/firebaseConfig";
import {updateForm} from "./templates/updateProductForm";

async function pageInit(){
  const key = sessionStorage.getItem('key')
  const productsRef = databaseRef(db,'products/')
  const productsSnapShot = await get(productsRef)
  const products = productsSnapShot.val()
  const productObjects = Object.values(products)
  const array = Array.from(productObjects)
  const product = array.find(product => product.key === key)
  //populate form with values
  const form = updateForm(product);
  //render(product);
  document.querySelector('.panel--product__edit').append(form)
  form.addEventListener('submit', onUpdateProduct)
  form.querySelector('#thumb1').addEventListener("change", onSelectImage1)
  let imageChanged = false;
  
  function onSelectImage1(e){
    let image1 = e.target.files[0]
    document.querySelector("#image1").src = URL.createObjectURL(image1);
    document.querySelector("#image1").style.display = "block"
    imageChanged = true;
  }

  async function onUpdateProduct(e){
    e.preventDefault();
    const formData = e.target.elements
    

    if(product.category === "0"|| product.manufacturer === "0" || product.price === "" || product.inventory === "")
    {
      document.querySelector('.error').textContent = "please input all required fields"
    }
    else{
      uploadProduct(product)
    }
    //data

    async function uploadProduct(){ 
      const itemRef = databaseRef( db, 'products/' + key)

      if(imageChanged){
        const image1 = document.querySelector('#thumb1').files[0]
        const imageRef1 =  storageRef( storage, `images/${image1.name}`);
        const uploadResult1 = await uploadBytes(imageRef1, image1);
        const path1 =  await getDownloadURL(imageRef1) 
        const imagePath1 = uploadResult1.metadata.fullPath;
        set(itemRef, {
          key: itemRef.key,
          thumb1:imagePath1,
          path1,
          category: formData['category'].value,
          manufacturer: formData['manufacturer'].value,
          name: formData['productName'].value.trim(),
          inventory: formData['inventory'].value,
          price: (formData['price'].value*100),
          salePrice: (formData['salePrice'].value*100),
          shortDesc: formData['shortDesc'].value.trim(),
          longDesc: formData['longDesc'].value.trim()
        }
        ) 
      }
      else{
        set(itemRef, {
          key: itemRef.key,
          thumb1:product.thumb1.toString(),
          path1: product.path1.toString(),
          category: formData['category'].value,
          manufacturer: formData['manufacturer'].value,
          name: formData['productName'].value.trim(),
          inventory: formData['inventory'].value,
          price: (formData['price'].value*100),
          salePrice: (formData['salePrice'].value*100),
          shortDesc: formData['shortDesc'].value.trim(),
          longDesc: formData['longDesc'].value.trim()
      })
    }
    window.location.assign('viewproducts.html')
  }
    
  }
  
  
  const error = document.createRange().createContextualFragment(`<div class="error">required fields</div>`).children[0]
  document.querySelector('.panel').appendChild(error)
  document.querySelector('.panel').appendChild(form)
  //save the edits aka write text

  //return to read page
}

pageInit()