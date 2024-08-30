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


/*
Purpose: Change the envelope
*/
function changeEnvelope() {
    // Hide the Envelope Open icon
    envelope_open = document.getElementById("envelope_open");
    envelope_open.setAttribute('style', 'display:none !important');
    // Hide the Envelope Open Text icon
    envelope_open_text = document.getElementById("envelope_open_text");
    envelope_open_text.setAttribute('style', 'display:inline !important');
    envelope_close = document.getElementById("envelope_close");
    name_input = document.getElementById("name_input");
    phone_number_input = document.getElementById("phone_number_input");
    email_input = document.getElementById("email_input");
    message_input = document.getElementById("message_input");
    if (name_input.value == "" && phone_number_input.value == "" && email_input.value == "" && message_input.value == "") {
        envelope_open_text.setAttribute('style', 'display:none !important');
        envelope_close.setAttribute('style', 'display:none !important');
        envelope_open.setAttribute('style', 'display:inline !important');
    }
        
}

function resetEnvelope(){
    envelope_open = document.getElementById("envelope_open");
    envelope_open_text = document.getElementById("envelope_open_text");
    envelope_close = document.getElementById("envelope_close");
    // If the envelope has the paper
    if (envelope_open_text.getAttribute('style') == "display:inline !important") {
        // Hide the close envelope icon
        envelope_close.setAttribute('style', 'display:none !important');
    }
    // If the envelope is open
    if (envelope_open.getAttribute('style') == "display:inline !important") {
        // Hide the open envelope icon
        envelope_open.setAttribute('style', 'display:none');
        // Bring back the close envelope icon
        envelope_close.setAttribute('style', 'display:inline');
    }
}


