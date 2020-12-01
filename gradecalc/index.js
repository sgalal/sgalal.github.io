'use strict';

$('#resultWrapper').dialog({
	dialogClass: "no-close",
	title: "Result Panel",
	position: [50, 150]
});

$(document).scroll(function(event) {
	if ($(".ui-widget-overlay")) {
		$(".ui-widget-overlay").css({
			position: 'fixed',
			top: '0'
		});

		var pos = $(".ui-dialog").position();

		$(".ui-dialog").css({
			position: 'fixed',
			top: pos.y
		});
	}
});

function calculate() {
	var i = 0, acc = 0;
	document.querySelectorAll('tbody > tr').forEach(function(elem) {
		var score = elem.childNodes[1].innerText | 0;
		var checked = elem.childNodes[2].childNodes[0].checked;
		if (checked) {
			i += 1;
			acc += score;
		}
	});
	document.getElementById('count').innerText = i < 2 ? i + ' course' : i + ' courses';
	document.getElementById('result').innerText = i === 0 ? 0 : (acc / i).toFixed(2);
}

document.querySelectorAll('input[type=checkbox]').forEach(function(item) {
	item.addEventListener('change', function(event) {
		calculate();
	});
});

function selectAll(val) {
	document.querySelectorAll('tbody > tr').forEach(function(elem) {
		if (!val || !elem.childNodes[2].childNodes[0].disabled) {
			elem.childNodes[2].childNodes[0].checked = val;
		}
	});
	calculate();
}

selectAll(false);
