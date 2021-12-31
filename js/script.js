const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

const currentDate = new Date();

let hr = currentDate.getHours();
let mint = currentDate.getMinutes();
let sec = currentDate.getSeconds();

console.log(hr + " hour" + ":" + mint + " mins" + ":" + sec + " Secs");

let hrPosition = (hr * 360) / 12 + (mint * (360 / 60)) / 12;
let minPosition = (mint * 360) / 60 + (sec * (360 / 60)) / 60;
let secPosition = (sec * 360) / 60;

function runCurrentTime() {
  hrPosition = hrPosition + 3 / 360;
  minPosition = minPosition + 6 / 60;
  secPosition = secPosition + 6;

  HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
  MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
  SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}
let interval = setInterval(runCurrentTime, 1000); 

// console.log(hr + ":" + mint + ":" + sec);
