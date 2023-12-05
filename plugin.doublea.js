/*
==================================================
    Double A
==================================================
*/

(function($) {
	$.fn.doublea = function() {	
		var windowSize = $(window).width();		
		$('body').prepend("<div id='doubleA'>Width: <span>" + windowSize + "px</span></div>");
		$('#doubleA').css({
			'background': '#de5968',
			'-webkit-border-radius': '8px 8px 0 0',
			'-moz-border-radius': '8px 8px 0 0',
			'border-radius': '8px 8px 0 0',		
			'bottom': '0',
			'color': 'white',
			'font-family': '"georgia", sans-serif',
			'font-size': '.8em',
			'left': '20px',
			'line-height': '1.5em',
			'padding': '5px 15px',
			'position': 'fixed',
			'text-align': 'center',
			'z-index': '9999'
		});		
		$(window).resize(function() {
		    var windowMeasure = $(window).width();
		    $('#doubleA span').text(windowMeasure + 'px');
		    if (windowMeasure < 480)   { $('#doubleA').css('background', '#de5968'); }
		    if (windowMeasure >= 480)  { $('#doubleA').css('background', '#ffb346'); }
		    if (windowMeasure >= 640)  { $('#doubleA').css('background', '#dfdd4a'); }
		    if (windowMeasure >= 800)  { $('#doubleA').css('background', '#44ce19'); }
		    if (windowMeasure >= 960)  { $('#doubleA').css('background', '#7bb8f7'); }
		    if (windowMeasure >= 1200) { $('#doubleA').css('background', '#c17bf7'); }
		});
	}	
})(jQuery);