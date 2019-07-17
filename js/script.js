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


//create a default option for the Color choices
$("#color").prepend(`<option value="other" selected>Choose a color</option>`);
//if selecting js puns hide just tshirt, else show puns

//$("#color option:not(option[value='other'])").hide();
$("#color option").hide();
$("#color option:first").show();

$("#design").change(event, () => {
	if (event.target.value === "js puns") {
		$("option[value='tomato']").hide();
		$("option[value='steelblue']").hide();
		$("option[value='dimgrey']").hide();
		$("option[value='darkslategrey']").show();
		$("option[value='cornflowerblue']").show();
		$("option[value='gold']").show();
	} else if (event.target.value === "heart js") {
		$("option[value='darkslategrey']").hide();
		$("option[value='cornflowerblue']").hide();
		$("option[value='gold']").hide();
		$("option[value='tomato']").show();
		$("option[value='steelblue']").show();
		$("option[value='dimgrey']").show();
	}
}); //change










}); //document.ready
