$(document).ready(function() {
	//autofocus the first input element
	$("#name").focus();
	$("#other-title").hide();
	//upon changing the selection drop down, show text field
	$("#title").change(event, () => {
		if (event.target.value === "other") {
			$("#other-title").show();
		} else {
			$("#other-title").hide();
		}
	}); //change

	//create a default option for the Color choices
	$("#color").prepend(`<option value="other" selected>Choose a color</option>`);
	//if selecting js puns hide just tshirt, else show puns
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

	//Create a calculator for the total activity costs
	let calcTotal = 0;
	$(".activities").append(`<h4>TOTAL: </h4>`);
	$(".activities input").change(event, () => {
		let activity = event.target.parentNode.innerHTML;
		let prices = activity.slice(-3);
		if (event.target.checked == true) {
			calcTotal += Number(prices);
			$(".activities h4").html(`TOTAL: $${calcTotal}`);
			console.log(calcTotal, "added");
		} else {
			calcTotal -= Number(prices);
			$(".activities h4").html(`TOTAL $${calcTotal}`);
			console.log(calcTotal, "removed");
		}
	}); //change

	//Toggle conflicting schedules for activities section
	$(".activities input").change(event, () => {
		if (event.target.name === "js-frameworks") {
			$("input[name='express']").prop({
				disabled: true
			});
		} else if (event.target.name === "express") {
			$("input[name='js-frameworks']").prop({
				disabled: true
			});
		} else if (event.target.name === "js-libs") {
			$("input[name='node']").prop({
				disabled: true
			});
		} else if (event.target.name === "node") {
			$("input[name='js-libs']").prop({
				disabled: true
			});
		}
	}); //change

	const paypal = $("#credit-card").next();
	const bitcoin = $("#credit-card").next().next();
	paypal.attr("id", "paypal");
	bitcoin.attr("id", "bitcoin");
	$("#credit-card").show();
	$("#paypal").hide();
	$("#bitcoin").hide();
	//Dynamically toggle the payment options based on selection
	$("#payment").change(event, () => {
		//if selection is credit card
		//remove any current links
		if (event.target.value === "credit card") {
			$("#credit-card").show();
			$("#paypal").hide();
			$("#bitcoin").hide();
		}
		//if selection is paypal
		//set the link of the register button to paypal
		else if (event.target.value === "paypal") {
			$("#credit-card").hide();
			$("#paypal").show();
			$("#bitcoin").hide();
		}
		//if selection is bitcoin
		//set the link of the register button to coinbase
		else if (event.target.value === "bitcoin") {
			$("#credit-card").hide();
			$("#paypal").hide();
			$("#bitcoin").show();
		}
	});

//Set button state for Register
const button = document.getElementsByTagName("button");
const buttonEn = $("button").prop("disable", false);
const buttonDis = $("button").prop("disable", true).css("background", "orange");
buttonDis;


//Form Validations
//name field cannot be blank
let namestring = $("#name").val();
//let regexname = //;
//namestring.test(regexname);
if(namestring.length<=0){
$("button").prop("disable", true);
}

//email field must have valid formatting
let email = $("#mail").val();
//let regexmail = //;
//mailstring.test(regexmail);

//at least one checkboxes must be checked





//$("")
//IF THE CREDIT CARD PAYMENT IS SELECTED BEGIN VALIDATION OF THE FOLLOWING
$("#payment").change(event, () => {
$("#cc-num").focus(()=>{
//#("#cc-num").attr("maxlength", 16);
document.getElementById('cc-num').setAttribute('maxlength', 16);

$("#cc-num").css("border", "solid #FF1493	2px");
$("#credit-card input").not($("#cc-num")).css("border", "solid #F4F6F6	2px");

$("#cc-num").keyup(()=>{
let regex = /([0-9]{13,16})/;
let stringIs = $("#cc-num").val();
let bool = regex.test(stringIs);
console.log(`cc-num values are, ${stringIs} and the length is ${stringIs.length} and the regex test returns ${regex.test(stringIs)}`);
if(bool){
$("#cc-num").css("border", "solid #F4F6F6	2px");
}//if
});//keyup
});//focus








$("#zip").focus(()=>{
document.getElementById('zip').setAttribute('maxlength', 5);

$("#zip").css("border", "solid #FF1493	2px");
$("#credit-card input").not($("#zip")).css("border", "solid #F4F6F6	2px");

$("#zip").keyup(()=>{
let regex = /([0-9]{5})/;
let stringIs = $("#zip").val();
let bool = regex.test(stringIs);
console.log(`zipcode values are, ${stringIs} and the length is ${stringIs.length} and the regex test returns ${regex.test(stringIs)}`);
if(bool){
$("#zip").css("border", "solid #F4F6F6	2px");
}//if
});//keyup


});//focus
$("#cvv").focus(()=>{
document.getElementById('cvv').setAttribute('maxlength', 3);

$("#cvv").css("border", "solid #FF1493	2px");
$("#credit-card input").not($("#cvv")).css("border", "solid #F4F6F6	2px");

$("#cvv").keyup(()=>{
let regex = /([0-9]{3})/;
let stringIs = $("#cvv").val();
let bool = regex.test(stringIs);
console.log(`CVV values are, ${stringIs} and the length is ${stringIs.length} and the regex test returns ${regex.test(stringIs)}`);
if(bool){
$("#cvv").css("border", "solid #F4F6F6	2px");
}//if
});//keyup
});//focus

//}//if
});//change
//Credit Card is 13 and 16 digits.
//Zip code is 5 digits
//CVV code is 3 digits

//Create your own custom validation checks and error messages!!


}); //document.ready
