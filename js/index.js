$(function(){

	$("#calculate").click(getFahrenheit);

		function getFahrenheit(){
		var celsius, result;
		$('#resultFahrenheit').empty('<span>' + result + '</span>');


		// get Celsius from page, convert and store in variable
		celsius = parseInt($("#getCelsius").val());
		
		// alert("celsius is " + celsius); 
		result = calculateFahrenheit(celsius);
		$("#resultFahrenheit").html(result + '&#176;F');

		if(celsius <= 0){
			$('body').attr('class' , 'iceAge1');
			$('.dialCold').css('backgroundColor' , '#0c30e1');
			$('.dialWarm').css('backgroundColor' , '#FFFFE0');
			$('.dialHot').css('backgroundColor' , '#FFFFE0');
		}
		else if ((celsius > 0) && (celsius < 15)){
			$('body').attr('class' , 'iceAge2');
			$('.dialCold').css('backgroundColor' , '#0c30e1');
			$('.dialWarm').css('backgroundColor' , '#e58d05');
			$('.dialHot').css('backgroundColor' , '#FFFFE0');
		}
		else{
			$('body').attr('class' , 'iceAge3');
			$('.dialCold').css('backgroundColor' , '#0c30e1');
			$('.dialWarm').css('backgroundColor' , '#e58d05');
			$('.dialHot').css('backgroundColor' , '#d02202');
		}
	}

	function calculateFahrenheit(celsius){
		return ((celsius * 1.8 + 32)); 
	}

});