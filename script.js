
var ddlYears = document.getElementById("ddlYears");
var date=document.querySelectorAll('.date');
var check=document.querySelector("#check");
var output=document.getElementById('answer');
var luck=document.getElementById('lucky');
var dob="";
var sum=0;
//Declared a function to add value to dob
function setDate(event){
    dob+=event.target.value;
}
// Function to calculate sum of digits
function sumDate(date){
while(Math.floor(date/10)!=0){
sum=sum+(date%10);
date=Math.floor(date/10);
}
sum=date+sum;
console.log(sum)
checkLuck(sum);
}
function checkLuck(sum){
    if(sum%(luck.value)==0)
    output.innerHTML="Wow... You're Lucky";
    else
    output.innerHTML="Sorry... You're Unlucky";
}
//Adding Event Listeners
for(let i=0;i<3;i++){
    date[i].addEventListener("change",setDate);
}
check.addEventListener("click",()=>{
    dob=parseInt(dob);
    sumDate(dob);
})
// Setting  years starting from 1980
window.onload = function () {
    //Determine the Current Year.
    var currentYear = (new Date()).getFullYear();
    //Loop and add the Year values to DropDownList.
    for (var i = 1980; i <= currentYear; i++) {
        var option = document.createElement("OPTION");
        option.innerHTML = i;
        option.value = i;
        ddlYears.appendChild(option);
    }
};