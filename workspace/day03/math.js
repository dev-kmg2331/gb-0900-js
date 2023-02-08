console.log(Math.floor(3.23231));
console.log(Math.ceil(3.23231));

// Math.floor(Math.random() * n) : 0 ~ n - 1의 난수
for (let i = 0; i < 10; i++) {
    let random = Math.floor(Math.random() * 10);
    console.log(random + 1);
}
