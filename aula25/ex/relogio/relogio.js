let data = new Date();
let hours = data.getHours();
let minutes = data.getMinutes();
let h1 = document.querySelector('h1');

if(hours < 10){
    hours = `0${hours}`;
}
if(minutes < 10){
    minutes = `0${minutes}`
}

h1.innerHTML = `${hours}:${minutes}`;
