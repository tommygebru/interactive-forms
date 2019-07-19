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

	$("form:last-child").append("<h4 class='review-form'> * Review The Form For Errors Before Submitting</h4>");
  $(".review-form").hide();
	const valid = () => {
		btn.css("border", black);
		btn.prop("disable", false);
		$(".review-form").hide();
	};
	const invalid = () => {
		btn.css("border", orange);
		btn.prop("disable", true);
		$(".review-form").show();
		$(".review-form").css("color", "#ed723c");
};//invalid
	/**********************************************
		N A M E
	**********************************************/

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

	/**********************************************
			E M A I L
		**********************************************/

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

	/***********************************************
		J O B    R O L E
	**********************************************/

	$("#other-title").hide();
	//upon changing the selection drop down, show text field
	$("#title").change(event, () => {
		if (event.target.value === "other") {
			$("#other-title").show();
		} else {
			$("#other-title").hide();
		}
	}); //change

	/**********************************************
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

	/**********************************************
		A C T I V I T I E S
	**********************************************/
	//Create a calculator for the total activity costs

	let calcTotal = 0;
	$(".activities").append(`<h4>TOTAL: </h4>`);
	$(".activities input").change(event, () => {
		let activity = event.target.parentNode.innerHTML;
		let prices = activity.slice(-3);
		if (event.target.checked == true) {
			calcTotal += Number(prices);
			$(".activities h4").html(`TOTAL: $${calcTotal}`);
		} else {
			calcTotal -= Number(prices);
			$(".activities h4").html(`TOTAL $${calcTotal}`);
		}
		if(calcTotal>0){
			valid();
			$(".activities h3").remove();
		}
	}); //change


btn.click(()=>{
	if(calcTotal === 0){
		$(".activities").prepend(`<h3>* Choose at least one</h3>`);
		$(".activities h3").css("color", "#ed723c");
		invalid();
	}else if(calcTotal !==0){
		$(".activities h3").remove();
		valid();
	}
}); //click


let js = "input[name='js-frameworks']";
let libs = "input[name='js-libs']";
let node = "input[name='node']";
let exp = "input[name='express']";

$(".activities input").change(event, ()=>{
	if (event.target.name === "js-frameworks" && event.target.checked){
		$(js).prop({disabled: false});
		$(exp).prop({disabled: true});
	}
		else if(event.target.name === "js-frameworks"){
			$(exp).prop({disabled: false});
		}
		if (event.target.name === "express" && event.target.checked){
			$(exp).prop({disabled: false});
			$(js).prop({disabled: true});
		}
			else if(event.target.name === "express"){
				$(js).prop({disabled: false});
			}

  if (event.target.name === "js-libs" && event.target.checked){
		$(libs).prop({disabled: false});
		$(node).prop({disabled: true});
	}
		else if(event.target.name === "js-libs"){
			$(node).prop({disabled: false});
		}
		if (event.target.name === "node" && event.target.checked){
			$(node).prop({disabled: false});
			$(libs).prop({disabled: true});
		}
			else if(event.target.name === "node"){
				$(libs).prop({disabled: false});
			}
});//change


/**********************************************
	P A Y M E N T S
**********************************************/
const paypal = $("#credit-card").next();
const bitcoin = $("#credit-card").next().next();
paypal.attr("id", "paypal");
bitcoin.attr("id", "bitcoin");
$("#credit-card").show();
$("#paypal").hide();
$("#bitcoin").hide();
$("#payment option:first-of-type").remove();


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


const $ccnum = document.getElementById('cc-num');
const $zip = document.getElementById('zip');
const $cvv = document.getElementById('cvv');
$ccnum.setAttribute('maxlength', 16);
$zip.setAttribute('maxlength', 5);
$cvv.setAttribute('maxlength', 3);
const regexcc = /(^[0-9]{13,16}$)/;
const regexzip = /(^[0-9]{5}$)/;
const regexcvv = /(^[0-9]{3}$)/;
const stringcc = $ccnum.value;
const stringzip = $zip.value;
const stringcvv = $cvv.value;

$("fieldset:last-of-type legend").prepend(`<h3 class='cc-fields'>* Fill out all fields</h3>`);
$(".cc-fields").css("color", "#ed723c");
$(".cc-fields").hide();

btn.click(event, ()=>{
if($ccnum.value === "" && $zip.value === "" && $cvv.value === ""){
	console.log("all fields empty on click event, therefore make invalid");
	invalid(); $(".cc-fields").show();
}
else {console.log("there are some values in the INPUT methods");
//recreate regex with DOM IF TRUE ---- REMOVE ERROR MESSAGES!!
let stringcc = $ccnum.value;
let boolcc = regexcc.test(stringcc);

let stringzip = $zip.value;
let boolzip = regexzip.test(stringzip);


let stringcvv = $cvv.value;
let boolcvv = regexcvv.test(stringcvv);

if(boolcc && boolzip && boolcvv){ valid(); $(".cc-fields").hide();}
else{invalid(); $(".cc-fields").show();}
}//outer else
});//btn click event

$("#cc-num").keyup(() => {
	$("#credit-card input").not($("#cc-num")).css("border", blue);
let stringIs = $ccnum.value; let bool = regexcc.test(stringIs);
	if (bool) {$("#cc-num").css("border", blue);valid(); $(".cc-fields").hide();}//if
	else {$("#cc-num").css("border", orange); invalid(); $(".cc-fields").show();}//else
});//keyup

$("#zip").keyup(() => {
	$("#credit-card input").not($("#zip")).css("border", blue);
	let stringIs = $zip.value; let bool = regexzip.test(stringIs);
	if (bool) {$("#zip").css("border", blue);valid(); $(".cc-fields").hide();} //if
	else {$("#zip").css("border", orange);invalid(); $(".cc-fields").show();} //else
}); //keyup

$("#cvv").keyup(() => {
	$("#credit-card input").not($("#cvv")).css("border", blue);
	let stringIs = $cvv.value; let bool = regexcvv.test(stringIs);
	if (bool) {$("#cvv").css("border", blue);valid();  $(".cc-fields").hide();} //if
	else {$("#cvv").css("border", orange);invalid();$(".cc-fields").show(); } //else
}); //keyup

}); //document.ready
