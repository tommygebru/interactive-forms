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


//Dynamically toggle the payment options based on selection
$("#payment option").change(event, ()=>{
//default is credit card payment
console.log(event.target);
if(event.target.value === "credit card")
{
	$("#credit-card").hide();
}

});

//if selection is paypal
//set the link of the register button to paypal


//if selection is bitcoin
//set the link of the register button to coinbase




}); //document.ready
