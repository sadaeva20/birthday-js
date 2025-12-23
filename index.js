const day = parseInt(prompt("Введите день:"));
const month = parseInt(prompt("Введите месяц:"));
const year = parseInt(prompt("Введите год:"));

const date = new Date(year, month - 1, day);

console.log("День недели:", date.toLocaleDateString("ru-RU", { weekday: "long" }));

const leap = year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
console.log("Високосный год:", leap ? "Да" : "Нет");

const today = new Date();
let age = today.getFullYear() - year;
if (today.getMonth() < month - 1 || (today.getMonth() === month - 1 && today.getDate() < day)) {
    age--;
}
console.log("Возраст:", age);
