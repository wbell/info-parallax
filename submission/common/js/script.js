/* Author:

*/





$(window).load(function(){

setTimeout(function(){

	var scrollorama = $.scrollorama({
			blocks:'section'
		});
		
		var mainHeight = parseInt($("section#last").css("top"),10);
		$("div[role=main]").css("height",mainHeight+"px");

	///////////////////////////////////////////////////////// #first //////////////////////////////////////////////////
	
	
	
	
	/////////////////////////////////////////////////////// #second /////////////////////////////////////////////
	var secondH = $("#second").height();
	
	scrollorama.animate('#second .bg', {
		duration:secondH+200, 
		delay:200,
		property:'top',
		start:300,
		end:-100
	});
	
	scrollorama.animate('#second h2', {
		duration:secondH, 
		delay:100,
		property:'width',
		start:1000
	});
	
	scrollorama.animate('#second h5.med', {
		duration:secondH+300, 
		delay:200,
		property:'margin-left',
		start:-500,
		end:200
	});		
	
	scrollorama.animate('#second h5.sm', {
		duration:secondH+300, 
		delay:300,
		property:'margin-left',
		start:500,
		end:-400
	});		
	
	scrollorama.animate('#second .arrow', {
		duration:secondH+250, 
		delay:200,
		property:'margin-top',
		start:200,
		end:-100
	});	
		
	scrollorama.animate('#second .green .max', {
		duration:secondH, 
		delay:250,
		property:'height',
		start:10
	});			
	
	scrollorama.animate('#second .red .max', {
		duration:secondH, 
		delay:200,
		property:'height',
		start:10
	});

	scrollorama.animate('#second .present strong', {
		duration:secondH, 
		delay:200,
		property:'opacity',
		start:0,
		end:1
	});	
	
	scrollorama.animate('#second .pct', {
		duration:secondH, 
		delay:200,
		property:'opacity',
		start:0,
		end:1
	});		
	

	/////////////////////////////////////////////////////// #third /////////////////////////////////////////////
	var thirdH = $("#third").height();
	
	scrollorama.animate('#third .bg', {
		duration:thirdH*2, 
		delay:100,
		property:'top',
		start:-250,
		end:250
	});	
	
	scrollorama.animate('#third h2', {
		duration:thirdH,
		delay:100,
		property:'width',
		start:1000
	});
	
	scrollorama.animate('#third .sm .stocking', {
		duration:thirdH+500,
		delay:100,
		property:'rotate',
		start:-40,
		end:20
	});	
	
	scrollorama.animate('#third .md .stocking', {
		duration:thirdH+500,
		delay:100,
		property:'rotate',
		start:30,
		end:-30
	});		
	
	scrollorama.animate('#third .lg .stocking', {
		duration:thirdH+500,
		delay:100,
		property:'rotate',
		start:-40,
		end:20
	});	
	
	scrollorama.animate('#third .sm strong', {
		duration:thirdH,
		delay:0,
		property:'zoom',
		start:0.01,
		end:1
	});
	
	scrollorama.animate('#third .md strong', {
		duration:thirdH-100,
		delay:0,
		property:'zoom',
		start:0.01,
		end:1
	});	
	
	scrollorama.animate('#third .lg strong', {
		duration:thirdH-200,
		delay:0,
		property:'zoom',
		start:0.01,
		end:1
	});		

	scrollorama.animate('#third .pct', {
		duration:thirdH, 
		delay:0,
		property:'opacity',
		start:0,
		end:1
	});	
	
	scrollorama.animate('#third .arrow', {
		duration:thirdH+250, 
		delay:200,
		property:'margin-top',
		start:200,
		end:-100
	});	
	
	scrollorama.animate('#third h5', {
		duration:thirdH*2, 
		delay:0,
		property:'margin-left',
		start:-200,
		end:100
	});		
	
	scrollorama.animate('#third h5', {
		duration:thirdH, 
		delay:100,
		property:'opacity',
		start:0,
		end:1
	});		
	
	
	
	/////////////////////////////////////////////////////// #fourth /////////////////////////////////////////////
	var fourthH = $("#fourth").height();
	
	scrollorama.animate('#fourth h2', {
		duration:fourthH,
		delay:100,
		property:'width',
		start:1000
	});	
	
	scrollorama.animate('#fourth .bg', {
		duration:fourthH, 
		delay:200,
		property:'top',
		start:300,
		end:0
	});		
	
	scrollorama.animate('#fourth .coupon div', {
		duration:fourthH, 
		delay:300,
		property:'rotate',
		start:-165,
		end:0
	});			
	
	scrollorama.animate('#fourth .coupon', {
		duration:fourthH, 
		delay:300,
		property:'zoom',
		start:.1,
		end:1
	});			
	
	scrollorama.animate('#fourth .social div', {
		duration:fourthH, 
		delay:200,
		property:'rotate',
		start:-165,
		end:0
	});			
	
	scrollorama.animate('#fourth .social', {
		duration:fourthH, 
		delay:200,
		property:'zoom',
		start:.1,
		end:1
	});			
	
	scrollorama.animate('#fourth .group div', {
		duration:fourthH, 
		delay:100,
		property:'rotate',
		start:-165,
		end:0
	});			
	
	scrollorama.animate('#fourth .group', {
		duration:fourthH, 
		delay:100,
		property:'zoom',
		start:.1,
		end:1
	});			
	

	/////////////////////////////////////////////////////// #fifth /////////////////////////////////////////////
	var fifthH = $("#fifth").height();	

	scrollorama.animate('#fifth .sign', {
		duration:fifthH+300, 
		delay:-100,
		property:'rotate',
		start:-15,
		end:10
	});		
	
	scrollorama.animate('#fifth h2', {
		duration:fifthH-200, 
		delay:100,
		property:'zoom',
		start:.1,
		end:1
	});		
	
	var fifth1 = 0;
	$("#fifth .max").each(function(){
		scrollorama.animate($(this), {
			duration:300, 
			delay:200+fifth1,
			property:'width',
			start:0
		});		
		
		fifth1 = fifth1+65;
	});
	
	scrollorama.animate('#fifth .tip', {
		duration:fifthH-200,
		delay:400,
		property:'top',
		start:500,
		end:0
	});
	
	/////////////////////////////////////////////////////// #sixth /////////////////////////////////////////////
	var sixthH = $("#sixth").height();	

	scrollorama.animate('#sixth h1', {
		duration:sixthH-200, 
		delay:100,
		property:'margin-left',
		start:-500,
		end:0
	});		
	
	scrollorama.animate('#sixth h1 small', {
		duration:sixthH-150, 
		delay:100,
		property:'margin-left',
		start:-200,
		end:-3
	});	

	var sixth1 = 0;
	$(".elves-back span, .elves-front span").each(function(){
		scrollorama.animate($(this), {
			duration:200,
			delay:175+sixth1,
			property:'top',
			start:500
		});
		
		sixth1 = sixth1 + 50;
	});
	
	scrollorama.animate('#sixth .bubble', {
		duration:300,
		delay:50,
		property:'zoom',
		start:.1,
		end:1
	});
	
	scrollorama.animate('#sixth .tip', {
		duration:sixthH-200,
		delay:400,
		property:'top',
		start:500,
		end:0
	});	
	
///////////////////////////////////////////////// #seventh ////////////////////////////////////////

	var seventhH = $("#seventh").height();	

	scrollorama.animate('#seventh h2', {
		duration:seventhH-200, 
		delay:50,
		property:'zoom',
		start:.1,
		end:1
	});			
	
	scrollorama.animate('#seventh .bricks span', {
		duration:seventhH*2, 
		delay:0,
		property:'zoom',
		start:.25,
		end:2
	});		
	
	scrollorama.animate('#seventh .bricks span', {
		duration:seventhH-200, 
		delay:100,
		property:'opacity',
		start:0,
		end:1
	});	

	scrollorama.animate('#seventh .tip', {
		duration:seventhH-200,
		delay:400,
		property:'top',
		start:500,
		end:0
	});		
	
	
///////////////////////////////////////////////// #eighth ////////////////////////////////////////

	var eighthH = $("#eighth").height();		
	
	scrollorama.animate('#eighth h1', {
		duration:eighthH-200, 
		delay:50,
		property:'left',
		start:-1000,
		end:0
	});	
	
	scrollorama.animate('#eighth ul',{
		duration:400,
		delay:100,
		property:'opacity',
		start:0,
		end:1
	});	
	
	var eighth1 = 0;
	$("#eighth ul li").each(function(){
		scrollorama.animate($(this),{
			duration:300,
			delay:100+eighth1,
			property:'zoom',
			start:.1,
			end:1
		});
		
		eighth1 = eighth1+100;
	});
	
	scrollorama.animate('#eighth .tip', {
		duration:eighthH-200,
		delay:300,
		property:'top',
		start:500,
		end:0
	});		


/////////////////////////////////////// #ninth ///////////////////////////////////	
	
	var ninthH = $("#ninth").height();	

	scrollorama.animate("#ninth .legend", {
		duration:300,
		delay:0,
		property:'margin-right',
		start:-300
	});

	scrollorama.animate("#ninth .trees", {
		duration:ninthH*2,
		delay:0,
		property:'rotate',
		start:-180,
		end:180
	});
	
	$("#ninth li.group").each(function(){
		scrollorama.animate($(this), {
			duration:ninthH*2,
			delay:0,
			property:'rotate',
			start:180,
			end:-180
		});	
	});
	
	scrollorama.animate('#ninth h1', {
		duration:ninthH-200, 
		delay:150,
		property:'zoom',
		start:.1,
		end:1
	});	
	
	scrollorama.animate('#ninth h1', {
		duration:ninthH-200, 
		delay:150,
		property:'opacity',
		start:0,
		end:1
	});		
	
	
}, 500);	
	
	
	
});