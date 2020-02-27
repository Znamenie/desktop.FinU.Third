// Логин - Маска телефонного номера
$(document).ready(function() {
	$("#phone").mask("+7  9 9 9 - 9 9 - 9 9 - 9 9 9")
});

// Логин - Маска телефонного номера
$(document).ready(function() {
	$("#phoneTwo").mask("+7  9 9 9 - 9 9 - 9 9 - 9 9 9")
});

// Логин - Маска телефонного номера
$(document).ready(function() {
	$("#phoneThree").mask("+7  9 9 9 - 9 9 - 9 9 - 9 9 9")
});

// Логин - Маска пароля - Показать\скрыть
function show_hide_password(target){
	var input = document.getElementById('password-input');
	if (input.getAttribute('type') == 'password') {
		target.classList.add('view');
		input.setAttribute('type', 'text');
	} else {
		target.classList.remove('view');
		input.setAttribute('type', 'password');
	}
	return false;
}


// Логин - Маска пароля - Показать\скрыть
function show_hide_password_two(target){
	var input = document.getElementById('password-input-two');
	if (input.getAttribute('type') == 'password') {
		target.classList.add('view');
		input.setAttribute('type', 'text');
	} else {
		target.classList.remove('view');
		input.setAttribute('type', 'password');
	}
	return false;
}


// operations - Календарь
$(function() {
  $('input[name="daterange"]').daterangepicker({
    opens: 'left'
  }, function(start, end, label) {
    console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
  });
});


// Блог - выбрать категорию
