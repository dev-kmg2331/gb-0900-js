const level = document.querySelector('div.circle');

let check = 0;
let alertText = false;
let result = '';

let levelCount = 1;

level.innerHTML = levelCount;

document.forms.change.addEventListener('click', () => {
    alterText();
});

const input = document.querySelector('input.input');
const changeBtn = document.querySelector('input.change');
const output = document.querySelector('span.output');
const hangle = '공일이삼사오육칠팔구';
const isNumeric = (n) => !isNaN(n); //숫자인지 문자인지 검사

changeBtn.addEventListener('click', function () {
    if (isNumeric(input.value)) {
        output.innerHTML = input.value
            .split('')
            .map((data, i) => {
                // 첫번째 0 이면 영, 아니면 공을 리턴
                if (data == '0') {
                    return i == 0 ? '영' : '공';
                }

                return data == '.' ? '점' : hangle[data];
            })
            .join('');
    } else {
        output.innerHTML = '숫자만 입력해주세요.';
    }
});
