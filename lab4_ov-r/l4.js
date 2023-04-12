function leapYear() {
    let year = new Date().getFullYear();
    console.log(year);
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
        alert("Поточний рік (" + year + ") є високосним.");
    } else {
        alert("Поточний рік (" + year + ") не є високосним.");
    }
}
window.onload = leapYear;

function showValue() {
    let select = document.getElementById("select");
    let value = select.options[select.selectedIndex].value;
    alert("Обраний варіант: " + value);
}