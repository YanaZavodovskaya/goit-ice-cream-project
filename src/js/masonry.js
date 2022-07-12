$(window).load(function() {
		var $container = $("gallery__container");
$container.imagesLoaded(function() {
	$container.masonry({
		columnWidth: ".gallery__item",
		itemSelector: ".gallery__tem"
	});
});
})