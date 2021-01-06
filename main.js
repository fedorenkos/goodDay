
const out = document.querySelector('.out');
const hour = new Date().getHours();

let greeting;

if(hour >= 5 && hour < 12){
    greeting = 'Доброе утро';
} else if(hour >= 12 && hour < 18){
    greeting = 'Добрый день'; 
}else if(hour > 18 && hour < 24){
    greeting = 'Доброй ночи';
}
out.innerHTML = greeting;
// console.log(greeting);

const out1 = document.querySelector('.out1');
function func(){
const day = new Date();
let days = new Array(7);
    days[0] = "Воскресенье";
    days[1] = "Понедельник";
    days[2] = "Вторник";
    days[3] = "Среда";
    days[4] = "Четверг";
    days[5] = "Пятница";
    days[6] = "Суббота";

let week = days[day.getDay()];
out1.innerHTML = 'Сегодня: ' + week;
}
func();

const out2 = document.querySelector('.out2');

function getCurrentTime(){
    return new Date().toTimeString().replace(/ .*/, '');
}
setInterval( () => out2.innerHTML = 'Текущее время: ' + getCurrentTime());
getCurrentTime();


const out3 = document.querySelector('.out3');

function daysLeftNewYear(){
    let today = new Date();
    newYearDay  = new Date('January 1, 2022');
    msPerDay = 24*60*60*1000;
    daysLeft = Math.round((newYearDay.getTime() - today.getTime()) / msPerDay);
    let dayName = '';
    ds = '' + daysLeft;
    dd = parseInt(ds.substr(ds.length-1));
        if (daysLeft > 4 && daysLeft < 21 ) {
            dayName = 'дней'; 
        } else if (dd == 1){
            dayName = 'день';
        } else if (dd == 2 || dd == 3 || dd == 4) {
            dayName = 'дня';
        }
    console.log(dayName);
    out3.innerHTML = 'До нового года осталось ' + daysLeft + dayName;
}
daysLeftNewYear();