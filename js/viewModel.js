// view model script controls swapping of mid wrapper content


$(".nav-home").click(function() {
	showSection($(".home"));
});

$(".nav-work").click(function() {
	showSection($(".work"));
});

$(".nav-about").click(function() {
	showSection($(".about"));
});

$(".nav-faq").click(function() {
	showSection($(".faq"));
});

$(".nav-contact").click(function() {
	showSection($(".contact"));
});

$(".nav-blog").click(function() {
	showSection($(".blog"));
});

var showSection = function(element) {
	$(".content").toggleClass("hidden", true);
	element.toggleClass("hidden", false);
};

Content = function(data) {
	// stores the inner html for the different mid content containers
	var self = this;

}


ViewModel = function() {
	var self = this;
};

ko.applyBindings(new ViewModel());

// start the page on home page content
showSection($(".home"));
