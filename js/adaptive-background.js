function changebg(index) {
    let e = document.body;
    if (index === 0) {
        e.style.backgroundImage = "url('../images/backgrounds/vex_u.jpeg')";
        e.style.backgroundSize = "cover";
    } else if (index === 1) {
        e.style.backgroundImage = "url('../images/backgrounds/turtlebot.jpg')";
        e.style.backgroundSize = "initial";
    } else if (index === 2) {
        e.style.backgroundImage = "url('../images/backgrounds/cad.jpeg')";
        e.style.backgroundSize = "cover";
        e.style.backgroundPosition = "bottom";
    } else if (index === 3) {
        e.style.backgroundImage = "url('../images/backgrounds/yourproject.jpg')";
        e.style.backgroundSize = "cover";
        e.style.backgroundPosition = "center center";
    }
}