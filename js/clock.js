let userName = prompt("Adınızı giriniz: ")

document.getElementById("myName").textContent = userName

function showTime() {
    let days = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];
    let today = new Date();
    day = days[today.getDay()]
    let hour = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();
    hour = hour < 10 ?  "0" + hour : hour;
    minute = minute < 10 ?  "0" + minute : minute;
    second = second < 10 ?  "0" + second : second;

    document.getElementById("myClock").textContent = `${hour}:${minute}:${second} ${day}`
    setTimeout(showTime, 1000);
}

showTime()