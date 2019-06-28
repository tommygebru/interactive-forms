$(document).ready(function() {
//autofocus the first input element
$("#name").focus();
$("#other-title").hide();

//upon changing the selection drop down, show text field
$("#title").change(event,()=>{
  if(event.target.value === "other"){
  $("#other-title").show();
}//if
});//change

//within Tshirt info
//Design options determines the available Color options





const newItem = document.createElement("option");
newItem.setAttribute("placeholder", "choose a color");
console.log(newItem);
//const colorSelect = document.getElementsByTagName("#color option").prepend(newItem);
$("#color").prepend(newItem);
//console.log(colorSelect.previousElementSibling);
//colorSelect.prev(newItem, colorSelect.childNodes[0]);







//let newOp = document.createElement("option")

//let setOp = newOp.setAttribute("placeholder", "choose a color");
//console.log(setOp);
//let firstOp = document.querySelector("#color option")[0].previousElementSibling
//console.log(firstOp);
//allOps[0]= setOp;







//  $("#design option").firstChild(newOp);
//designOp.firstElementChild(newOp);






//if selecting js puns hide just tshirt, else show puns
$("#design").change(event, ()=>{
  console.log(event.target.value);

if(event.target.value === "js puns"){
$("option[value='tomato']").hide();
$("option[value='steelblue']").hide();
$("option[value='dimgrey']").hide();
$("option[value='darkslategrey']").show();
$("option[value='cornflowerblue']").show();
$("option[value='gold']").show();
  }
  else if(event.target.value === "heart js"){
$("option[value='darkslategrey']").hide();
$("option[value='cornflowerblue']").hide();
$("option[value='gold']").hide();
$("option[value='tomato']").show();
$("option[value='steelblue']").show();
$("option[value='dimgrey']").show();
}
});//change




});//document.ready
