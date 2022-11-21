/**
 * set Timeout()
 * It executed based n certain time.
 */

const mytimeout = setTimeout(myGreeting, 5000);
function myGreeting() {
    console.log("Happy Birthday");
}

/**
 * Set Interval()
 * Repeat executed based on certain time.
 */
const mySetInterval = setInterval(alarm, 5000);
function alarm() {
    //console.log("Join Class");
    document.getElementById("display").innerHTML += "Join The Class";
}