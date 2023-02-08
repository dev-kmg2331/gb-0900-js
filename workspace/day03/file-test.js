let file = require('fs');

// file.writeFile("경로", "내용", "인코딩", "콜백함수");
// file.readFile("경로", "인코딩", "콜백함수");

file.writeFile('love.txt', '사랑해!', 'utf-8', (e) => {
    if (e) {
        console.log(e);
    } else {
        console.log("파일입력 성공");
    }
});