function updateForm({key, category, manufacturer, name, price, salePrice, shortDesc, longDesc, inventory, path1})
{
  const template=`
    
          <form class="product-form">
            <div class="product-details">
              <section>
                <h2>Product Details:</h2>
                <div class="product-input">
                  <label for="key">SKU:</label>
                  <input type="text" id="key" name="key" value="${key}" disabled>
                  </div>
                <div class="product-input">
                  <label for="category">Category:</label>
                  <select id="category" name="category" required>
                    <option value="0" selected>Select...</option>
                    <option value="chair">Chair</option>
                    <option value="stove">Stove</option>
                    <option value="tent">Tent</option>
                  </select> 
                </div>
                <div class="product-input">
                  <label for="manufacturer">Manufacturer:</label>
                  <select id="manufacturer" name="manufacturer" required>
                    <option value="0" selected>Select...</option>
                    <option value="Coleman">Coleman</option>
                    <option value="Mountain Hardware">Mountain Hardware</option>
                    <option value="MSR">Mountain Safety Research</option>
                    <option value="The North Face">The North Face</option>
                    <option value="Woods">Woods</option>
                  </select>
                </div>
                <div class="product-input">
                  <label for="productName">Product Name:</label>
                  <input type="text" id="productName" name="productName" value="${name}"required>
                </div>
                <div class="product-input">
                  <label for="inventory">Inventory:</label>
                  <input type="number" id="inventory" name="inventory" min="0" step="1" value="${inventory}" required>
                </div>
                <div class="product-input">
                  <label for="price">Price:</label>
                  <input type="number" id="price" name="price" min="0" step="0.01" value="${(price/100)}" required>
                </div>
                <div class="product-input">
                  <label for="salePrice">Sale Price:</label>
                  <input type="number" id="salePrice" name="salePrice" min="0" step="0.01" value="${(salePrice/100)}">
                </div>
                <div class="product-input">
                  <label for="shortDesc">Short Description:</label>
                  <textarea name="shortDesc" id="shortDesc" placeholder="no more than 20 words" maxlength="160">${shortDesc}</textarea>
                </div>
                <div class="product-input">
                  <label for="shortDesc">Long Description:</label>
                  <textarea name="longDesc" id="longDesc">${longDesc}</textarea>
                </div>
              </section>
              <fieldset>
                <legend>Product Images:</legend>
                <div>
                  <div class="display">
                    <img id="image1" src="${path1}" alt="${name}" height="176" width="208" style="border-radius: 4px">
                  </div>
                  <div class="image-select">
                    <label for="thumb1">Select image</label>
                    <input type="file" id="thumb1" name="thumb1" style="opacity: 0;" accept=".jpg, .png, .jpeg, .webp">
                  </div>
                </div>
              </fieldset>
            </div>
            <div class="form-controls">
              <a href="./viewproducts.html"><button class="delete" type="button"><span class="tooltip" aria-describedby="return"><svg stroke-width="0" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="square" stroke-miterlimit="10" stroke-width="32" d="M112 352l-64-64 64-64"></path><path fill="none" stroke-linecap="square" stroke-miterlimit="10" stroke-width="32" d="M64 288h400V160"></path></svg><span id="return" class="tool-text">Return</span></span></button></a>
              <button class="add" type="submit">
              <span class="tooltip" aria-describedby="submit"><svg stroke-width="0" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm-38 312.38l-80.6-89.57 23.79-21.41 56 62.22L350 153.46 374.54 174z"></path></svg><span id="submit" class="tool-text">Submit</span></span></button>
            </div>
          </form>`

    const element = document.createRange().createContextualFragment(template).children[0];
    const categories = element.querySelectorAll('#category > option')
    categories.forEach(option => {
      if(option.value === category)
        option.selected = true
    })
    const manufacturers = element.querySelectorAll('#manufacturer > option')
    manufacturers.forEach(option => {
      if(option.value === manufacturer)
        option.selected = true
    })
    return element;
}
export{updateForm}