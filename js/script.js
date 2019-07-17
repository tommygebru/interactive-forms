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
	**********************************************/
	/*
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
		*/
	/**********************************************
			E M A I L
		**********************************************/
	/*
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
	*/
	/***********************************************
		J O B    R O L E
	**********************************************/
	/*
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
	/*
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
	*/
	/**********************************************
		A C T I V I T I E S
	**********************************************/
	//Create a calculator for the total activity costs
	/*
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
*/


/*
//Toggle conflicting schedules for activities section
$(".activities input").click(event, () => {
	if (event.target.name === "js-frameworks") {

		$("input[name='express']").prop({
			disabled: true
		})

		$("input[name='express']").prop().toggle()
	//	$("input[type='checkbox']:checked").click(()=>{
		//	$("input[name='express']").prop({
		//		disabled: false
		//	})
	//	});

	} else if (event.target.name === "express") {
		$("input[name='js-frameworks']").prop({
			disabled: true
		})
	} else if (event.target.name === "js-libs") {
		$("input[name='node']").prop({
			disabled: true
		})
	} else if (event.target.name === "node") {
		$("input[name='js-libs']").prop({
			disabled: true
		})
	}
}); //change

*/



$(".activities input").change(event, ()=>{
//	if(event.target.checked){console.log("TOTALLY checked");
	//if((event.target).is(":checked")){console.log("TOTALLY checked");
	if (event.target.name === "js-frameworks" && event.target.checked) {
		$("input[name='express']").prop({
			disabled: true
		})
//}//if
}//if
	else if(event.target.checked){
		console.log("NOT checked");
									if (event.target.name === "express") {
									 $("input[name='js-frameworks']").prop({
										 disabled: true
									 })
									}//if

		}//else  if
});//change
/*
if($("input").is(":checked")){console.log("TOTALLY checked");
//	if($(".activities input").is(":checked")){

//Toggle conflicting schedules for activities section
console.log("this is fine");
$(".activities input").click(event, () => {
	console.log("OK im here");
	if (event.target.name === "js-frameworks") {
		$("input[name='express']").prop({
			disabled: true
		})
} else if (event.target.name === "express") {
	$("input[name='js-frameworks']").prop({
		disabled: true
	})
} else if (event.target.name === "js-libs") {
	$("input[name='node']").prop({
		disabled: true
	})
} else if (event.target.name === "node") {
	$("input[name='js-libs']").prop({
		disabled: true
	})
}
}); //click
}//if statements!!!!
else if($("input").not(":checked")){
	console.log("NOT checked");
}
*/





/*
//Toggle conflicting schedules for activities section
$(".activities input").click(event, () => {
	//if (${"input:checked"}) {
	if($("input[name='js-frameworks']:checked")){
		console.log("somehow true");
		$("input[name='express']").prop({
			disabled: false
		})

}


/* else if (event.target.name === "js-frameworks") {
	$("input[name='express']").prop({
		disabled: true
	})
} else if (event.target.name === "node") {
	$("input[name='js-libs']").prop({
		disabled: true
	})
} else if (event.target.name === "js-libs") {
	$("input[name='node']").prop({
		disabled: true
	})
}*/
/*}); //click
*/

}); //document.ready
