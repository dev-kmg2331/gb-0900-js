// script-file.html

function changeImage(object) {
    let status = object.classList[0];

    if (status == "on") {
        object.classList.replace("on", "off");
        object.src = "imgs/star.png";

        return;
    }

    object.classList.replace("off", "on");
    object.src = "imgs/settings.png";
}