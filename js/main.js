//Defining basic time variables
const date = new Date();
const monthInd = date.getMonth();
const milHours = date.getHours();
const day = date.getDate();
const year = date.getFullYear();
const minute = date.getMinutes();
const sec = date.getSeconds();

//Month number to string conversion
let monthArr = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
];
for (let i = 0; i < monthArr.length; i++) {
    month = monthArr[monthInd];
}

//Hours military to standard conversion
function milConv (hours) {
    if (hours > 12) {
        return hours - 12;
    } else {
        return hours;
    }
};


const hourSpan = document.createElement('span');
hourSpan.textContent = milConv(milHours);
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