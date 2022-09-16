//Defining basic time variables
function pullTime() {
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
    
    let timeSpan = document.getElementById('clock');
    timeSpan.textContent = `${hour}:${minute}:${sec} ${amPm}`;
};
setInterval(pullTime, 900);

//Alarm
let setAlarm = document.querySelector('input');

function alarmMes () { 
    let setTime = setAlarm.value; //***** Why not innerHTML?
    let timeRec = document.createElement('h5');
    if (setTime === '') {
        timeRec.textContent = 'No alarm set';
    }else{
        timeRec.textContent = `Alarm set for ${setTime}`;
    }
    document.body.appendChild(timeRec);
}    

while (setAlarm.value === `{$new Date().getHours}:{$new Date().getMinutes}`) {
    alert('Wake Up');
};

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