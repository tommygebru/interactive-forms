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
	}; //invalid
	/**********************************************
		N A M E
	**********************************************/
		name.focus();
			btn.click(()=>{
//validate the name field upon click
				if (name.val().length === 0) {
					name.css("border", orange);
					invalid();
				} else {
					name.css("border", blue);
					valid();
				} //else
			});//click
//validate upon keyup
			name.keyup(()=>{
				if (name.val().length !== 0) {
					name.css("border", blue);
					valid();
				}
			});//keyup
	/**********************************************
			E M A I L
	**********************************************/
			btn.click(()=>{
//validate the email field upon click
				if(email.val().length === 0){
					invalid();
					email.css("border", orange);
				}
				let stringmail = email.val();
				let regexmail = /^([a-z]+\@[a-z]+\.com)$/i;
				if (regexmail.test(stringmail)){
					email.css("border", blue);
					valid();
				}//if
				else{
					invalid();
					email.css("border", orange);
				}//else
			});//click
//validate upon keyup
email.keyup(()=>{
	let stringmail = email.val();
	let regexmail = /^([a-z]+\@[a-z]+\.com)$/i;
	if (regexmail.test(stringmail)){
		email.css("border", blue);
			valid();}
			else{
				email.css("border", orange);
				invalid();
			}
});//keyup
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
	$("#colors-js-puns").hide();
	$("#color option").hide();

	$("#design").change(event, () => {
		$("#colors-js-puns").show();
			$("#color option:first").show();
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

$(".activities").prepend(`<h3 class="choose">* Choose at least one</h3>`);
$(".choose").hide();
btn.click(()=>{
	if(calcTotal === 0){
		$(".choose").show();
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
	const creditcard = $("#credit-card");
	const paypal = creditcard.next();
	const bitcoin = paypal.next();
	paypal.attr("id", "paypal");
	bitcoin.attr("id", "bitcoin");
	creditcard.show();
	paypal.hide();
	bitcoin.hide();
	$("#payment option:first-of-type").remove();

	//Dynamically toggle the payment options based on selection
	$("#payment").change(event, () => {
		//set the link of the register button to paypal
		if (event.target.value === "paypal") {
			console.log("pp is selected");
			creditcard.hide();
			paypal.show();
			bitcoin.hide();
			valid();
		}
		//set the link of the register button to coinbase
		else if (event.target.value === "bitcoin") {
			console.log("btc is selected");
			creditcard.hide();
			paypal.hide();
			bitcoin.show();
			valid();
		}
else if (event.target.value === "credit card"){
	console.log("cc is selected");
	creditcard.show();
	paypal.hide();
	bitcoin.hide();
}
	});//PAYMENT CHANGE EVENT

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
		const $ccfields = $(".cc-fields");
		$ccfields.css("color", "#ed723c");
		$ccfields.hide();

		$ccnum.selected = true;


		btn.click(event, () => {
			if ($ccnum.value === "" && $zip.value === "" && $cvv.value === "") {
				console.log("all fields empty on click event, therefore make invalid");
				invalid();
				$ccfields.show();
			} else {
				//recreate regex with DOM IF TRUE ---- REMOVE ERROR MESSAGES!!
				let stringcc = $ccnum.value;
				let boolcc = regexcc.test(stringcc);
				let stringzip = $zip.value;
				let boolzip = regexzip.test(stringzip);
				let stringcvv = $cvv.value;
				let boolcvv = regexcvv.test(stringcvv);
				if (boolcc && boolzip && boolcvv) {
					valid();
					$ccfields.hide();
				} else {
					invalid();
					$ccfields.show();
				}
			} //outer else
		}); //btn click event
		$("#cc-num").keyup(() => {//use jquery
			$("#credit-card input").not($ccnum.style.border = blue);
			let stringIs = $ccnum.value;
			let bool = regexcc.test(stringIs);
			if (bool) {
				$ccnum.style.border = blue;
				valid();
				$ccfields.hide();
			} //if
			else {
				$ccnum.style.border = orange;
				invalid();
				$ccfields.show();
			} //else
		}); //keyup
		$("#zip").keyup(() => {
			$("#credit-card input").not($zip.style.border = blue);
			let stringIs = $zip.value;
			let bool = regexzip.test(stringIs);
			if (bool) {
				$zip.style.border = blue;
				valid();
				$ccfields.hide();
			} //if
			else {
				$zip.style.border = orange;
				invalid();
				$ccfields.show();
			} //else
		}); //keyup
		$("#cvv").keyup(() => {
			$("#credit-card input").not($cvv.style.border = blue);
			let stringIs = $cvv.value;
			let bool = regexcvv.test(stringIs);
			if (bool) {
				$cvv.style.border = blue;
				valid();
				$ccfields.hide();
			} //if
			else {
				$cvv.style.border = orange;
				invalid();
				$ccfields.show();
			} //else
		}); //keyup

}); //document.ready
