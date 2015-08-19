// view model script controls swapping of mid wrapper content

// these are all placeholder videos, we didn't shoot any of them
var videoGallery = [
	{
		"id" : "SnhR3jfB7Ig",
		"title" : "Staples Center"
	},
	{
		"id" : "AoAck2sPh_4",
		"title" : "Expo Line"
	},
	{
		"id" : "xGZp9grFAPM",
		"title" : "Wilshire / Figueroa"
	},
	{
		"id" : "NZTdGgeiIfI",
		"title" : "Ciclavia, Hughes / Washington"
	},
	{
		"id" : "Go-MnGtr-XU",
		"title" : "Night Test"
	},
	{
		"id" : "QYQjQvbBrHU",
		"title" : "Expo / Blue lines"
	},
];

var reelVideo = {
	"id" : "Y2GoQzXevIA",
	"title" : "DTLA Reel"
}


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
	this.img = ko.computed( function() {
		// this is the tumbnail that YouTube provides
		return "http://img.youtube.com/vi/" + data.id + "/0.jpg";
	});
	this.src = ko.computed( function() {
		// this is the embeded video source
		return "https://www.youtube.com/embed/" + data.id;
	});
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
		// stop any playing video
		var iframes = document.getElementsByTagName("iframe");
		var len = iframes.length;

		for (i=0; i< len; i++) {
			iframes[i].contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}','*');
		}

		// crossfade to new content
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
	var ytEmbedCode = "?enablejsapi=1&amp;showinfo=0&amp;theme=light&amp;html5=1";

	this.galleryVideos = ko.observableArray();
	this.faQuestions = ko.observableArray();

	videoGallery.forEach( function(item) {
		self.galleryVideos.push( new Video(item) );
	});

	FAQS.forEach( function(item) {
		self.faQuestions.push( new Faq(item) );
	});

	this.reelVideo = ko.observable( new Video(reelVideo) );

	this.currentVideo = ko.observable( this.galleryVideos()[0] );

	this.reelSource = ko.computed(function() {
		return self.reelVideo().src() + ytEmbedCode;
	});

	this.videoSource = ko.computed(function() {
		return self.currentVideo().src() + ytEmbedCode;
	});

	this.loadVideo = function() {
		self.currentVideo(this);
		$('html, body').animate({ scrollTop: 0 }, 'fast');
	};

};

ko.applyBindings(new ViewModel());

// start the page on home page content
showSection($(".home"));

