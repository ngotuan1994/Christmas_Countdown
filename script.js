const days_doc = document.getElementById("days")
const hours_doc = document.getElementById("hours")
const minutues_doc = document.getElementById("mins")
const seconds_doc = document.getElementById("seconds")


const countTime = () => {
    const currDate = new Date();
    let christmas = "25 Dec " + new Date().getFullYear();
    christmas = new Date(christmas)
    let chrismasYear = new Date().getFullYear();
    if (currDate > new Date(christmas)){
        chrismasYear +=1;
    }
    let chrisDate = new Date("25 Dec " + chrismasYear);
    const totalTime = (chrisDate - currDate)/1000;
    const days = Math.floor(totalTime/3600/24);
    const hours = Math.floor(totalTime/3600%24);
    const mins = Math.floor(totalTime/60%60);
    const seconds = Math.floor(totalTime%60);
    days_doc.innerHTML = days;
    hours_doc.innerHTML = hours;
    minutues_doc.innerHTML = mins;
    seconds_doc.innerHTML = seconds;
    
   
}

countTime();
setInterval(countTime,1000);