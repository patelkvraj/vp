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
}, 5000);


// function changeButton() {
//     // Hire Me button
//     const button_hire_me = document.getElementById("button--hireMe");
// }


/*
Change the copyright year
*/
const d = new Date();
let year = d.getFullYear();
const copyright__year = document.getElementById("copyright__year");
copyright__year.innerHTML = year;

