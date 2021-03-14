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