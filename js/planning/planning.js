function openPlan(evt, TabName) {
	var i, tabcontent, tablinks;

	tabcontent = document.getElementsByClassName("planning_content_operat");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	tablinks = document.getElementsByClassName("planning_tabs_links_tab-links");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" planning_tabs_links_tab-links_active", "");
	}

	document.getElementById(TabName).style.display = "block";
	evt.currentTarget.className += " planning_tabs_links_tab-links_active";
}



function sortBy(evt, TabName) {
	var i, tabcontent, tablinks;

	tabcontent = document.getElementsByClassName("planning_content_operat_income-calendar_data_elements-1");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	tablinks = document.getElementsByClassName("planning_content_operat_income-calendar_data_filter_items_tabs_tablinks-1");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" planning_content_operat_income-calendar_data_filter_items_tabs_tablinks_active", "");
	}

	document.getElementById(TabName).style.display = "block";
	evt.currentTarget.className += " planning_content_operat_income-calendar_data_filter_items_tabs_tablinks_active";
}



function sortByTwo(evt, TabName) {
	var i, tabcontent, tablinks;

	tabcontent = document.getElementsByClassName("planning_content_operat_income-calendar_data_elements-2");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	tablinks = document.getElementsByClassName("planning_content_operat_income-calendar_data_filter_items_tabs_tablinks-2");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" planning_content_operat_income-calendar_data_filter_items_tabs_tablinks_active", "");
	}

	document.getElementById(TabName).style.display = "block";
	evt.currentTarget.className += " planning_content_operat_income-calendar_data_filter_items_tabs_tablinks_active";
}



function fun1() {
	var chbox, textTwoOne, textTwoTwo;
	chbox = document.getElementById('switch-one');
	textTwoOne = document.getElementById('textOneOne')
	textTwoTwo = document.getElementById('textOneTwo')

	oneButtons = document.getElementById('oneButtons')
	oneDay = document.getElementById('elements-day')
	oneMonth = document.getElementById('elements-month')
	oneYear = document.getElementById('elements-year')

	oneViewList = document.getElementById('first-view-list')

	if (chbox.checked) {
		textTwoOne.style.color = "#7F8A9F"
		textTwoTwo.style.color = "#0A6FE7"

		oneButtons.style.display = "none"
		oneDay.style.display = "none"
		oneMonth.style.display = "none"
		oneYear.style.display = "none"

		oneViewList.style.display = "block"
	}
	else {
		textTwoOne.style.color = "#0A6FE7"
		textTwoTwo.style.color = "#7F8A9F"

		oneButtons.style.display = "flex"
		oneMonth.style.display = "block"

		oneViewList.style.display = "none"
	}
}



function fun2() {
	var chbox, textTwoOne, textTwoTwo;
	chbox = document.getElementById('switch-two');
	textTwoOne = document.getElementById('textTwoOne')
	textTwoTwo = document.getElementById('textTwoTwo')

	twoButtons = document.getElementById('twoButtons')
	twoDay = document.getElementById('costs-elements-day')
	twoMonth = document.getElementById('costs-elements-month')
	twoYear = document.getElementById('costs-elements-year')

	twoViewList = document.getElementById('second-view-list')

	if (chbox.checked) {
		textTwoOne.style.color = "#7F8A9F"
		textTwoTwo.style.color = "#0A6FE7"

		twoButtons.style.display = "none"
		twoDay.style.display = "none"
		twoMonth.style.display = "none"
		twoYear.style.display = "none"

		twoViewList.style.display = "block"
	}
	else {
		textTwoOne.style.color = "#0A6FE7"
		textTwoTwo.style.color = "#7F8A9F"

		twoButtons.style.display = "flex"
		twoMonth.style.display = "block"

		twoViewList.style.display = "none"
	}
}



$(function () {
	$('.popup-modal').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#username',
		modal: true
	});
	$(document).on('click', '.popup-modal-dismiss', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});
});


// Приход - Добавление - Повторить операцию №1
function showRepeatOperat() {
	if (document.getElementById("repeat-operation-hide").style.display == "none") {
		document.getElementById("repeat-operation-hide").style.display = "block"
	}
	else
		{
			document.getElementById("repeat-operation-hide").style.display = "none"
		}
}


// Приход - Редактирование №1
function showOtherMenuOne() {
	if (document.getElementById("other-menu-1").style.display == "none") {
		document.getElementById("other-menu-1").style.display = "block"
	}
	else
		{
			document.getElementById("other-menu-1").style.display = "none"
		}
}


// Приход - Редактирование 2
function showOtherMenuTwo() {
	if (document.getElementById("other-menu-2").style.display == "none") {
		document.getElementById("other-menu-2").style.display = "block"
	}
	else
		{
			document.getElementById("other-menu-2").style.display = "none"
		}
}


// Приход - Редактирование №3
function showOtherMenuThree() {
	if (document.getElementById("other-menu-3").style.display == "none") {
		document.getElementById("other-menu-3").style.display = "block"
	}
	else
		{
			document.getElementById("other-menu-3").style.display = "none"
		}
}


// Расход - Добавление - Повторить операцию №1
function showRepeatOperatExtend() {
	if (document.getElementById("repeat-operation-hideTwo").style.display == "none") {
		document.getElementById("repeat-operation-hideTwo").style.display = "block"
	}
	else
		{
			document.getElementById("repeat-operation-hideTwo").style.display = "none"
		}
}


// Расход - Редактирование №1
function showOtherExtendMenuOne() {
	if (document.getElementById("otherExtendHideOne").style.display == "none") {
		document.getElementById("otherExtendHideOne").style.display = "block"
	}
	else
		{
			document.getElementById("otherExtendHideOne").style.display = "none"
		}
}


// Расход - Редактирование №2
function showOtherExtendMenuTwo() {
	if (document.getElementById("otherExtendHideTwo").style.display == "none") {
		document.getElementById("otherExtendHideTwo").style.display = "block"
	}
	else
		{
			document.getElementById("otherExtendHideTwo").style.display = "none"
		}
}


// Расход - Редактирование №3
function showOtherExtendMenuThree() {
	if (document.getElementById("showOtherExtendMenuThree").style.display == "none") {
		document.getElementById("showOtherExtendMenuThree").style.display = "block"
	}
	else
		{
			document.getElementById("showOtherExtendMenuThree").style.display = "none"
		}
}