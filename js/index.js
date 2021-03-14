var $=function(id){
	return document.getElementById(id);
}
window.onload = function(){
	$("menu").onclick=function(){
		var menu= document.getElementsByTagName("nav")[0].children[0];
		console.log(menu);
		menu.style.display=(menu.style.display=="none")? "block" : "none";
	}
}
function scrollToTop (duration) {
    // cancel if already on top
    if (document.scrollingElement.scrollTop === 0) return;

    const totalScrollDistance = document.scrollingElement.scrollTop;
    let scrollY = totalScrollDistance, oldTimestamp = null;

    function step (newTimestamp) {
        if (oldTimestamp !== null) {
            // if duration is 0 scrollY will be -Infinity
            scrollY -= totalScrollDistance * (newTimestamp - oldTimestamp) / duration;
            if (scrollY <= 0) return document.scrollingElement.scrollTop = 0;
            document.scrollingElement.scrollTop = scrollY;
        }
        oldTimestamp = newTimestamp;
        window.requestAnimationFrame(step);
    }
    window.requestAnimationFrame(step);
}