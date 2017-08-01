//***************************************************************
// Programmer:  Taylor, Timothy
// Date:        December 28th, 2015
// File Name:   keno.js
// Description: Contains functions to add functionality to site.
//              Function List:
//                  randomNumberPicker - .
//
//***************************************************************

var pickedNumbers = [];
var allNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
                  19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33,
                  34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48,
                  49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63,
                  64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78,
                  79, 80];

$(beginPicking);

function beginPicking() {
    shuffler(allNumbers);
    var i = 0;
    for (i; i < 20; i++)
    {
        window.setTimeout (
            (function (i) {
                return function() {
                    $('#' + pickedNumbers[i]).parent().addClass('w3-yellow w3-animate-bottom');
                }
            })(i), i * 3000)
    }
    
//    rePick();
    
}

//function rePick() {
//    setInterval(function() {
//        location.reload(true);
//    }, 240000);
//}

function shuffler (allNumbers) {
    var m = allNumbers.length, t, i;
    
    while (m) {
        i = Math.floor(Math.random() * m--);
        
        t = allNumbers[m];
        allNumbers[m] = allNumbers[i];
        allNumbers[i] = t;
    }
    pickedNumbers = allNumbers.slice(0,21);
    return pickedNumbers;
}