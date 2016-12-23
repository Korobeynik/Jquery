$(function() {

	$('#carousel-id').carousel({
		interval: false
	})

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

	// $(".item a").on('click.namespace', function (e) {
	// 		e.preventDefault();
	// 		console.log('Hello my friend!!!');
	// });

/* ===========  Динамически создаем блок  ========== */
	var span = $('.item span');
	var matrix = $('#matrix');
	matrix.append("<div class='td'></div>");
	var elem  = $('#matrix .td');
	
	function createTd(){
		var i = elem;
		for (var i=0; i<399; i++) { //greate element td
			matrix.append("<div class='td'></div>");
		}
	}

	createTd();

	$(matrix).on('click', elem, function () {
		$(elem).toggleClass('red');
	});

 

	$('.item a').on('click', function (e) {
			e.preventDefault();
			$('.item span').toggle('slow', function(){
					console.log('The span is now hidden');
			});		
	});

	// function matrix(argument) {
	// 	var elemCount = elem * 5;

	// 	matrix.append(elemCount);
	// };

	// matrix();

	

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
