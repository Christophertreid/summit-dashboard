function displayDeleteProduct({key,
  path1,
  category,
  manufacturer,
  name,
  price, salePrice, shortDesc, longDesc, inventory}){
  const template=`
  <section class="panel--product__view">      
  <h2>${key}</h2>
  <dl>
    <span>
    <dt>Name</dt>
    <dd>${name}</dd>
    </span>
    <div>
    <span>
    <dt>Category</dt>
    <dd>${category}</dd>
    </span>
    <span>
    <dt>Manufacturer</dt>
    <dd>${manufacturer}</dd>
    </span>
    </div>
    <div>
    <span>
    <dt>Price</dt>
    <dd>$${price/100}</dd>
    </span>
    <span>
    <dt>Sale Price</dt>
    <dd>$${salePrice/100}</dd>
    </span>
    <span>
    <dt>Inventory</dt>
    <dd>${inventory}</dd>
    </span>
    </div>
    <span>
    <dt>Short Description</dt>
    <dd>${shortDesc}</dd>
    </span>
    <span>
    <dt>Long Description</dt>
    <dd>${longDesc}</dd>
    </span>
    <span>
    <dt>Image</dt>
    <dd><img src="${path1}" height="176" width="208"></dd>
    </span>
</dl>
  <div class="controls">
    <a href="./viewproducts.html"><button class="delete" type="button">Return<span class="tooltip" aria-describedby="return"><svg stroke-width="0" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="square" stroke-miterlimit="10" stroke-width="32" d="M112 352l-64-64 64-64"></path><path fill="none" stroke-linecap="square" stroke-miterlimit="10" stroke-width="32" d="M64 288h400V160"></path></svg><span id="return" class="tool-text">Return to Previous</span></span></button></a>

    <button id="delete" class="delete" class="button">
      <span class="tooltip" aria-describedby="edit">Delete
      <svg stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M337.46 240L312 214.54l-56 56-56-56L174.54 240l56 56-56 56L200 377.46l56-56 56 56L337.46 352l-56-56 56-56z"></path><path fill="none" d="M337.46 240L312 214.54l-56 56-56-56L174.54 240l56 56-56 56L200 377.46l56-56 56 56L337.46 352l-56-56 56-56z"></path><path d="M64 160l29.74 282.51A24 24 0 00117.61 464h276.78a24 24 0 0023.87-21.49L448 160zm248 217.46l-56-56-56 56L174.54 352l56-56-56-56L200 214.54l56 56 56-56L337.46 240l-56 56 56 56z"></path><rect width="448" height="80" x="32" y="48" rx="12" ry="12"></rect></svg>
        <span id="edit" class="tool-text">Delete Product (this can't be undone)</span>
      </span>
    </button>
  </div>
</section>
  `
  const element = document.createRange().createContextualFragment(template).children[0];

  return element;
  }
  export {displayDeleteProduct}