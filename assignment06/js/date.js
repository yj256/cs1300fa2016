window.onload = function cur_date() {
    "use strict";
    // variables
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        // get full date
        date = new Date(),
        // current year, month, day
        cur_year = date.getFullYear(),
        cur_month = months[date.getMonth()],
        today = date.getDate(),
        // set info up for DOM tree
        nspan = document.createElement('span'),
        ntext = document.createTextNode(today + ' ' + cur_month + ' ' + cur_year),
        pos = document.getElementsByTagName('footer')[0];
    
    // append date to footer
    nspan.appendChild(ntext);
    pos.appendChild(nspan);
};