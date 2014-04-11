$(function(){
	var newDiv= document.createElement('div');
	newDiv.setAttribute('class', 'drawDiv');
	$(document).mousedown(function(e){
		$('body').append(newDiv);
		var posX=e.pageX, posY=e.pageY;
		$(newDiv).css({'left':posX+'px', 'top':posY+'px'});
		$(this).mousemove(function(ev){
			//$('#label').text(e.pageX+'/'+e.pageY);			
			$(newDiv).css({'width':ev.pageX-posX+'px', 'height':ev.pageY-posY+'px'});
		});
	});	
		
	$(document).mouseup(function(){
		$(document).unbind('mousemove');	
	});
});