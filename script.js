
/*                          THE DOCUMENTATION

Dummy comment for function
--------------------------
Purpose: The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. 
Function call: The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.
Location: The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.

Dummy comment for if-else/if statements
--------------------------
Purpose: The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.


*/


//----------------------------------------------------------------------------------------------------------------
/*
Purpose: The function will give an alert when the user will try to use the form service. 
Function call: index.html file.
Location: The function is use in the CONTACT section. 
*/
function giveAlert() {
    alert("The service is currently unavailable. I am still working on it. Sorry for the inconvenience.");
}


//          PROBLEM: Update will not work after this december.
/*-------------------------------------- Programming Languages Experience ------------------------------------- */
const current__date = new Date();   // created object holds current date
const start__date__html = new Date();  
start__date__html.setUTCDate(1);  // the date I started learning HTML
start__date__html.setUTCMonth(1); // the month I started learning HTML 
start__date__html.setUTCFullYear(2022); // the year I started learning HTML

document.getElementById("html__langExp--hero").innerHTML = calculateMonths(start__date__html.getUTCMonth());


/* ---------- CSS ---------- */
const start__date__css = new Date();
start__date__css.setUTCDate(1);  // the date I started learning CSS
start__date__css.setUTCMonth(1); // the month I started learning CSS
start__date__css.setUTCFullYear(2022);   // the year I started learning CSS

document.getElementById("css__langExp--hero").innerHTML = calculateMonths(start__date__css.getUTCMonth());


/* ---------- JavaScript ---------- */
const start__date__javaScript = new Date();
start__date__javaScript.setUTCDate(1);   // the date I started learning JavaScript
start__date__javaScript.setUTCMonth(7);   // the month I started learning JavaScript
start__date__javaScript.setUTCFullYear(2022);   // the year I started learning JavaScript

document.getElementById("javaScript__langExp--hero").innerHTML = calculateMonths(start__date__javaScript.getUTCMonth());

/*
Purpose: Gives the total number of months passed since learning html. (You started learning html: Feb 2022)
Function call: script.js file.
Location: The function is use in the "Programming Languages Experience" section. 
*/
function calculateMonths(x) {
    return ((1 + current__date.getUTCMonth()) - (1 + x))
}
