function getMinutes(){
    const currentDate = new Date();
    return currentDate.getUTCHours() * 60 + currentDate.getUTCMinutes();
}

function isOpen(minutes){
    return (minutes >= 900 && minutes < 1425)
}
function updateStatus(){
    let open = isOpen(getMinutes());
    document.getElementById("status").innerHTML = open ? "Open" : "Closed";
    document.getElementById("status").style.color = open ? "green" : "#c42a22";
}

document.getElementById("year").innerHTML = new Date().getFullYear();
updateStatus();
setInterval(updateStatus, 1000);