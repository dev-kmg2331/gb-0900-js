const $fareTypesNode = $('td.fare-types');
const $farePricesNode = $('td.fare-prices');
const fareTypesArr = new Array('아동', '청소년', '성인');
const farePricesArr = new Array('무료', '2000원', '5000원');

const form = $('form[name=fareForm]');
const $input = $('#fareType');
const button = $('#button');

let prev;

$fareTypesNode.each((i, e) => {
    $(e).text(`${fareTypesArr[i]}`);
    $($farePricesNode[i]).text(`${fareTypesArr[i]}`);
});

// $farePricesNode.each((i, e) => {
//     $(e).text(`${farePricesArr[i]}`);
// });

button.on('click', function (e) {
    e.preventDefault();

    var check = checkType($input.val());

    if (check == -1) {
        alert('다시 시도해주세요.');
        $input.val('');
        return;
    }

    changeText(check);

    prev = check;
});

function checkType(type) {
    var check = fareTypesArr.indexOf(type);

    return check;
}

function changeText(check) {
    var $parent = $($fareTypesNode[check].parentElement);

    $parent.css('background-color', '#ef5350');
    $($fareTypesNode[check]).text(`★${fareTypesArr[check]}`);

    if (prev == check || isNaN(prev)) {
        return;
    }

    var $prevNode = $($fareTypesNode[prev]);
    var temp = $prevNode.text();

    $prevNode.parent().css('background-color', 'white');
    $prevNode.text(temp.replace('★', ''));
}
