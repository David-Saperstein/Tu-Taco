function getMinutes(){
    const currentDate = new Date();
    return currentDate.getUTCHours() * 60 + currentDate.getUTCMinutes();
}

function isOpen(minutes){
    return (minutes >= 960 || minutes < 45)
}

let open = isOpen(getMinutes());
document.getElementById("status").innerHTML = open ? "Open" : "Closed";
document.getElementById("status").style.color = open ? "green" : "#c42a22";


document.getElementById("year").innerHTML = new Date().getFullYear();