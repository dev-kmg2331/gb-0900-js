/* banner.html */
HTMLCollection.prototype.forEach = Array.prototype.forEach;
const banner = document.querySelector("div.banner");
const imageDiv = document.querySelectorAll("div.banner div");
const imgArr = new Array(
    "https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/167515622792642420.png?gif=1&w=2560&q=100",
    "https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/167516015960824455.png?gif=1&w=2560&q=100",
    "https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/167515652600435978.png?gif=1&w=2560&q=100",
    "https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/167532742983221456.png?gif=1&w=2560&q=100",
    "https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/167481133010267751.jpg?gif=1&w=2560&q=100",
    "https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/167515685145470025.png?gif=1&w=2560&q=100",
    "https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/167585237639664496.png?gif=1&w=2560&q=100",
    "https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/167585228271735333.png?gif=1&w=2560&q=100",
    "https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/167573251336583617.png?gif=1&w=2560&q=100",
    "https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/167565345246833402.png?gif=1&w=2560&q=100"
);
const lastImageDiv = document.createElement("div");
const firstImageDiv = document.createElement("div");
const next = document.querySelector("div.next");
const prev = document.querySelector("div.prev");
const buttons = document.querySelectorAll("ul.menu-list li div");
let checkArrow = false;
let imgCount = 1;
// imgArr 길이 = 이미지 갯수
const lastImgCount = imgArr.length;
let auto = setInterval(autoSlide, 2000);
let temp = buttons[0];

HTMLCollection.prototype.forEach = Array.prototype.forEach;
buttons.forEach((button, i) => {
    var btnIndex = i;
    button.addEventListener("click", () => {
        clearInterval(auto);
        // 버튼 인덱스를 가져오자
        // imgCount = parseInt(button.innerHTML);
        imgCount = btnIndex + 1;
        changeButtonStyle();
        banner.style.transition = "transition: transform 1.2s ease-in-out";
        banner.style.transform = `translate(${-2000 * imgCount}px)`;
        auto = setInterval(autoSlide, 2000);    
    });
});

imageDiv.forEach((div, i) => div.style.backgroundImage = `url(${imgArr[i]})`)

banner.appendChild(lastImageDiv);
lastImageDiv.style.backgroundImage = `url(${imgArr[0]})`;

banner.insertBefore(firstImageDiv, document.querySelector("div.banner div"));
firstImageDiv.style.backgroundImage = `url(${imgArr[imgArr.length - 1]})`

banner.style.transform = `translate(-2000px)`;

function changeButtonStyle() {
    if (temp) {
        temp.style.background = "white";
        temp.style.color = "black";
    }
    console.log(imgCount);
    buttons[imgCount - 1].style.background = "black";
    buttons[imgCount - 1].style.color = "white";
    temp = buttons[imgCount - 1];
}

function autoSlide() {
    banner.style.transition = "transition: transform 1.2s ease-in-out";
    banner.style.transform = `translate(${-2000 * ++imgCount}px)`;
    console.log(imgCount);
    if (imgCount == lastImgCount + 1) {
        imgCount = 1;
        setTimeout(function () {
            banner.style.transition = "transform 0s";
            banner.style.transform = "translate(-2000px)";
        }, 1200);
    }
    changeButtonStyle();
}

prev.addEventListener("click", function () {
    if (checkArrow) { return; }
    checkArrow = true;
    clearInterval(auto);
    banner.style.transition = "transition: transform 1.2s ease-in-out";
    banner.style.transform = `translate(${-2000 * --imgCount}px)`;
    if (imgCount == 0) {
        imgCount = lastImgCount;
        setTimeout(function () {
            banner.style.transition = "transform 0s";
            banner.style.transform = `translate(${-2000 * (imageDiv.length)}px)`;
        }, 1200);
    }
    changeButtonStyle();
    auto = setInterval(autoSlide, 2000);
    setTimeout(() => { checkArrow = false }, 1200);
});

next.addEventListener("click", function () {
    if (checkArrow) { return; }
    checkArrow = true;
    clearInterval(auto);
    banner.style.transition = "transition: transform 1.2s ease-in-out";
    banner.style.transform = `translate(${-2000 * ++imgCount}px)`;
    if (imgCount == lastImgCount + 1) {
        imgCount = 1;
        setTimeout(function () {
            banner.style.transition = "transform 0s";
            banner.style.transform = "translate(-2000px)";
        }, 1200);
    }
    changeButtonStyle();
    auto = setInterval(autoSlide, 2000);
    setTimeout(() => { checkArrow = false }, 1200);
});
