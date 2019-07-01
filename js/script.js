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
	let calcTotal = 0;
	$(".activities").append(`<h4></h4>`);
	//Create a calculator for the total activity costs
	$(".activities input").change(event, () => {
		let activity = event.target.parentNode.innerHTML;
		let prices = activity.slice(-3);
		if (event.target.checked == true) {
			calcTotal += Number(prices);
			$(".activities h4").text(`TOTAL: ${calcTotal}`);
			console.log(calcTotal, "added");
			//retrieve whole strings for both AM and PM
			let tuesdayAm = activity.slice(0);
			let tuesdayPm = activity.slice(0);

			//set regex
			let tuesdayAmRegex = /(Tuesday\s9am-12pm)/;
			let tuesdayPmRegex = /(Tuesday\s1pm-4pm)/;
			//test regex
			console.log("am", tuesdayAmRegex.test(tuesdayAm));
			console.log("pm", tuesdayPmRegex.test(tuesdayPm));



						if (tuesdayAmRegex.test(tuesdayAm)){
							 if(".activities [name='js-framework']"){
								 $(".activities [name='express']").prop({disabled: true});
								 $(".activities [name='js-frameworks']").prop({disabled: false});
							 }else if(".activities [name='express']"){
								 $(".activities [name='js-frameworks']").prop({disabled: true});
								 $(".activities [name='express']").prop({disabled: false});
							 }
						}
						else if(tuesdayPmRegex.test(tuesdayPm)){
							if(".activities [name='js-libs']"){
								$(".activities [name='node']").prop({disabled: true});
								$(".activities [name='js-libs']").prop({disabled: false});

							}else if(".activities [name='node']"){
								$(".activities [name='js-libs']").prop({disabled: true});
								$(".activities [name='js-node']").prop({disabled: false});

							}

						}
						//if regex == string match 9am
						//toggle other regex for 9am
						//if regex == string match for 1pm
						//toggle other regex for 9am

		} else {
			calcTotal -= Number(prices);
			$(".activities h4").text(`TOTAL: ${calcTotal}`);
			console.log(calcTotal, "removed");
		}
	}); //change
}); //document.ready
