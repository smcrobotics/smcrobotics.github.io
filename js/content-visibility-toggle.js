function toggleVisibility(num) {
    //Whenever you create an element of class "invisible-text-content", make sure it has
    //property 'onclick="toggleVisibility(i)"', where i is the index of the element
    //(if it were to be placed in an array of elements of the same class)
    //that is how this function finds the corresponding element to reveal or hide.
    let e = document.getElementsByClassName("invisible-content")[num];
    if (e.style.height === "100%") {
        e.style.height = "0";
        e.style.visibility = "hidden";
        e.style.opacity = "0"
    } else {
        e.style.height = "100%";
        e.style.visibility = "visible";
        e.style.opacity = "1"
    }
}