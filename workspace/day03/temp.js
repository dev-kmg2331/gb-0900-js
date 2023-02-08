function Product(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
}

let apple = new Product("사과", 1000, 10);
let coke = new Product("콜라", 1500, 30);
let sap = new Product("삽", 10000, 5);

let arr = new Array(apple, coke, sap);
let arrJSON = JSON.stringify(arr);

function getTotalPrice(arrJSON, callback) {

    var parsedArr = JSON.parse(arrJSON);

    if (callback) {
        return JSON.stringify(callback(parsedArr));
    }

    return JSON.stringify(new Array());
}

/* map {} 안에서 return 하면 그걸로 바뀜 */
console.log(getTotalPrice(arrJSON, (arr) => {
    var temp = new Object();

    arr.map(e => {
        temp.name = e.name;
        temp.totalPrice = e.price * e.quantity;

        return temp;
    });

    return arr;
}));

console.log(getTotalPrice(arrJSON));