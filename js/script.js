$(document).ready(function() {
	//autofocus the first input element
	$("#name").focus();
	$("#other-title").hide();
	//upon changing the selection drop down, show text field
	$("#title").change(event, () => {
		if (event.target.value === "other") {
			$("#other-title").show();
		}		else{
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
				} else {
					calcTotal -= Number(prices);
					$(".activities h4").text(`TOTAL: ${calcTotal}`);
					console.log(calcTotal, "removed");
				}
			}); //change




}); //document.ready
