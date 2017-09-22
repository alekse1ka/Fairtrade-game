

	$("#water").click(function(){
    $(this).prop('disabled', true).addClass("checked");
});
	$("#pesti").click(function(){
    $(this).prop('disabled', true).addClass("checked");
});
	$("#felti").click(function(){
    $(this).prop('disabled', true).addClass("checked");
});

// WATER MODAL
var watermodal = document.getElementById('waterModal');
var waterbtn = document.getElementById("water");
waterbtn.onclick = function() {
	watermodal.style.display = "block";
	crazy1.play();
}
var waterspan = document.getElementsByClassName("waterclose")[0];
waterspan.onclick = function() {watermodal.style.display = "none";}
// END OF WATER MODAL

//WATER FUNCTIONS
$("#watop1").click(function() {
	$("#watop1").prop('disabled', true).addClass("checked");
	watermodal.style.display = "none";
	$(".blacksheep").animate({left: '250px'}, 5000, function() {
		console.log("Done");
	if ($('#watop1, #watop2, #watop3').prop("disabled")){
		watermodal.style.display = "none"; 
	} else {
		watermodal.style.display = "block"; 
		}
	});
});

$("#watop2").click(function() {
	$(this).prop('disabled', true).addClass("checked");
	watermodal.style.display = "none";
	$(".blacksheep").animate({top: '250px'}, 5000, function() {
		console.log("Done");
	if ($("#watop1, #watop2, #watop3").prop("disabled")){
		watermodal.style.display = "none"; 
	} else {
		watermodal.style.display = "block"; 
		}
	});
});

$("#watop3").click(function() {
	$(this).prop('disabled', true).addClass("checked");
	watermodal.style.display = "none";
	$(".blacksheep").animate({left: '350px'}, 5000, function() {
		console.log("Done");
	if ($("#watop1, #watop2, #watop3").prop("disabled")){
		watermodal.style.display = "none"; 
	} else {
		watermodal.style.display = "block"; 
		}
	});
});


// 	if ($(".blacksheep") == {left: '250px'}) {
//     console.log("if");
// 	} else {
//     console.log("else");
//     $("#watop1").prop('disabled', true).addClass("checked");
// }



//END OF WATER FUNCTIONS

// PESTICIDES MODAL
var pestimodal = document.getElementById('pestiModal');
var pestibtn = document.getElementById("pesti");
pestibtn.onclick = function() {
	pestimodal.style.display = "block";
	crazy2.play();
}
var pestispan = document.getElementsByClassName("pesticlose")[0];
pestispan.onclick = function() {pestimodal.style.display = "none";}
// END OF PESTICIDES MODAL

//PESTICIDES FUNCTIONS
$("#pestiop1").click(function() {
	pestimodal.style.display = "none";
	$(".farmer").animate({left: '250px'}, 5000, function() {
		console.log("Done");
		pestimodal.style.display = "block";
	});
	$(this).prop('disabled', true).addClass("checked");
});
$("#pestiop2").click(function() {
	pestimodal.style.display = "none";
	$(".farmer").animate({top: '250px'}, 5000, function() {
		console.log("Done");
		pestimodal.style.display = "block";
	});
	$(this).prop('disabled', true).addClass("checked");
});

	$("#pestiop3").click(function() {
	pestimodal.style.display = "none";
	$(".farmer").animate({left: '350px'}, 5000, function() {
		console.log("Done");
		// watermodal.style.display = "block";
	});
	$(this).prop('disabled', true).addClass("checked");
});

//END OF PESTICIDES FUNCTIONS

// FELTIRIZE MODAL
var feltimodal = document.getElementById('feltiModal');
var feltibtn = document.getElementById("felti");
feltibtn.onclick = function() {
	feltimodal.style.display = "block";
	crazy3.play();
}
var feltispan = document.getElementsByClassName("felticlose")[0];
feltispan.onclick = function() {feltimodal.style.display = "none";}
// END OF FILTIRIZE MODAL

//FELTIRIZE FUNCTIONS
$("#feltiop1").click(function() {
	feltimodal.style.display = "none";
	$(".dog").animate({left: '250px'}, 5000, function() {
		console.log("Done");
		feltimodal.style.display = "block";
	});
	$(this).prop('disabled', true).addClass("checked");
});
$("#feltiop2").click(function() {
	feltimodal.style.display = "none";
	$(".milk").animate({top: '250px'}, 5000, function() {
		console.log("Done");
		feltimodal.style.display = "block";
	});
	$(this).prop('disabled', true).addClass("checked");
});

	$("#feltiop3").click(function() {
	feltimodal.style.display = "none";
	$(".hay").animate({left: '350px'}, 5000, function() {
		console.log("Done");
		// watermodal.style.display = "block";
	});
	$(this).prop('disabled', true).addClass("checked");
});

//END OF PESTICIDES FUNCTIONS

// SOUND PART

var crazy1 = new Audio('sounds/Crazydavelong1.mp3');
var crazy2 = new Audio('sounds/Crazydavelong3.mp3');
var crazy3 = new Audio('sounds/Crazydavescream.mp3');
