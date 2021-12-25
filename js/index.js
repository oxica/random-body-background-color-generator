// При обновлении страницы генерируется рандомный цвет body
// When the page is refreshed, a random body color is generated

const colors = ['tomato', 'orange', 'teal', 'deeppink', 'skyblue', 'red'];
const max = colors.length - 1;
const min = 0;

const index = Math.round(Math.random() * (max - min) + min);
const color = colors[index];

console.log(color);

document.body.style.backgroundColor = color;