$(document).ready(function() {
//autofocus the first input element
$("#name").focus();
$("#other-title").hide();

//upon changing the selection drop down, show text field
$("#title").change(event,()=>{
  if(event.target.value === "other"){
  $("#other-title").show();
}//if
});//click

});//document.ready
