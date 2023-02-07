let item = {};

function product(name, price, quantity, callback) {

    if (callback) {
        var total = price * quantity;
        return callback(name, total);
    }

    item.name = name;
    item.total = 0;

    return item;
}

console.log(
    product("콜라", 1000, 5, (name, total) => {
        item.name = name;
        item.total = total;

        return item;
    })
);


