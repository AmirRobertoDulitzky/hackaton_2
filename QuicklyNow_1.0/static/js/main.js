
function coloring() {
    let range = [min1 = 180, max1 = 240, min2 = 180, max2 = 240, min3 = 180, max3 = 240];
    // let rangeForPic = max1 - min1;
    // let dev = 3;

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let randomizeColor1 = getRandomInt(min1, max1)
    let randomizeColor2 = getRandomInt(min2, max2)
    let randomizeColor3 = getRandomInt(min3, max3)
    let pallete = "rgb(" + randomizeColor1 + "," + randomizeColor2 + "," + randomizeColor3 + "," + 0.6 + ")";
    return pallete;
}


function changeColor() {
        document.getElementById("outcome-body-color").style.backgroundColor = coloring();
        // document.querySelector("#outcome-pic").style.background = "{{url_for('../img/bp_2_diag_blue_green.jpg')}}";
}


























// document.getElementById("submit").onclick =
//     function() {
//         console.log("momo")
//     }

// console.log("connection established")
// alert();

// function sayHi(){
//     alert("hi");
// }
// var newColor = "enter color here"

//  function changeColor() {
//     document.body.style.backgroundColor = "rgb("+250+","+200+","+150+")";
// }
// export function colorize() {
// document.body.style.backgroundColor = newColor;
// }
// document.body.style.backgroundColor = "rgb("+250+","+200+","+150+")";

