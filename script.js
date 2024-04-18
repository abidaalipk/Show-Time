


// myfunction  = () => {
//     const time = new Date();
// time.setHours(5);
// document.getElementById("demo").innerHTML = time;
// }

// var t = new Date().toLocaleTimeString();
// document.getElementById("time").innerHTML = t;

// var d = new Date().toLocaleTimeString();
// document.getElementById("demo").innerHTML = d;

(function(){
    setInterval(() => {    
        var d = new Date().toLocaleString();
        document.getElementById("demo").innerHTML = d;
},  1000)
})();

