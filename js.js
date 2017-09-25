

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
	hideButtons();
	watermodal.style.display = "none";
	$(".blacksheep").animate({left: '250px'}, 5000, function() {
		checkWaterButton();
		showButtons();
	});
});

$("#watop2").click(function() {
	$("#watop2").prop('disabled', true).addClass("checked");
	hideButtons();
	watermodal.style.display = "none";
	$(".blacksheep").animate({top: '250px'}, 5000, function() {
		checkWaterButton();
		showButtons();
	});
});

$("#watop3").click(function() {
	$("#watop3").prop('disabled', true).addClass("checked");
	hideButtons();
	watermodal.style.display = "none";
	$(".blacksheep").animate({left: '350px'}, 5000, function() {
		checkWaterButton();
		showButtons();
	});
});

function checkWaterButton() {
	if (!$('#watop1').prop("disabled")){ watermodal.style.display = "block"; }
	if (!$('#watop2').prop("disabled")){ watermodal.style.display = "block"; }
	if (!$('#watop3').prop("disabled")){ watermodal.style.display = "block"; }
}

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
	$("#pestiop1").prop('disabled', true).addClass("checked");
	hideButtons();
	pestimodal.style.display = "none";
	$(".farmer").animate({left: '250px'}, 5000, function() {
		checkPestiButton();
		showButtons();
	});
});

$("#pestiop2").click(function() {
	$("#pestiop2").prop('disabled', true).addClass("checked");
	hideButtons();
	pestimodal.style.display = "none";
	$(".farmer").animate({top: '250px'}, 5000, function() {
		checkPestiButton();
		showButtons();
	});
});

$("#pestiop3").click(function() {
	$("#pestiop3").prop('disabled', true).addClass("checked");
	hideButtons();
	pestimodal.style.display = "none";
	$(".farmer").animate({left: '350px'}, 5000, function() {
		checkPestiButton();
		showButtons();
	});
});

function checkPestiButton() {
	if (!$('#pestiop1').prop("disabled")){ pestimodal.style.display = "block"; }
	if (!$('#pestiop2').prop("disabled")){ pestimodal.style.display = "block"; }
	if (!$('#pestiop3').prop("disabled")){ pestimodal.style.display = "block"; }
}

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
	$(this).prop('disabled', true).addClass("checked");
	hideButtons();
	feltimodal.style.display = "none";
	$(".dog").animate({left: '250px'}, 5000, function() {
		checkFeltiButton();
		showButtons();
	});
});
$("#feltiop2").click(function() {
	$(this).prop('disabled', true).addClass("checked");
	hideButtons();
	feltimodal.style.display = "none";
	$(".milk").animate({top: '250px'}, 5000, function() {
		checkFeltiButton();
		showButtons();
	});
});

$("#feltiop3").click(function() {
	$(this).prop('disabled', true).addClass("checked");
	hideButtons();
	feltimodal.style.display = "none";
	$(".hay").animate({left: '350px'}, 5000, function() {
		checkFeltiButton();
		showButtons();
	});
});

function checkFeltiButton() {
	if (!$('#feltiop1').prop("disabled")){ feltimodal.style.display = "block"; }
	if (!$('#feltiop2').prop("disabled")){ feltimodal.style.display = "block"; }
	if (!$('#feltiop3').prop("disabled")){ feltimodal.style.display = "block"; }
}
//END OF PESTICIDES FUNCTIONS

function hideButtons() {
waterbtn.style.display = "none";
pestibtn.style.display = "none";
feltibtn.style.display = "none";
}

function showButtons() {
waterbtn.style.display = "inline-block";
pestibtn.style.display = "inline-block";
feltibtn.style.display = "inline-block";
}

// SOUND PART

var crazy1 = new Audio('sounds/Crazydavelong1.mp3');
var crazy2 = new Audio('sounds/Crazydavelong3.mp3');
var crazy3 = new Audio('sounds/Crazydavescream.mp3');
