
// var x = 20; // 지역변수오 이름이 겹치지 않는 전역 변수
// global.x = 20; // Node.js
// window.x = 20; // 브라우저
globalThis.x = 20; // 상황에 맞게


function f() {
    var x = 10;
    // console.log(this.x);
    console.log(x);
    console.log(this.x); // 여기서 this는 최상위 객체를 의미한다.
    console.log(globalThis.x);
}

f();