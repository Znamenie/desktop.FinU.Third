function openBlog(evt, TabName) {
	var i, tabcontent, tablinks;

	tabcontent = document.getElementsByClassName("admin-blog_content_elements_element");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	tablinks = document.getElementsByClassName("admin-blog_content_tabs-add_inner_buttons");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" admin-blog_content_tabs-add_inner_buttons_active", "");
	}

	document.getElementById(TabName).style.display = "block";
	evt.currentTarget.className += " admin-blog_content_tabs-add_inner_buttons_active";
}


//Попап
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


///
// $('.blog-toggle').click(function () {
// 	var checked = $('.admin-blog_content_elements_element_items_item_switch-trash_switch_checking', this).is(':checked');
// 	$('span', this).text(checked ? 'Выкл.' : 'Вкл.');
// });

///
// $('.admin-blog_content_elements_element_items_item_switch-trash_switch_checking').click(function(){
// 	if ($(this).prop('checked')) {
// 		$(this).parent().find('span').html('Вкл.');
// 	} else {
// 		$(this).parent().find('span').text('Выкл.');
// 	};
// });

// $(document).ready(function(){
// 	$('.admin-blog_content_elements_element_items_item_switch-trash_switch_checking').each(function() {
// 		if ($('.admin-blog_content_elements_element_items_item_switch-trash_switch_checking').prop('checked')) {
// 			$('.blog-toggle').parent().find('span').text('Вкл.');
// 		} 
// 		else {
// 			$('.blog-toggle').parent().find('span').text('Выкл.');
// 		}
// 	});
// });