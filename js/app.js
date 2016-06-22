$(document).ready(function() {
	$('.ryu').mouseenter(function() {
		changePose('ready');
	})
	.mouseleave(function() {
    $('.ryu div').hide();
	$('.ryu-still').show();
	})
  	.mousedown(function() {
  		playHadouken();
  		changePose('throwing');
  		$('.hadouken').finish().show().animate(
  			{'left': '1020px'},
  			500,
  			function() {
    		$(this).hide();
    		$(this).css('left', '520px');
  			});
  	})
  	.mouseup(function() {
  		//ryu goes back to his ready position	
  		changePose('ready');
  	});
  	$(window).keydown(function (e) {
  		if (e.keyCode == 88) {
  			changePose('cool');
		}
		console.log('keydown')
	})
	.keyup(function (e) {
        if (e.keyCode == 88) {
         changePose('still');
       	}	
  	});
});

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}
function changePose (poseName) {
	$('.ryu div').hide();
	$('.ryu-' + poseName).show();
}
