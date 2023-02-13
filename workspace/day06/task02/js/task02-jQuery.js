const $level = $('div.circle');

let check = 0;
let alertText = false;
let result = '';

let levelCount = 1;

$level.text(`${levelCount}`);

const $input = $('input.input');
const $changeBtn = $('input.change');
const $output = $('span.output');
const hangle = '공일이삼사오육칠팔구';
const isNumeric = (n) => !isNaN(n); //숫자인지 문자인지 검사

$changeBtn.on('click', () => {
    var value = $input.val();

    if (isNumeric(value) && value.charAt(0) != '.') {
        alterText();

        levelCount = check > 0 ? '2' : '3';
        $level.text(`${levelCount}`);

        check = 0;
        return;
    }

    $output.text('숫자만 입력해주세요.');

    levelCount = '4';
    $level.text(`${levelCount}`);

    check = 0;
});

function alterText() {
    var inputValue = $input
        .val()
        .split('')
        .map((data, i) => {
            if (data == '0') {
                return i == 0 ? '영' : '공';
            }

            checkFloat(data);
            
            return data == '.' ? '점' : hangle[data];
        })
        .join('');

    $output.text(`${inputValue}`);
}

function checkFloat(data) {
    check = data == '.' ? ++check : check;
}
