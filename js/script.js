//----------------------------------------------------------------------------------------------------------------
/*
Name            :   giveAlert()
Purpose         :   The function will give an alert when the user will try to use the form service 
Input           :	N/A
Output          :	N/A
Function call   :   index.html 
*/
function giveAlert() {
    alert("The service is currently unavailable. I am still working on it. Sorry for the inconvenience.");
}

// /*
// Name            :   removeSidebar()
// Purpose         :   Removes the sidebar when a user clicks
// Input           :   n/a
// Output          :   n/a
// Function call   :   index.html 
// */
function removeSidebar(){
    document.getElementById("social__media").style.left = "-60px";
    document.getElementById("right__arrow").style.visibility = "visible";
}

// /*
// Name            :   addSidebar()
// Purpose         :   Adds the sidebar when a user clicks
// Input           :   n/a
// Output          :   n/a
// Function call   :   index.html
// */
function addSidebar(){
    document.getElementById("social__media").style.left = "0px";
    document.getElementById("right__arrow").style.visibility = "hidden";
}

// /*
// Name            :   setTimeout()
// Purpose         :   Displays the sidebar
// Input           :   A function with CSS property, time in milliseconds 
// Output          :   n/a
// Function call   :   script.js
// */
setTimeout(function(){
    addSidebar();
    playSound();
}, 5000);


// /*
// Name            :   playSound()
// Purpose         :   Play pop up sound for the sidebar appearance.
// Input           :   n/a 
// Output          :   n/a
// Function call   :   index.html
// */
function playSound() {
    var x = document.getElementById("audio");
    x.play();
}


