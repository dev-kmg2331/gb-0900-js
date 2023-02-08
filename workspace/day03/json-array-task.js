/* 
    상품명, 가격, 재고를 프로퍼티로 담고 있는 Object를 3개 선언한다.
    3개의 Object를 1개의 Array 객체에 모두 담는다.
    JSON으로 변경시킨다.

    각 상품별 총 가격을 구한 뒤 출력한다.
    callback 함수를 사용한다.
    외부에서는 JSON 데이터가 전달된다.
*/

/* 
shop.json에 변환된 JSON 형식의 문자열을 작성한다.
shop.json을 읽어 온 뒤 Array 객체로 변환한다.
총 가격과 총 재고 수를 Object에 담은 뒤 sum.json으로 출력한다.
*/
var file = require('fs');

function Product(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    // this.toJSON = JSON.stringify(this);
}

let productArr = new Array(
    new Product("아메리카노", 1700, 50),
    new Product("라떼", 2500, 30),
    new Product("에스프레소", 2000, 25)
);

let productArrJSON = JSON.stringify(productArr);

function getTotalPrice(productArrJSON, callback) {

    if (callback) {
        callback(productArrJSON);
        return;
    }
}

getTotalPrice(productArrJSON, (arr) => {


    file.writeFile('shop.json', arr, 'utf-8', (e) => { if (e) { console.log(e) } })
});

var result;
var temp = {
    totalPrice: 0,
    totalQuantity: 0
}

function readJSON() {
    var file = require('fs');


    file.readFile('shop.json', 'utf-8', (e, content) => {

        if (e) { console.log(e) }
        result = JSON.parse(content);

        result.forEach(e => {
            temp.totalPrice += e.price/*  * e.quantity */;
            temp.totalQuantity += e.quantity;
        });

        
        console.log("성공!");
    });
}

readJSON();

file.writeFile('sum.json', JSON.stringify(temp), 'utf-8', (e) => { if (e) { console.log(e) } });
