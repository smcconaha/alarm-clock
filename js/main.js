//Defining basic time variables
function pullTime() {
    const date = new Date();
    let hour = date.getHours();
    
    let amPm;
    if (hour < 12) {
        amPm = "AM";
    } else {
        amPm = "PM";
    };

    if (hour > 12) {
        hour -= 12;
    }
    if(hour.toString().length !== 2) {
        hour = `0${hour}`
    }
    let minute = date.getMinutes();
    if (minute < 10) {
        minute = `0${minute}`;
    };
    let sec = date.getSeconds();
    if (sec < 10) {
        sec = `0${sec}`;
    };
    
    let timeSpan = document.getElementById('clock');
    timeSpan.textContent = `${hour}:${minute}:${sec} ${amPm}`;
};
setInterval(pullTime, 500);

//Alarm
let setAlarm = document.querySelector('input');

function alarmMes () { 
    let setTime = setAlarm.value.split(':');
    
    let amPm;

    console.log(setTime[0])
    if (setTime[0] > 12) {
        amPm = "PM";
        setTime[0] -= 12;
    } else {
        amPm = "AM";
    }
    let timeRec = document.createElement('h5');
    if (setTime === '') {
        timeRec.textContent = 'No alarm set';
    }else{
        timeRec.textContent = `Alarm set for ${setTime[0]}:${setTime[1]} ${amPm}`;
    }
    document.body.appendChild(timeRec);
}    

//Check alarm

function checkAlarm () {
    let alarmVal = setAlarm.value;
    let alarmString = `${alarmVal}:00`;

    let hourNow = new Date().getHours();
        if (hourNow < 10) {
            hourNow = `0${hourNow}`;
        }
    let minNow = new Date().getMinutes();
        if (minNow < 10) {
            minNow = `0${minNow}`;
        }
    let secNow = new Date().getSeconds();
        if (secNow < 10) {
            secNow = `0${secNow}`;
        }
    let alarmVer = `${hourNow}:${minNow}:${secNow}`;

    if (alarmString === alarmVer) {
        alert('Wake Up');
    };
};
setInterval(checkAlarm, 1000);

setAlarm.addEventListener('change', alarmMes);

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