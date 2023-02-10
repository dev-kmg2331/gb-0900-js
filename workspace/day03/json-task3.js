/* 
    동물원에 동물이 3마리 있다.
    각 동물별 정보는 이름, 종, 나이이다.

    동물원의 동물 전체 평균 나이를 구한다.
*/

function Animal(name, kind, age) {
    this.name = name;
    this.kind = kind;
    this.age = age;
}

let animalArrJSON = JSON.stringify(new Array(
    new Animal("정유찬", "원숭이", 20),
    new Animal("김동한", "원숭이", 20),
    new Animal("최선규", "사람", 17)
));

function getAverage(arrJSON, callback) {
    var arr = JSON.parse(arrJSON);

    if (callback) {
        return callback(arr);
    }

    return -1;
}

console.log(getAverage(animalArrJSON, (arr) => {

    var total = arr.map(e => e.age).reduce((total, curVal) => {
        return total + curVal;
    });

    return total / arr.length;
}));