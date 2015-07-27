// view model script controls swapping of mid wrapper content

// these are all placeholder videos, we didn't shoot any of them
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
		"src" : "https://www.youtube.com/embed/LD4XfM2TZ2k",
		"title" : "Le Mans"
	},
];


var faqSections = [],
	key,
	sectionTitle,
	questionsArray,
	question,
	answer;

FAQS.forEach( function(obj) {
	//console.log(obj);
	for (key in obj) {
		sectionTitle = key; // section title

		// append the question section
		$('.faq').append('<div class="section-title">'+key+'</div>');

		questionsArray = obj[key]; // array of questions
		questionsArray.forEach( function(q) {
			// append the q + a to the dom
			$('.faq').append('<div class="faq-question">'+q.q+'</div>');
			$('.faq-question:last').append('<div class="faq-answer">'+q.a+'</div>')
		})
	}

});



var Video = function(data) {
	this.img = ko.observable(data.img);
	this.src = ko.observable(data.src);
	this.title = ko.observable(data.title);
};

var Faq = function(data) {
	this.question = ko.observable(data.q);
	this.answer = ko.observable(data.a);
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

// set the default displayed content
var currentContent = $(".home");

// fades between content
var showSection = function(element) {
	if (element.selector != currentContent.selector) {
		currentContent.fadeOut(400, function() {
			element.fadeIn(400);
			currentContent = element;
		});
	}

};

// unhide/hide all the FAQ answers
$(".faq-question").click(function() {
	$(this).children(".faq-answer").slideToggle(200);
});

// used for loading videos into a single view
ViewModel = function() {
	var self = this;
	this.galleryVideos = ko.observableArray();
	this.faQuestions = ko.observableArray();

	videoGallery.forEach( function(item) {
		self.galleryVideos.push( new Video(item) );
	});

	FAQS.forEach( function(item) {
		self.faQuestions.push( new Faq(item) );
	});

	this.currentVideo = ko.observable( this.galleryVideos()[0] );

	this.videoSource = ko.computed(function() {
		return self.currentVideo().src()+"?autoplay=0&amp;controls=1&amp;rel=0&amp;showinfo=0&amp;fs=1&amp;theme=light&amp;wmode=opaque&amp;html5=1"
	});

	this.loadVideo = function() {
		self.currentVideo(this);
		$('html, body').animate({ scrollTop: 0 }, 'fast');
	};
};

ko.applyBindings(new ViewModel());

// start the page on home page content
showSection($(".home"));
