
function showTime(){
    const timeElement = document.querySelector('#clock');
    const currentTime = new Date();
    
    timeElement.innerHTML = `${currentTime.toLocaleTimeString()}   ${currentTime.toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', year: '2-digit'})}`;  // Example output: "
    
    setTimeout(showTime,1000);
}

window.onload = showTime;



