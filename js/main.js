//Defining basic time variables
function timePull() {
    const date = new Date();
    const milHours = date.getHours();
    const minute = date.getMinutes();
    const sec = date.getSeconds();

    //Hours military to standard conversion and AM/PM extraction
    let amPm;
    let hour;
    if (milHours < 12) {
        amPm = "AM";
        hour = milHours;
    } else {
        amPm = "PM";
        hour = milHours - 12;
    };
    let currentTime = `${hour}:${minute}:${sec} ${amPm}`;
    
    let timeSpan = document.getElementById('clock');
    return timeSpan.textContent = currentTime;
};
setInterval(timePull, 1000);

/*const alarm = document.getElementById('alarm');
let contents = alarm.innerHTML;*/

//Alarm
let setTime = document.getElementById('alarm');
const btn = document.getElementById('btn');
function setAlarm (time) {
    if (setTime.value !== '') {
        alert('Alarm set');
    } else {
        alert('Please set alarm');
    }
};
btn.addEventListener('click',() => {
    let timeRec = document.createElement('h5');
    timeRec.textContent = `Alarm set for ${setTime}`;
    document.body.appendChild(timeRec);
})

//Month, Day, Year
const date = new Date();
const monthInd = date.getMonth();
const day = date.getDate();
const year = date.getFullYear();

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

const dateSpan = document.createElement('span');
dateSpan.textContent = `${month} ${day} ${year}`;
document.getElementById('container').appendChild(dateSpan);