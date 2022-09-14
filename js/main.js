const date = new Date(); //create variable for Date.prototype
const month = date.getMonth()+1; //using getXX() methods to retrieve individual values
const day = date.getDate();
const year = date.getFullYear();
const hours = date.getHours()-12;//military time
const minute = date.getMinutes();
const sec = date.getSeconds();


const hourSpan = document.createElement('span');
hourSpan.textContent = hours;
document.getElementById('container').appendChild(hourSpan);

const minSpan = document.createElement('span');
minSpan.textContent = minute;
document.getElementById('container').appendChild(minSpan);

const secSpan = document.createElement('span');
secSpan.textContent = sec;
document.getElementById('container').appendChild(secSpan);

const monSpan = document.createElement('span');
monSpan.textContent = month;
document.getElementById('container').appendChild(monSpan);

const daySpan = document.createElement('span');
daySpan.textContent = day;
document.getElementById('container').appendChild(daySpan);

const yearSpan = document.createElement('span');
yearSpan.textContent = year;
document.getElementById('container').appendChild(yearSpan);