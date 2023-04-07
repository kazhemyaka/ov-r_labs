let dateHTML = document.getElementById("date");
let dateToPage = new Date();
let dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
dateHTML.innerHTML = `<p>${dateToPage.toLocaleString("uk-UA", dateOptions)}</p>`;

let isMouseOver = false;
dateHTML.addEventListener('mouseover', function () {
    isMouseOver = true;
    let intervalID = setInterval(() => {
        let timeToPage = new Date();
        let timeOptions = { hour: 'numeric', minute: 'numeric', second: 'numeric' };
        dateHTML.innerHTML = `<p>${timeToPage.toLocaleString("uk-UA", timeOptions)}</p>`;
    }, 1000);

    dateHTML.addEventListener('mouseout', function () {
        clearInterval(intervalID);
        dateHTML.innerHTML = `<p>${dateToPage.toLocaleString("uk-UA", dateOptions)}</p>`;
        isMouseOver = false;
    });
});

setInterval(() => {
    if (!isMouseOver) {
        let dateToPage = new Date();
        dateHTML.innerHTML = `<p>${dateToPage.toLocaleString("uk-UA", dateOptions)}</p>`;
    }
}, 1000);

////////////////

let logo = document.getElementById("logo");
let images = ["images/logo1a.png", "images/logo2a.png", "images/logo3a.png", "images/logo4a.png"];

logo.addEventListener('mouseover', function () {
    for (let i = 0; i < images.length; i++) {
        let img = document.getElementById("img" + (i + 1));
        img.src = images[i];
    }
});
logo.addEventListener('mouseout', function () {
    for (let i = 0; i < images.length; i++) {
        let img = document.getElementById("img" + (i + 1));
        img.src = "images/logo" + (i + 1) + ".png";
    }
});

/////////////////

