// 기차에 등급별 좌석을 구현하자!
// 3명의 고객이 있으며, 각 고객별 정보는 다음과 같다.

// [1]
// 이름: 홍길동
// 나이: 20
// 등급: 1

// [2]
// 이름: 이순신
// 나이: 40
// 등급: 2

// [3]
// 이름: 장보고
// 나이: 19
// 등급: 3

// 3명은 기차 한 대에 모두 탑승한다.
// 기차 객체를 만들고 각 손님들을 프로퍼티로 선언한다.

let train = {}
let user;
let index = 1;

function aboard(name, age, rank, callback) {
    user = new User(name, age, rank);

    train[`passanger${index}`] = user;

    index++;
};

/* this : 해당 프로토타입을 호출한 객체 */
function User(name, age, rank) {
    this.name = name;
    this.age = age;
    this.rank = rank;
}

aboard("홍길동", 20, 1);
aboard("이순신", 40, 2);
aboard("장보고", 19, 3);

console.log(train);
