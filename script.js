function light(sw) {
    var img;

    if (sw == 0) {
        img = "bulboff.png"
    } else {
        img = "bulbon.png"
    }
    document.getElementById("bulb").src = img;
}

function changeImage() {
    var image = document.getElementById('bulb');
    if (image.src.match("bulbon")) {
        image.src = "bulboff.png";
    } else {
        image.src = "bulbon.png";
    }
}