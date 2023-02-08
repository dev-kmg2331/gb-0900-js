/* 
    JS에서는 매개변수의 개수에 맞추어 값을 전달할 필요가 없다. 
    만약 매개변수 개수보다 부족하게 값을 전달하면 값을 못받은 매개변수에는 undefined가 들어간다.
    만약 매개변수 개수보다 넘치게 값을 전달하면 잘린다.

    JS에서는 함수를 값으로 취급하기 때문에 매개변수로 전달이 가능하다.
    현재 함수에서 나온 결과 값을 다른 함수로 전달할 때에는 callback이라는 식별자로 결과 값을 전달받아 온다.
*/

console.log(
    add(3, 4, (n1, n2) => {
        return (n1 + n2) / 2;
    })
);

console.log(add(3, 4));

function add(n1, n2, callback) {
    if (callback) {
        return callback(n1, n2);
    }

    return n1 + n2;
}

