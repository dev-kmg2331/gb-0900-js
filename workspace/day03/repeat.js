/* JS에서는 오버로딩을 지원하지 않는다. */
/* 대신 함수 사용 시 매개변수의 개수를 맞출 필요 없다. */

/* 
    비밀번호 변경
    1. 로그인 후 비밀번호 변경 페이지
    2. 마이페이지에서 내 정보 수정 페이지

    ※ ??는 DB라고 가정한다.
*/
function update(originalPw, newPw) {

}

/* 
    callback 함수 
    하나의 함수에 여러 연산이 섞여 있다.
*/

/* 
    객체 선언 방법
    1. {}
    2. new Object()
    3. prototype : 딱 한번만 선언하자
*/

/* Array */
let datas = new Array(3).fill(0);

/* length가 프로퍼티이기 떄문에 수정이 가능하다. */
datas.length = 5;

console.log(datas);

console.log(datas.join(" : "));

datas.filter(e => e != undefined).forEach(e => console.log(e));