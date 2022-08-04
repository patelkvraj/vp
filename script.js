/*                          THE DOCUMENTATION

Dummy comment for function
--------------------------
Purpose: The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. 
Location: The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.



*/


/*
Purpose: The function will give an alert when the user will try to use the form service. 
Location: The function is use in the CONTACT section. 
*/
function giveAlert() {
    alert("The service is currently unavailable. I am still working on it. Sorry for the inconvenience.");
}



/*-------------------------------------- Programming Languages Experience ------------------------------------- */

/* ---------- HTML ---------- */
const start__html = new Date();
const current__html = new Date();
start__html.setUTCMonth(2); // started learning html in February 2022

/* HTML Experience calculation */
var exp__html = current__html.getUTCMonth() - start__html.getUTCMonth(); // Current month - Month started learning html 

document.getElementById("html__langExp--hero").innerHTML = exp__html;

/* ---------- CSS ---------- */
const start__css = new Date();
const current__css = new Date();
start__css.setUTCMonth(2); // started learning html in February 2022

/* HTML Experience calculation */
var exp__html = current__css.getUTCMonth() - start__css.getUTCMonth(); // Current month - Month started learning html 

document.getElementById("css__langExp--hero").innerHTML = exp__html;

/* ---------- JavaScript ---------- */
const start__javaScript= new Date();
const current__javaScript = new Date();
start__javaScript.setUTCMonth(7); // started learning html in February 2022

/* HTML Experience calculation */
var exp__html = current__javaScript.getUTCMonth() - start__javaScript.getUTCMonth(); // Current month - Month started learning html 

document.getElementById("javaScript__langExp--hero").innerHTML = exp__html;




