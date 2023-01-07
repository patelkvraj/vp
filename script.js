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
const start__date__html = new Date();  
start__date__html.setUTCDate(1);        // the date I started learning HTML
start__date__html.setUTCMonth(2);       // the month I started learning HTML 
start__date__html.setUTCFullYear(2022); // the year I started learning HTML

//document.getElementById("html__languageExperience--hero").innerHTML = monthExperience(start__date__html.getMonth(), start__date__html.getFullYear()); 
document.getElementById("html__languageExperience--hero").innerHTML = monthExperience(); 




//          PROBLEM: Update will not work after this december.
// /*-------------------------------------- Programming Languages Experience ------------------------------------- */
// const current__date = new Date();   // object holds the current date

// /* ---------- HTML ---------- */
// // (You started learning html: Feb 2022)
// const start__date__html = new Date();  
// start__date__html.setUTCDate(1);  // the date I started learning HTML
// start__date__html.setUTCMonth(1); // the month I started learning HTML 
// start__date__html.setUTCFullYear(2022); // the year I started learning HTML
// document.getElementById("html__langExp--hero").innerHTML = calculateMonths(start__date__html.getUTCMonth());

// /* ---------- CSS ---------- */
// const start__date__css = new Date();
// start__date__css.setUTCDate(1);  // the date I started learning CSS
// start__date__css.setUTCMonth(1); // the month I started learning CSS
// start__date__css.setUTCFullYear(2022);   // the year I started learning CSS
// document.getElementById("css__langExp--hero").innerHTML = calculateMonths(start__date__css.getUTCMonth());

// /* ---------- JavaScript ---------- */
// const start__date__javaScript = new Date();
// start__date__javaScript.setUTCDate(1);   // the date I started learning JavaScript
// start__date__javaScript.setUTCMonth(7);   // the month I started learning JavaScript
// start__date__javaScript.setUTCFullYear(2022);   // the year I started learning JavaScript
// document.getElementById("javaScript__langExp--hero").innerHTML = calculateMonths(start__date__javaScript.getUTCMonth());

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

function monthExperience(){
    /* Elapsed time between learn(When I learned a language) and present time */
    const learn_time = new Date(2022, 2, 1, 0, 0);                                      //  Feb 1, 2022
    const present_full_date = new Date();                                               //  now
    var diff_in_time = present_full_date.getTime() - learn_time.getTime();              //  now - Feb 1, 2022
    var diff_in_month = Math.round((diff_in_time / (1000 * 60 * 60 * 24 * 30)) + 1);    //  milliseconds to months, and add 1 to round up calculation correctly 

    if(diff_in_month <= 12){
        return diff_in_month;
    }else {
        alert("It's more than a year");
    }
}