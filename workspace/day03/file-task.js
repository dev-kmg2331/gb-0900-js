/* 
    상품명, 가격, 재고를 JS 객체에 프로퍼티로 담는다.
    JSON 형식으로 변환한 뒤, product.json으로 출력한다.
    product.json에 있는 JSON 형식을 JS Object 타입으로 변환하여 각 프로퍼티를 출력한다.
*/

let file;

function Product(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
}

let productArr = new Array(
    new Product("삽", 5000, 3),
    new Product("사다리", 10000, 5),
    new Product("화분", 3000, 12)
);

function writeProduct(arr, callback) {
    var arrJSON = JSON.stringify(productArr);

    if (callback) {
        callback(arrJSON);
        return;
    }
}

function writeJSON(arrJSON) {
    file = require('fs');

    file.writeFile('product-json.json', arrJSON, 'utf-8', (e) => { if (e) { console.log(e) } });
}


function readJSON() {
    file = require('fs');
    
    file.readFile('product-json.json', 'utf-8', (e, content) => {
        if (e) { console.log(e) }
        else { console.log(JSON.parse(content)) }
    });
}

writeProduct(productArr, writeJSON);
readJSON();
