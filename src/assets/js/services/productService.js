const libRequest = require('../lib/libRequest');
const productTemplate = (id,image,title,description, price, rate, size) => {
   return `
      <div class="swiper-slide" id="${id}">
        <div>
           <div class="content">
              <img src="${image}" loading="lazy">
           </div>
           <h6>${title}</h6>
           <p>${description} <br> <b>$ ${new Intl.NumberFormat().format(price)} ${rate}</b></p>
        </div>
      </div>
   `;
}

const bannerPrincipal = (image, title) => {
   return `
    <div class="banner-content">
       <div>
          <h1 style="width: 90%">${title}</h1>
          <p style="width: 70%">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga labore omnis perspiciatis praesentium sed veritatis.</p>
          <button class="banner-buy-now">Buy now</button>
       </div>
       <div>
         <p class="ribbon-front"></p>
         <p class="ribbon-back"></p>
         <p class="ribbon-content" >50% Off</p>
         <img src="${image}" width="60%" loading="lazy">
         
       </div> 
    </div>
   `
}

module.exports = {
   /**
    * @param {string} rate
    */
   loadProducts: (rate) => {
      libRequest.get(`${process.env.BACKEND}/products/${rate.length > 0 ? rate: 'USD'}`, function(resp) {
         const doc = document.getElementById('products-carousel');
         const banner = document.getElementById('banner-principal');
         let temp = '';
         resp.forEach((i, index) => {
            if(index === 0) {
               banner.innerHTML = bannerPrincipal(i.image.src, i['product_title']);
            }
            temp += productTemplate(i.id, i.image.src, i['product_title'],i.vendor, i.price, i.rate, { width: i.image.width, height: i.image.height});
         });
         doc.innerHTML = temp;
      });
   }
}
