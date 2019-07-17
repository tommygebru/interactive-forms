$(document).ready(() => {

const orange = "solid #ed723c 2px";
const black = "solid black 2px";
const blue = "solid #5e97b0 2px"

const name = $("#name");
const btn = $("button");


btn.click(event,() => {
	event.preventDefault();
});
const valid = () => {
btn.css("border", black);
btn.prop("disable", false);
$(".review-form").remove();
}
const invalid = () => {
	btn.css("border", orange);
	btn.prop("disable", true);
	$("form:last-child").append("<h4 class='review-form'> * Review The Form For Errors Before Submitting</h4>");
	$(".review-form").css("color", "#ed723c");
}



name.focus();

	if(name.val().length === 0){
		console.log(1);
		name.css("border", orange);
		invalid();
		console.log(1);
	}//if
	name.keyup(()=>{
		if(name.val().length === 0){
			console.log(2);
			name.css("border", orange);
			invalid();
			console.log(2);
		}
		else{
			name.css("border", blue);
			console.log(3);
			valid();
			console.log(3);
		}//else
	});//keyup
});//document.ready
