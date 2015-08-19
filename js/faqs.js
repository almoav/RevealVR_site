// its cleaner to store the FAQ questions and answers here
// and populate the DOM on page load

var FAQS = [
	{"Company":[
		{"q":"What is Reveal VR?","a":"Reveal VR is a virtual reality video production agency specializing in 360 degree virtual tours for real estate, hospitality, venues and special events.  We are located in Los Angeles."},
		{"q":"Who are we?","a":"Founded by two veteran visual effects technical directors from industry-leading studios, we bring our experience creating professional quality content to the exciting new world of virtual reality and immersive video."},
		{"q":"What do you do?","a":"We shoot 360 degree video and host it on the web for commercial clients."},
		{"q":"Can I arrange a meeting with you?","a":"Yes! Contact us by phone or email and we can arrange to visit your location, provide a phone consultation or chat via google hangouts."},
		{"q":"Do you have an office?","a":"No. We do our post production work in Culver City, but typically we are on-site at shooting locations."},
	]},
	{"360 Video":[
		{"q":"What is a 360 video?","a":"It’s an online video that captures every angle of a scene and allows the viewer complete control of what they look at."},
		{"q":"Is it different from a panoramic picture or video?","a":"It’s a similar idea but allows the user to experience a full 360 degree view within the scene."},
		{"q":"What is VR?","a":"VR stands for virtual reality.  It’s a medium that aims to give the viewer an immersive experience in an environment that is either non-existent or out of reach."},
		{"q":"What is the difference between 360 video and VR?","a":"VR is an all-encompassing term that can include games, simulations, and online virtual worlds.  360 videos are a subset of VR that are shot on video but still capable of putting viewers into a new place."},
		{"q":"Is it in 3d?","a":"Currently it is not in 3D. Once YouTube has 3D support we will offer 3D video as well."},
		{"q":"Why should I use a virtual reality service?","a":"It gives the user a more complete view of the subject and offers them the unique experience of feeling that they are actually experiencing your environment in real life."},
		{"q":"Are 360 videos just a gimmick?","a":"YouTube now fully supports 360 video and with Facebook’s investment of more than 2 billion dollars in virtual reality, we believe VR is here to stay."},
		{"q":"I've heard that VR can make you sick, is that true?","a":"This can happen when you are viewing VR within a headset.  If care isn’t taken to produce a quality product, virtual reality can cause a nausea similar to motion sickness.  The work we do is unlikely to cause motion sickness because our camera is typically static and our high end camera rigs allow for steady filming."},
		{"q":"I've heard that not everyone can view VR. Who might have trouble?","a":"People who have trouble watching 3D films may also experience difficulty viewing 3D VR, but should be able to view 360 videos as they would any online video."},
	]},
	{"Payment":[
		{"q":"How much do you charge?","a":"Shoots typically cost between $400 and $600, depending on the number of shoot locations and footage length. Please contact us directly for a quote."},
		{"q":"What forms of payment do you accept?","a":"We accept paypal, credit card paid online or in person or checks."},
		{"q":"Do I have to pay a deposit?","a":"For anything under $2000 no.  We collect upon final delivery of of product."},
	]},
	{"Technical Questions":[
		{"q":"Can the videos be viewed without a virtual reality headset?","a":"Absolutely. 360 video works great on a web browser or mobile device.  No VR headset required."},
		{"q":"I'm trying to view the video on the web but it's not working. Do I need special software?","a":"On Android you need the YouTube App. Currently mobile iOS doesn’t support 360 video. You also need a current supported browser. Many of these issues are early adoption issues that we expect to be ironed out before the end of 2015."},
		{"q":"Will the videos work with my VR headset?","a":"The videos can be viewed within a VR headset through YouTube."},
		{"q":"What kind of equipment do you use?","a":"We use a 6-camera GoPro rig setup and special post-processing software."},
	]},
	{"Production":[
		{"q":"What is a basic overview of the whole process?","a":"Contact us to discuss a general idea of the project and we'll setup a time for the shoot.  We arrive at the location at the agreed upon time, look at all of the locations you want to shoot at and give you our suggestions and feedback.  At each location we set up the camera rig, turn it on and then move to a location that isn't visible by the camera.  Either the location is filmed as is or someone from your organization is standing in the room showcasing the desired information you want to convey.  We will probably do another version within the same location to make sure we get quality footage.  Once all locations are filmed we return to our office and process the footage.  When completed we host the video on YouTube and send you and embed code for your website."},
		{"q":"Will production disrupt my business?","a":"We are happy to work with you regarding filming times to reduce any unwanted disruption.  However, some clients prefer to film their space during their usual operating hours to create a more authentic representation of their business. No special staging is required for the shoot, which keeps disruption to a minimum."},
		{"q":"How many people does it take to film?","a":"Most shoots can be completed with one vidographer."},
		{"q":"How long will it take to shoot my video?","a":"Most shoots take 1 to 2 hours to film. This typically covers 3 to 5 locations and three minutes of delivered video."},
	]},
	{"Finished Product":[
		{"q":"What does delivered video mean?","a":"Extra video is shot for setup and editing and multiple takes may be done to get the right footage.  After the shoot the footage is edited and only a selected piece of video is used.  When we give you the final video that video length is what we call the delivered video."},
		{"q":"How long will it take to recieve my video?","a":"Typically we can deliver final video within a week from the shoot date."},
		{"q":"What kind of editing do you do?","a":"We typically do soft transitions which work better than hard cuts in VR.  Frequent cuts or extensive editing can detract from the strength of 360 video."},
		{"q":"Will the video have sound?","a":"The video can have sound if you choose. On-site sound will capture the natural atmosphere of your space, or music can be overlaid instead."},
		{"q":"Where will my video be hosted?","a":"Currently we host 360 videos on YouTube."},
		{"q":"Do I own the rights to my video?","a":"Yes, you own the full rights to your video."},
		{"q":"Can I embed the video on my own website?","a":"Yes, YouTube makes this very easy. <link>"},
		{"q":"How is my video delivered?","a":"We host it on YouTube and if requested we will deliver a video file."},
	]},
];
