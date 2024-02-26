function showTime() {
let time = new Date();
  let hr = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();
  let session = "AM";

  if (hr == 0) hr = 12;
  if (hr > 12) {
    hr = hr - 12;
    session = "PM";
  }
  if (hr == 12) session = "PM";
  hr = hr < 10 ? "0" + hr : hr;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  document.getElementById("hours").innerText = hr;
  document.getElementById("min").innerText = min;
  document.getElementById("sec").innerText = sec;
  document.getElementById("session").innerText = session;
  setTimeout(showTime, 1000);
}
showTime();

function display() {
  const textChange = document.getElementById("change_text");
  const picChange = document.getElementById("change_pic");
  const wakeUp = document.querySelector("#wakeup_time");
  const lunch = document.querySelector("#lunch_time");
  const nap = document.querySelector("#nap_time");
  const dinner = document.querySelector("#dinner_time");
  
  const wakeupData = document.getElementById('display-1');
  const lunchData = document.getElementById('display-2');
  const napData = document.getElementById('display-3');
  const dinnerData = document.getElementById('display-4');

  wakeupData.innerHTML = wakeUp.value;
  lunchData.innerHTML = lunch.value;
  napData.innerHTML = nap.value;
  dinnerData.innerHTML = dinner.value;

  let date = new Date();
  let hrs = date.getHours();
    let session = "AM";

  if (hrs == 0) hrs = 12;
  if (hrs > 12) {
    hrs = hrs - 12;
    session = "PM";
  }
  if (hrs == 12) session = "PM";

  let match = `${hrs}${session}-${+hrs + 1}${session}`;
  if (wakeUp.value == match) {
    textChange.innerText = "A SMALL BREAKFAST, A BIG SMILE !!";
    picChange.src = "./image/breakfast.jfif";
  }
  if (lunch.value == match) {
    textChange.innerText = "IT'S A LUNCH CRUNCH TIME !!";
    picChange.src = "./image/lunch.webp";
  }
  if (nap.value == match) {
    textChange.innerText = "SIP, SIP ! IT'S A TEA TIME !!";
    picChange.src = "./image/nap.jpg";
  }
  if (dinner.value == match) {
    textChange.innerText = "GO TO BED AND SLEEP !!";
    picChange.src = "./image/bed_time.jpg";
  }
}
