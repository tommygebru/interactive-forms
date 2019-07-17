$(document).ready(() => {
	/**********************************************
		B A S E
	**********************************************/
	const orange = "solid #ed723c 2px";
	const black = "solid black 2px";
	const blue = "solid #5e97b0 2px";
	const name = $("#name");
	const btn = $("button");
	const email = $("#mail");

	btn.click(event, () => {
		event.preventDefault();
	});
	const valid = () => {
		btn.css("border", black);
		btn.prop("disable", false);
		$(".review-form").remove();
	};
	const invalid = () => {
		btn.css("border", orange);
		btn.prop("disable", true);
		$("form:last-child").append("<h4 class='review-form'> * Review The Form For Errors Before Submitting</h4>");
		$(".review-form").css("color", "#ed723c");
	};
	/**********************************************
		N A M E
	**********************************************//*
	name.focus();
	if (name.val().length === 0) {
		name.css("border", orange);
		invalid();
	} //if
	name.keyup(() => {
		if (name.val().length === 0) {
			name.css("border", orange);
			invalid();
		} else {
			name.css("border", blue);
			valid();
		} //else
	}); //keyup
	*//**********************************************
		E M A I L
	**********************************************//*
	if (email.val().length === 0) {
		email.css("border", orange);
		invalid();
	} //if
	email.keyup(()=>{
		let string = email.val();
		let regexmail = /^([a-z]+\@[a-z]+\.com)$/i;
		if (regexmail.test(string)){
			email.css("border", blue);
			valid();
		} else {
			email.css("border", orange);
			invalid();
		}
	});
*//***********************************************
	J O B    R O L E
**********************************************//*
$("#other-title").hide();
//upon changing the selection drop down, show text field
$("#title").change(event, () => {
	if (event.target.value === "other") {
		$("#other-title").show();
	} else {
		$("#other-title").hide();
	}
}); //change
/***********************************************
	T S H I R T S
**********************************************/









}); //document.ready
