/* establish global variables */
// photos credit to Yanying Ji
var pix = ["DSC01805.jpg", "DSC01840.jpg", "DSC01993.jpg", "IMG_7864.jpg"],
    i = 1,
    init = 0;

// functions
function goNext() {
    "use strict";
    var curimg = document.getElementById('cur_img');
    // first time clicking any buttons
    if (init === 0) {
        curimg.src = 'images/' + pix[i];
        init = -1;
    // wrap around
    } else if (i === pix.length - 1) {
        i = 0;
        curimg.src = 'images/' + pix[i];
    } else {
        i = i + 1;
        curimg.src = 'images/' + pix[i];
    }
}

function goPrev() {
    "use strict";
    var curimg = document.getElementById('cur_img');
    // first time clicking any buttons
    if (init === 0) {
        i = pix.length - 1;
        curimg.src = 'images/' + pix[i];
        init = -1;
    // wrap around
    } else if (i === 0) {
        i = pix.length - 1;
        curimg.src = 'images/' + pix[i];
    } else {
        i = i - 1;
        curimg.src = 'images/' + pix[i];
    }
}

