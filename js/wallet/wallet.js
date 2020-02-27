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



function funcShowRec() {
	var checkBx, fieldOne;

	checkBx = document.getElementById('show-rec-1');

	fieldOneRed = document.getElementById('FieldOne');
	fieldTwo = document.getElementById('field-2');

	noMargin = document.getElementById('start-rest');

	if (checkBx.checked) {
		fieldOneRed.style.display = 'none'
		fieldTwo.style.display = 'flex'

		noMargin.style.marginBottom = '0px'
	} 
	else {
		fieldOneRed.style.display = 'flex'
		fieldTwo.style.display = 'none'

		noMargin.style.marginBottom = '-15px'
	}

}



function infoPayment() {
	var listPayment = document.getElementById('listPayment')

	if (listPayment.style.display == "none") {
		listPayment.style.display = "block"
	} 
	else {
		listPayment.style.display = "none"
	}
}



function infocardsCash() {
	var listPayment = document.getElementById('listcardsCash')

	if (listPayment.style.display == "none") {
		listPayment.style.display = "block"
	} 
	else {
		listPayment.style.display = "none"
	}
}



function fonds() {
	var listPayment = document.getElementById('listFonds')

	if (listPayment.style.display == "none") {
		listPayment.style.display = "block"
	} 
	else {
		listPayment.style.display = "none"
	}
}



function showPaymentLogos() {
	var listPayment = document.getElementById('payment-logos')

	if (listPayment.style.display == "none") {
		listPayment.style.display = "block"
	} 
	else {
		listPayment.style.display = "none"
	}
}



function showFondsLogos() {
	var listPayment = document.getElementById('fonds-logos')

	if (listPayment.style.display == "none") {
		listPayment.style.display = "block"
	} 
	else {
		listPayment.style.display = "none"
	}
}



function showChange() {
	document.getElementById('FieldOne').style.visibility = 'hidden'
	document.getElementById('paymentPerson').style.visibility = 'hidden'
	document.getElementById('paymentInfo').style.visibility = 'hidden'
	document.getElementById('paymentRest').style.visibility = 'hidden'
	document.getElementById('paymentBankName').style.visibility = 'hidden'
	document.getElementById('paymentLogo').style.visibility = 'hidden'
	document.getElementById('paymentInfoCircle').style.display = 'none'
	document.getElementById('paymentShowRec').style.display = 'none'
	document.getElementById('paymentOK').style.display = 'none'

	document.getElementById('confirmTel').style.display = 'block'
	document.getElementById('change').style.display = 'flex'
}

function showTel() {
	document.getElementById('codeAccept').style.display = 'block'
	document.getElementById('repeat').style.display = 'flex'
}
