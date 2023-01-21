//----------------------------------------------------------------------------------------------------------------
/*
Name            :   giveAlert()
Purpose         :   The function will give an alert when the user will try to use the form service 
Input           :	N/A
Output          :	N/A
Function call   :   index.html 
Location        :   The function is use in the CONTACT section 
*/

function giveAlert() {
    alert("The service is currently unavailable. I am still working on it. Sorry for the inconvenience.");
}

/*-------------------------------------- Programming Languages Experience ------------------------------------- */
// ---------- HTML ---------- 
// You started learning html since Feb 2022
// const start__date__html = new Date();  
// start__date__html.setUTCDate(1);        // the date I started learning HTML
// start__date__html.setUTCMonth(2);       // the month I started learning HTML 
// start__date__html.setUTCFullYear(2022); // the year I started learning HTML

document.getElementById("html__languageExperience--hero").innerHTML = languageExperience(2022, 2, 1);          // the date I started learning HTML
document.getElementById("css__languageExperience--hero").innerHTML = languageExperience(2022, 2, 1);           // the date I started learning CSS
document.getElementById("javaScript__languageExperience--hero").innerHTML = languageExperience(2022, 8, 1);    // the date I started learning JavaScript
// document.getElementById("CPlusPlus__languageExperience--hero").innerHTML = monthExperience(2020, 9, 1);     // the date I started learning C++


// /* ---------- HTML ---------- */
// // (You started learning html: Feb 2022)

// /*
// Name            :   calculateMonths()
// Purpose         :   To display programming language experience(Time-period) 
// Input           :   N/A
// Output          :   N/A
// Function call   :   script.js 
// Location        :   The function is use in the "Programming Languages Experience" section
// */
// function calculateMonths(x) {
//     return ((1 + current__date.getUTCMonth()) - (1 + x))
// }

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