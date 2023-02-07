function evals(expression) {
    return eval(expression);
}

console.log(evals("2+3+4-7"));

/* (function(){})() 선언과 동시에 사용 */

((v) => {
    console.log(isNaN(v));
    console.log(isFinite(v));
})("hi" / 3);