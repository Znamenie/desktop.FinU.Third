// Показать поле "Поиск"
function showSearch() {
	if (document.getElementById('openSearch').style.display == 'none') {
		document.getElementById('openSearch').style.display = 'flex';
		document.getElementById('openAside').style.display = 'none';
		document.getElementById('openSearch').animate([
			{ opacity: '0' },
			{ opacity: '1' }
		], { 
		  duration: 700
		});
	}
	else {
		document.getElementById('openSearch').style.display = 'none';
		document.getElementById('openAside').style.display = 'flex';
	}
}


// Скрыть поле "Поиск"
function showAside() {
	if (document.getElementById('openAside').style.display == 'none') {
		document.getElementById('openAside').style.display = 'flex';
		document.getElementById('openSearch').style.display = 'none';
		document.getElementById('openAside').animate([
			{ opacity: '0' },
			{ opacity: '1' }
		], { 
		  duration: 700
		});
	}
	else {
		document.getElementById('openAside').style.display = 'none';
		document.getElementById('openSearch').style.display = 'flex';
	}
}


// Добавление операции
function showAdding() {
	if (document.getElementById('add-items').style.display == 'none') {
		document.getElementById('add-items').style.display = 'flex';
		document.getElementById('add-items').animate([
			{ opacity: '0' },
			{ opacity: '1' }
		], { 
		  duration: 200
		});
	}
	else {
		document.getElementById('add-items').style.display = 'none';
	}
}


// Скрыть добавление операций
function hideAdding() {
	document.getElementById('add-items').style.display = 'none';
};


// Magnific-Popup, он всегда Popup
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


// Табы в "Добавление операций"
function openData(evt, cityName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("operations__list_items_add-element_data_content");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("operations__list_items_add-element_tabs_items_item");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" operations__list_items_add-element_tabs_items_item_active", "");
  }
  document.getElementById(cityName).style.display = "flex";
  evt.currentTarget.className += " operations__list_items_add-element_tabs_items_item_active";
}


// Операции - корректировка12
var toggler = document.getElementsByClassName("caret");
var i;

for (i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener("click", function() {
    this.parentElement.querySelector(".nested").classList.toggle("active");
    this.classList.toggle("caret-down");
  });
}


// Показать\Скрыть "Операции - корректировка12"
function showSmallCorrect() {
	if (document.getElementById("small-correct").style.display == "none") {
		document.getElementById("small-correct").style.display = "block"
	}
	else
		{
			document.getElementById("small-correct").style.display = "none"
		}
}


//
function showExtendHidden() {
	if (document.getElementById("catalog-extend-hidden").style.display == "none") {
		document.getElementById("catalog-extend-hidden").style.display = "block"
	}
	else
		{
			document.getElementById("catalog-extend-hidden").style.display = "none"
		}
}


//
function showExtendHiddenTwo() {
	if (document.getElementById("catalog-extend-hidden-two").style.display == "none") {
		document.getElementById("catalog-extend-hidden-two").style.display = "block"
	}
	else
		{
			document.getElementById("catalog-extend-hidden-two").style.display = "none"
		}
}


//
function showEmloyeeName() {
	if (document.getElementById("employee-name").style.display == "none") {
		document.getElementById("employee-name").style.display = "block"
	}
	else
		{
			document.getElementById("employee-name").style.display = "none"
		}
}


//
function showhideBanksOne() {
	if (document.getElementById("hideBanks-1").style.display == "none") {
		document.getElementById("hideBanks-1").style.display = "block"
	}
	else
		{
			document.getElementById("hideBanks-1").style.display = "none"
		}
}


//
function showhideBanksTwo() {
	if (document.getElementById("hideBanks-2").style.display == "none") {
		document.getElementById("hideBanks-2").style.display = "block"
	}
	else
		{
			document.getElementById("hideBanks-2").style.display = "none"
		}
}


//
function showhideBanksThree() {
	if (document.getElementById("hideBanks-3").style.display == "none") {
		document.getElementById("hideBanks-3").style.display = "block"
	}
	else
		{
			document.getElementById("hideBanks-3").style.display = "none"
		}
}


//
function showhideBanksFour() {
	if (document.getElementById("hideBanks-4").style.display == "none") {
		document.getElementById("hideBanks-4").style.display = "block"
	}
	else
		{
			document.getElementById("hideBanks-4").style.display = "none"
		}
}


//
function showMonthList() {
	if (document.getElementById("next-month_list").style.display == "none") {
		document.getElementById("next-month_list").style.display = "block"
	}
	else
		{
			document.getElementById("next-month_list").style.display = "none"
		}
}


//
function showDateCalendar() {
	if (document.getElementById("date-calend").style.display == "none") {
		document.getElementById("date-calend").style.display = "block"
	}
	else
		{
			document.getElementById("date-calend").style.display = "none"
		}
}