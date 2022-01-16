const libRequest = require('../lib/libRequest');

module.exports = {
   loadRates: (element) => {
      libRequest.get(`${process.env.BACKEND}/rates`, function(resp) {
         let options = '';
         resp.forEach(i => {
            if(i === 'USD') {
               options += `<option value="${i}" selected>${i}</option>`;
            } else {
               options += `<option value="${i}">${i}</option>`;
            }

         });
         element.innerHTML = options;
      });
      return element;
   }
}
