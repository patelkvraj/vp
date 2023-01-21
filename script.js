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
document.getElementById("html__languageExperience--hero").innerHTML = languageExperience(2022, 2, 1);          // the date I started learning HTML
document.getElementById("css__languageExperience--hero").innerHTML = languageExperience(2022, 2, 1);           // the date I started learning CSS
document.getElementById("javaScript__languageExperience--hero").innerHTML = languageExperience(2022, 8, 1);    // the date I started learning JavaScript

// /*
// Name            :   languageExperience()
// Purpose         :   Display programming language experience (Time-period) 
// Input           :   number, number, number
// Output          :   number
// Function call   :   script.js 
// */
function languageExperience(year, month, day){
    /* Elapsed time between learn(When I learned a language) and present time */
    const learn_time = new Date(year, month, day, 0, 0);                                //  the date when learned a language
    const present_full_date = new Date();                                               //  now
    var diff_in_time = present_full_date.getTime() - learn_time.getTime();              //  now - Feb 1, 2022
    var diff_in_month = Math.round((diff_in_time / (1000 * 60 * 60 * 24 * 30)) + 1);    //  milliseconds to months, and add 1 to round up calculation correctly 

    if(diff_in_month <= 12){
        return diff_in_month;
    }else {
        alert("It's more than a year");
    }
}