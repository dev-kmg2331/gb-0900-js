/* JS에서는 오버로딩을 지원하지 않는다. */

console.log(add("덧셈", 1, 3));

console.log(add("덧셈", 1, 3, 5/* , "강민구" */));


// function add(num1, num2, num3) {
//     return num1 + num2 + num3;
// }

// /* 같은 이름으로 선언하게 되면 가장 최근에 선언한 함수로 적용된다. */
// function add(num1, num2) {
//     return num1 + num2;
// }

function add(name: string, ...nums: number[]) {
    let result = 0;
    nums.forEach(n => result += n);

    return name + result;
}

