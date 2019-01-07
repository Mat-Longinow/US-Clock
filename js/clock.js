// Clock.js
// This page creates the functionality of the clock
// Written by Mat Longinow 2019

var pst = document.getElementById('pst');
var mst = document.getElementById('mst');
var cst = document.getElementById('cst');
var est = document.getElementById('est');
var body = document.getElementById('body');


function clock() {
    var DOMHour = document.getElementById('hour');
    var DOMampm = document.getElementById('ampm');

    function checkHour(){
        var hour = parseInt(DOMHour.textContent);
        
        if(hour > 12){
            DOMHour.innerHTML = hour - 12;
            
            DOMampm.innerHTML = "PM";
        } else if(hour < 1) {
            DOMHour.innerHTML = hour + 12;
            
            DOMampm.innerHTML = "PM";
            
            if (hour == 0){
                DOMampm.innerHTML = "AM";
            }
        } else if(UTCHour > 12) {
            DOMampm.innerHTML = "PM";
        } else {
            DOMampm.innerHTML = "AM";
        };
    }

    var UTCHour = new Date().getUTCHours();
    var UTCAdjustedHour = 0;
    var UTCMin = new Date().getUTCMinutes();
    var UTCSec = new Date().getUTCSeconds();

    function translateHour() {
        if(UTCHour > 12) {
            UTCAdjustedHour = UTCHour - 12;
        }
    };

    translateHour();

    console.log("The UTC time is currently set to " + UTCHour + ":" + UTCMin + ":" + UTCSec);

    function setTime() {
        if(pst.className == "active") {
            DOMHour.innerHTML = UTCHour - 8;
        } else if(mst.className == "active") {
            DOMHour.innerHTML = UTCHour - 7;
        } else if(cst.className == "active") {
            DOMHour.innerHTML = UTCHour - 6;
        } else if(est.className ==  "active") {
            DOMHour.innerHTML = UTCHour - 5;
        }

        checkHour();

        document.getElementById('minutes').innerHTML = UTCMin;

        document.getElementById('seconds').innerHTML = UTCSec;
    };

    setTime();
}

// This is a toggle to either have the clock running continuously or (for test purposes) just once
// clock();
setInterval(clock, 1000);

function changetimezone(x) {
    if(x == "pst"){
        pst.className = "active";
        
        mst.classList.remove("active");
        
        cst.classList.remove("active");
        
        est.classList.remove("active");

        body.classList.add("pst");

        body.classList.remove("mst");

        body.classList.remove("cst");

        body.classList.remove("est");
    } else if(x == "mst") {
        mst.className = "active";
          
        pst.classList.remove("active");
        
        cst.classList.remove("active");
        
        est.classList.remove("active");
        
        body.classList.add("mst");

        body.classList.remove("pst");

        body.classList.remove("cst");
        
        body.classList.remove("est");
    } else if (x == "cst") {
        cst.className = "active";
          
        pst.classList.remove("active");
        
        mst.classList.remove("active");
        
        est.classList.remove("active");

        body.classList.add("cst");

        body.classList.remove("pst");

        body.classList.remove("mst");
        
        body.classList.remove("est");
    } else if(x == "est") {
        est.className = "active";
          
        pst.classList.remove("active");
        
        mst.classList.remove("active");
        
        cst.classList.remove("active");

        body.classList.add("est");

        body.classList.remove("pst");

        body.classList.remove("mst");
        
        body.classList.remove("cst");
    };

    clock();
}

pst.addEventListener("click", function() {changetimezone("pst");});
mst.addEventListener("click", function() {changetimezone("mst");});
cst.addEventListener("click", function() {changetimezone("cst");});
est.addEventListener("click", function() {changetimezone("est");});





