/*

	Double A - a development tool for resposive web design
	by Annette Arabasz (annettea@gmail.com) & Nick Snyder (nick@fasterhorses.co)
	
	
	 --- USAGE -------------------- 
	
	$(document).ready(function() {
		$(this).doublea({
			format: 'em',
			breakpoints: [30, 40, 50, 60, 75],
			colors: ['#ffb346', '#dfdd4a', '#44ce19', '#7bb8f7', '#c17bf7']
		});
	});
	
	 --- MIT LICENSE -------------------- 
	
	Copyright (c) 2013 Annette Arabasz & Nick Snyder

	Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
	
	The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
	
	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
	

*/

(function($) {
	
	$.fn.doublea = function(options) {
	
		var defaults = {
			format: 'em',
			breakpoints: [30, 40, 50, 60, 75],
			colors: ['#ffb346', '#dfdd4a', '#44ce19', '#7bb8f7', '#c17bf7']
		},
		
		options = $.extend({}, defaults, options),
		breakpoints = {},
		windowSize = $(window).width();
		
		
		if (options.format === 'em') {		
			for (var i = 0; i < options.breakpoints.length; i++) {
				var key = i;
				breakpoints[key] = {
					point: emToPx(options.breakpoints[i]),
					color: options.colors[i]
				}
			}			
		} else if (options.format === 'px') {			
			for (var i = 0; i < options.breakpoints.length; i++) {
				var key = i;
				breakpoints[key] = {
					point: options.breakpoints[i],
					color: options.colors[i]
				}
			}
		}
		
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
	    
		    if (windowMeasure < breakpoints[0]['point'])   { 
			    $('#doubleA').css('background', '#de5968'); 
			    $('#doubleA span').append('<span>&lt; 30em</span>');	    
		    }
		    
		    $('#doubleA span span').html('');
		    
		    for (var i = 0; i < options.breakpoints.length; i++) {
			    if (windowMeasure >= breakpoints[i]['point'])  { 
			    	$('#doubleA').css('background', breakpoints[i]['color']);
			    }
		    }
		    
		});
		
		function emToPx(num) {
			return num * 16;
		}
	}
	
})(jQuery);