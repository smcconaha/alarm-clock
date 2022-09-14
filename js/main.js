const date = new Date(); //create variable for Date.prototype
const month = date.getMonth()+1; //using getXX() methods to retrieve individual values
const day = date.getDate();
const year = date.getFullYear();
const hours = date.getHours()-12;//military time
const min = date.getMinutes();
const sec = date.getSeconds();
console.log(hours);