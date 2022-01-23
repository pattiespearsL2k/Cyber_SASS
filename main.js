// axios({
//     method: 'get',
//     url: 'http://bit.ly/2mTM3nY',
//     responseType: 'stream'
//   })
//     .then(function (response) {
//       response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
//     });

function getData() {
    axios({
            method: 'get',
            url: 'https://61d6e2a235f71e0017c2e877.mockapi.io/products',
          })
            .then(function (response) {
            //   response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
            console.log(response.data);
            showData(response.data)
            })
            .catch(function(error) {
                console.log(error);
            })
            
        
}
getData()
function showData(arrSP) {
    console.log(arrSP);

    var content = ""
    arrSP.map(function(item) {
      content += `
      <div class="col-4">
      <div class="card" style="width: 18rem;">
          <img src="./img/image/${item.hinhAnh}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${item.tenSP}</h5>
            <p class="card-text">${item.gia}</p>
            <p class="card-text">${item.moTa}</p>
            <a href="#" class="btn btn-primary">Buy Now</a>
          </div>
        </div>
        </div>
      `
    })

    document.getElementById("productList").innerHTML = content
}