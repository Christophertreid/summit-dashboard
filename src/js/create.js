import { ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
import {ref as databaseRef, push, set, } from 'firebase/database'
import { db, storage  } from "./libs/firebase/firebaseConfig";
import {addForm as render} from "./templates/addProductForm";
async function pageInit(){
  const form = render();
  form.addEventListener('submit', onCreateProduct)
  console.log(form)
  form.querySelector('#thumb1').addEventListener("change", onSelectImage1)
  let imageUpload = false;

  function onSelectImage1(e){
    let image1 = e.target.files[0]
    document.querySelector("#image1").src = URL.createObjectURL(image1);
    document.querySelector("#image1").style.display = "block"
    imageUpload = true;
  }

  async function onCreateProduct(e){
    e.preventDefault();
    const formData = e.target.elements

    //data
    const product = {
        category: formData['category'].value,
        manufacturer: formData['manufacturer'].value,
        name: formData['productName'].value.trim(),
        inventory: formData['inventory'].value,
        price: (formData['price'].value*100),
        salePrice: (formData['salePrice'].value*100),
        shortDesc: formData['shortDesc'].value.trim(),
        longDesc: formData['longDesc'].value.trim()
    }

    if(product.category === "0"|| product.manufacturer === "0" || product.price === "" || product.inventory === "")
    {
      document.querySelector('.error').textContent = "please input all required fields"
    }
    if(imageUpload == false){
      document.querySelector('.error').textContent = "please upload an image"
    }
    else{
      uploadProduct(product)
    }
  }
  async function uploadProduct({category, manufacturer, name, inventory, price, salePrice, shortDesc, longDesc}){
      const image1 = document.querySelector('#thumb1').files[0]
      const imageRef1 =  storageRef( storage, `images/${image1.name}`);
      const dataRef =  databaseRef( db, 'products')
      const uploadResult1 = await uploadBytes(imageRef1, image1);
      const path1 =  await getDownloadURL(imageRef1) 
      const imagePath1 = uploadResult1.metadata.fullPath;
      const itemRef = push(dataRef)
      
      set(itemRef,{
        key:itemRef.key,
        thumb1:imagePath1,
        path1,
        category,
        manufacturer,
        name,
        inventory,
        price,
        salePrice,
        shortDesc,
        longDesc 
      })
    window.location.assign('viewproducts.html')
  }
  
  const error = document.createRange().createContextualFragment(`<div class="error">required fields</div>`).children[0]
  document.querySelector('.panel').appendChild(error)
  document.querySelector('.panel').appendChild(form)
}
pageInit()