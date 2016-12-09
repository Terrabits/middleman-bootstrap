var shiftWindow = function() {
	console.log("Hash changed!");
	scrollBy(0, -50)
};
// window.addEventListener("hashchange", shiftWindow);
$(window).on('hashchange', shiftWindow);
