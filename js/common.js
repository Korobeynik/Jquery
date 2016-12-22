$(function() {

	$("#hover-btn").mouseover(function(event) {
		$(this).addClass('active');
	});

	$("#hover-btn").mousedown(function(event) {
		$(this).addClass('active-red');
	});

	$("#hover-btn").mouseout(function(event) {
		$(this).removeClass('active');
		$(this).removeClass('active-red');
	});

	$(".nav.navbar-nav").click(function (e) {
		e.preventDefault();
		alert("some");
	});

	

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});
