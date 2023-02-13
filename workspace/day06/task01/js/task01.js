// HTMLCollection.prototype.forEach = Array.prototype.forEach;

const fareTypesNode = document.querySelectorAll('td.fare-types');
const farePricesNode = document.querySelectorAll('td.fare-prices');
const fareTypesArr = new Array('아동', '청소년', '성인');
const farePricesArr = new Array('무료', '2000원', '5000원');

const form = document.fareForm;

let prevNode;

for (let i = 0; i < fareTypesArr.length; i++) {
    fareTypesNode[i].innerHTML = fareTypesArr[i];
    farePricesNode[i].innerHTML = farePricesArr[i];
}

// Array.from(fareTypesNode).forEach((e) => function(){
//     e.innerHTML = fareTypesArr[i];
// });

form.button.addEventListener('click', (e) => {
    e.preventDefault();

    var value = form.fareType.value;

    var check = checkType(value);

    if (check === -1) {
        alert('다시 시도해주세요');
        form.fareType.value = '';
        return;
    }

    var parent = fareTypesNode[check].parentElement;

    parent.style.backgroundColor = '#ef5350';
    fareTypesNode[check].innerHTML = `★${fareTypesArr[check]}`;

    if (prevNode == fareTypesNode[check]) {
        return;
    }

    if (prevNode) {
        var temp = prevNode.innerHTML.replace('★', '');
        prevNode.parentElement.style.backgroundColor = 'white';
        prevNode.innerHTML = `${temp}`;
    }

    prevNode = fareTypesNode[check];
});

function checkType(typeString) {
    var check = fareTypesArr.indexOf(typeString);

    return check;
}

/* ============================================= */

/* 
    task01.html
*/

// globalThis.temp;

// function confirm() {
//     const input = document.querySelector("input").value;
//     const trs = document.querySelectorAll("tbody tr");
//     let check = false;

//     if(globalThis.temp) {
//         globalThis.temp.style.background = "#fff";
//         globalThis.temp.firstElementChild.innerHTML = temp.firstElementChild.innerHTML.replace("★", "");
//     }

//     trs.forEach(tr => {
//         let td = tr.firstElementChild;
//         if(td.innerHTML == input) {
//             check = true;
//             globalThis.temp = tr;
//             tr.style.background = "#ef5350";
//             td.innerHTML = "★" + td.innerHTML;
//         }
//     });

//     if(!check) {
//         alert("다시 시도해주세요.");
//     }
// }