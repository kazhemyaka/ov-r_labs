function toggleMenu() {
    let nav = document.getElementById("myTopnav");
    if (nav.className === "topnav") {
        nav.className += " responsive";
    } else {
        nav.className = "topnav";
    }
    let active = document.getElementById("js-active");
    if (nav.className === "topnav responsive") {
        active.className += " active";
    } else {
        active.className = " ";
    }
}