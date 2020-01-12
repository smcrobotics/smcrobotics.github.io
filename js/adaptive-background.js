function changebg(index) {
    let e = document.body;
    if (index === 0) {
        e.style.backgroundImage = "url('../images/srce1_pics/IMG_4276.jpeg')";
        e.style.backgroundSize = "cover";
    } else if (index === 1) {
        e.style.backgroundImage = "url('../images/external_pics/Turtlebot_3_burger.jpg')";
        e.style.backgroundSize = "initial";
    } else if (index === 2) {
        e.style.backgroundImage = "url('../images/srce1_pics/IMG_4165.jpeg')";
        e.style.backgroundSize = "cover";
        e.style.backgroundPosition = "bottom";
    } else if (index === 3) {
        e.style.backgroundImage = "url('../images/jpl-rover.jpg')";
        e.style.backgroundSize = "cover";
        e.style.backgroundPosition = "center center";
    }
}