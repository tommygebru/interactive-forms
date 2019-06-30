$(document).ready(function() {
	//autofocus the first input element
	$("#name").focus();
	$("#other-title").hide();
	//upon changing the selection drop down, show text field
	$("#title").change(event, () => {
		if (event.target.value === "other") {
			$("#other-title").show();
		} //if
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




	$(".activities label").change(event, () => {
		if (event.target.checked == true) {
      let activity = event.target.value;
      console.log("text is ", activity);

			//let prices = functionName.slice(-3);
			$(".activities").append(`<h4> TOTAL:  </h4>`);
		} else {
			console.log("how do i create a returning text node so i can manipulate its string?");
		}
		//let calcTotal = 0;
		//calcTotal+= Number(prices);
		//console.log("calcTotal", calcTotal);
		//add value to calculations
		//else no value updated
		//target input, upon change (if checked),
		//splice the last 3 characters and include
		//as "addition" entry for running total
	}); //change
}); //document.ready
