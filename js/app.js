// console.log("hi");

$(document).ready(function(){
	// console.log("hiie");

	// Start Header Section
	// Start Banner Section

	// $(".carousel").carousel({
	// 	interval:1000
	// });


	// End Banner Section
	// End Header Section

	// Start Info Section

	$(window).scroll(function(){

		var getscrolltop = $(this).scrollTop();

		// console.log(getscrolltop);

		if(getscrolltop >= 450){
			$(".infotexts").addClass("fromlefts");
			$(".infoimgs").addClass("fromrights");
		}else{
			$(".infotexts").removeClass("fromlefts");
			$(".infoimgs").removeClass("fromrights")
		}

	});

	// End Info Section

	// Start Adv Section

	$("#videos").click(function(){

		var getmodal = $(this).data("bs-target");
		var getvideosrc = $(this).data("video");
		var videourlwithauto = getvideosrc + "?autoplay=1";

		$(getmodal + " iframe").attr("src",videourlwithauto);

		$(getmodal + " button.btn-close").click(function(){
			$(getmodal + " iframe").attr("src",getvideosrc);
		});

		$(getmodal).click('hidden.bs.modal',function(){
			$(getmodal + " iframe").attr("src",getvideosrc);
		});


	});

	

	// End Adv Section

	// Start Premises Section
	$("#lightslider").lightSlider({
		auto:true,
		item:4,
		loop:true,
		slideMove:1,
		speed:600
	});
	// End Premises Section

	// Start Pricing Section

	$(window).scroll(function(){

		var getpricingscroll = $(this).scrollTop();
		// console.log(getpricingscroll);

		if(getpricingscroll >= 2600){
			$(".pricingones").addClass("movelefts");
			$(".pricingtwos").addClass("movebottoms");
			$(".pricingthrees").addClass("moverights");
		}else{
			$(".pricingones").removeClass("movelefts");
			$(".pricingtwos").removeClass("movebottoms");
			$(".pricingthrees").removeClass("moverights");
		}


	});

	// End Pricing Section

	// Start Join Us Section

	$("#accordions").accordion();


	// End Join Us Section

	// Start Footer Section

	$("#getyear").text(new Date().getUTCFullYear());

	// End Footer Section

	// Start Progress
	$(window).scroll(function(){

		// By jquery Method1

		var getprogress = $("#progresses");
		var getprogressval = $("#progressvalues");
		var getscrolltop = $(this).scrollTop();
		// // console.log(getscrolltop);

		// var getscrollheight = $(document).height();
		// // console.log(getscrollheight);

		// var getclientheight = $(window).height();
		// // console.log(getclientheight);

		// var calcheight = getscrollheight - getclientheight;
		// var getfinalheight = Math.round(getscrolltop * 100 / calcheight);
		// console.log(getfinalheight);

		// By Javascript Method 2

		var getscrollheight = document.documentElement.scrollHeight;

		var getclientheight = document.documentElement.clientHeight;

		var calcheight = getscrollheight - getclientheight;

		var getfinalheight = Math.round(getscrolltop * 100 / calcheight)

		
		getprogressval.text(`${getfinalheight}%`);

		getprogress.css({
			"background":`conic-gradient(steelblue ${getfinalheight}%,#eee ${getfinalheight}%)`
		});

	});
	// End Progress



});