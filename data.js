$(document).ready(function () { 
  function loadData() {
    return new Promise((resolve, reject) => {
      $.ajax({
        type: "GET",
        url: "data.json",
        dataType: "json",
        success: function (response) {
          resolve(response);
        },
        error: function (xhr, status, error) {  
          reject(error);
        }
      });
    })
  };

  loadData()
  .then(function (response) {
      var serviceList = $("#service_list");
      var services = response.data.service; // Mengambil array service dari data
      console.log(services);

      var priceList = $("#price_list");
      var prices = response.data.pricing;
      console.log(prices);


      services.forEach(function (service) {
        let serviceCard = `
        <div class="col-md-6">
        <div class="card service_item service-card">
          <div class="card-body">
            <h3 class="card-title text-center">${service.title}</h3>
            <img
              src="${service.servicePictureUrl}"
              style="width: 100%"
            />

            <p class="card-text">
              ${service.description}
            </p>
          </div>
        </div>
      </div>`;
      serviceList.append(serviceCard);
      });

      prices.forEach(function (price) {
        let priceCard = `
        <div class="col-md-4">
        <div class="pricing_item">
          <img
            src="${price.pricingPictureUrl}"
            alt="${price.title}"
          />
          <h3>${price.title}</h3>
          <p>Harga: ${price.price}</p>
        </div>
      </div>`;
        priceList.append(priceCard);
      });
  })
  .catch(function (error) {
      console.error("Error loading data:", error);
  });

});