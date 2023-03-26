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

/*-------------------------------------- Programming Languages Experience ------------------------------------- */
document.getElementById("html__languageExperience--hero").innerHTML = languageExperience(2022, 1, 1);          // the date I started learning HTML
document.getElementById("css__languageExperience--hero").innerHTML = languageExperience(2022, 1, 1);           // the date I started learning CSS
document.getElementById("javaScript__languageExperience--hero").innerHTML = languageExperience(2022, 7, 1);    // the date I started learning JavaScript

// /*
// Name            :   languageExperience()
// Purpose         :   Display programming language experience (Time-period) 
// Input           :   number, number, number
// Output          :   number
// Function call   :   script.js 
// */
function languageExperience(year, month, day){
    /* Elapsed time between learn(When I learned a language) and present time */
    const learn_time_full_date = new Date(year, month, day, 0, 0);                                //  the date when learned a language
    const present_full_date = new Date();                                               //  now

    var diff_in_time = present_full_date.getTime() - learn_time_full_date.getTime();              //  now - Feb 1, 2022
    var diff_in_month = Math.round((diff_in_time / (1000 * 60 * 60 * 24 * 30)));            //  milliseconds ---> months
    var learn_year = learn_time_full_date.getUTCFullYear();                             // month in which learned a language

    if (diff_in_month < 12) {   // less than a year 
        return diff_in_month;
    } else if (diff_in_month == 12) {   // a year
        return 1;
    } else {    // more than a year
        var years_experience = 0;   // hold years of experience of programming language    
        while (learn_year != present_full_date.getUTCFullYear()){
            years_experience++; // increment the variable by 1
            learn_year++;  // increment the learn year by 1 
        }
        return years_experience;    
    }
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
    document.getElementById("side__navigation").style.left = "0px";
}, 5000);








