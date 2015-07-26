// view model script controls swapping of mid wrapper content

var videoGallery = [
	{
		"img" : "http://placehold.it/195x112",
		"src" : "https://www.youtube.com/embed/NdZ02-Qenso",
		"title" : "Fighter Jet"
	},
	{
		"img" : "http://placehold.it/195x112",
		"src" : "https://www.youtube.com/embed/edcJ_JNeyhg",
		"title" : "Waiting for Love"
	},
	{
		"img" : "http://placehold.it/195x112",
		"src" : "https://www.youtube.com/embed/_-kviywORqA",
		"title" : "Cliff Jump"
	},
	{
		"img" : "http://placehold.it/195x112",
		"src" : "https://www.youtube.com/embed/Xnd8ERrynEo",
		"title" : "Lambo Ride"
	},
	{
		"img" : "http://placehold.it/195x112",
		"src" : "https://www.youtube.com/embed/t99N223fqCo",
		"title" : "Wingsuit"
	},
	{
		"img" : "http://placehold.it/195x112",
		"src" : "https://www.youtube.com/embed/2OzlksZBTiA",
		"title" : "Scuba"
	},
];


var Video = function(data) {
	this.img = ko.observable(data.img);
	this.src = ko.observable(data.src);
	this.title = ko.observable(data.title);
};


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

$(".faq-question").click(function() {
	//console.log($(this).children());
	$(this).children(".faq-answer").toggleClass("hidden");
});


ViewModel = function() {
	var self = this;
	this.galleryVideos = ko.observableArray();

	videoGallery.forEach( function(item) {
		self.galleryVideos.push( new Video(item) );
	});

	this.currentVideo = ko.observable( this.galleryVideos()[0] );

	this.videoSource = ko.computed(function() {
		return self.currentVideo().src()+"?autoplay=0&amp;controls=1&amp;rel=0&amp;showinfo=0&amp;fs=1&amp;theme=light&amp;wmode=opaque&amp;html5=1"
	});

	this.loadVideo = function() {
		self.currentVideo(this)
	};
};


ko.applyBindings(new ViewModel());

// start the page on home page content
showSection($(".work"));
