/* 
    프로퍼티 중 KEY에 ""가 있으면 JSON이고,
    프로퍼티 중 KEY에 어떠한 따옴표도 없으면 JS Object이다.
*/

let user = {
    name: "한동석",
    age: 20
};

let userJSON = JSON.stringify(user);

console.log(user);
console.log(userJSON);
