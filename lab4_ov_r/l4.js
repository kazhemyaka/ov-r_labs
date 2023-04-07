function showWeeks() {
    // створюємо об'єкт дати для поточної дати
    let currentDate = new Date();
    // створюємо об'єкт дати для 1 вересня поточного року
    let firstSeptember = new Date(currentDate.getFullYear(), 8, 1);
    // якщо поточна дата перед 1 вересням, ми повинні використовувати минулий рік
    if (currentDate < firstSeptember) {
        firstSeptember.setFullYear(currentDate.getFullYear() - 1);
    }
    // визначаємо різницю в мілісекундах між 1 вересням і поточною датою
    let millisecondsPerWeek = 1000 * 60 * 60 * 24 * 7;
    console.log(millisecondsPerWeek);
    let difference = currentDate.getTime() - firstSeptember.getTime();
    console.log(difference);
    // визначаємо кількість тижнів з останнього 1 вересня
    let weeks = Math.floor(difference / millisecondsPerWeek);
    console.log(weeks);
    // встановлюємо значення input з id "weeks"
    document.getElementById("weeks").value = weeks;
}
function clearWeeks() {
    document.getElementById("weeks").value = "";
}

function leapYear() {
    let year = new Date().getFullYear();
    console.log(year);
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
        alert("Поточний рік (" + year + ") є високосним.");
    } else {
        alert("Поточний рік (" + year + ") не є високосним.");
    }
}

function showValue() {
    let select = document.getElementById("select");
    let value = select.options[select.selectedIndex].value;
    alert("Обраний варіант: " + value);
}