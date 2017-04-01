/** Site Description **/
var logoUrl = "images/logo.png";
var siteTitle = "ALiAS";
var siteAbout = "Amity Linux Assistance Sapience";
var siteMotto = "";

/** Intro Section **/
var siteAboutHistory = "<p>Started back in 2010; With main aim to foster the growth of use of Linux for the developers in the campus and to promote the culture of hacking and sharing.<\p>ALiAS is now a platform for upcoming developers for finding exposure by meeting the people working in related industries, learning various languages and becoming a better developer";
var joinNowBtnLink = "https://goo.gl/forms/mZAhlJMxqCwZVbRK2";


var currentDate = new Date();

/** Containers **/

/** FlashBox **/
var showFlashBox = 0;
var flashBoxContent = '<a href="https://www.facebook.com/events/1873570922897377/" target="_blank"><img src="images/flashbox/poster02032017.jpg"></a>';
var flashBoxEndDate = new Date(2018,05,04); //It will end at 04/06/02017 00:00 P.S. Month starts from 0

/** Alumni Section **/
var alumniDescription = "Alumni who were a part of ALiAS are now placed in various companies or some of them are still consulting other(s) in the open source domain.";

/**Rankers List**/
var rankers = {name1:"Sample", ppicUrl1: "images/alumni/1.jpg",rank1:"0000", name2:"Sample", ppicUrl2: "images/alumni/1.jpg",rank2:"0000", name3:"Sample", ppicUrl3: "images/alumni/1.jpg",rank3:"0000"};

/** Array Definitions**/
var services = [];
var events = [];
var webinars = [];
var openSource = [];
var eventsP = [];
var team = [];
var footerContactLinks = [];
/** Services List **/

services[0] = "Stand out of crowd and learn unique skills from people already working in the industry!";
services[1] = "Find like minded Delhi/NCR Tech Communities.";
services[2] = "Find mentors for GSoC";
services[3] = "Learn Linux, Android, Networking, etc. There is no limit on how much and what you can learn!";
services[4] = "Chance to find Interships under our Alumni.";
services[5] = "ALiAS welcomes each and every student of amity irrespective of their department.";
services[6] = "Already know something? Teach it to others! That's how we work!";
/** End Services **/

/** Events List
	title: Event Title
	cta: Link url for Call to Action Button
	ctaText: Call to Action Button Text
	cta2enable: 0 | 1 to enable/disable secondary CTA button 
	cta2: Second Link url for Call to Action Button
	cta2Text: Call to Action Button Text
	description: Event Description. Can Contain HTML Tags
	date: Event Date
	startTime: Event Start Time
	endTime: Event End Time
	location: Event Location
	eventOD: 0 for NO, 1 for YES. The text and respective classes are automatically added by the script
	events[0] = {title: "", cta: "", ctaText: "",cta2: "", cta2Text: "", description: "", date: "", startTime: "", endTime: "", location: "", eventOD: 0};
	
**/
/** Do not remove event[0], just comment it and add another event[0]. 
 * This one will be used when no event is available
 */
events[0] = {title:"No Upcoming Event",cta:"https://docs.google.com/forms/d/e/1FAIpQLScpSM7nisQQKlBB5oYdkeo2cMV6I0b__F_KowLgbUJePyyLZg/viewform?usp=sf_link",ctaText:"Host an Event!",date:"N/A",startTime:"N/A", endTime:"N/A",location:"Amity University",eventOD:1, description:'<strong>Want to give a talk or coduct a workshop?</strong> <br> Just click on the link below and fill up the form :) to conduct a workshop or a webinar under ALiAS and spread the knowledge! <br><strong><em>Let Knowledge be open source!</em></strong>', cta2enable:0};
/** End Events List **/
/** Webinars List  
	title: Title of webinar
	videoId: https://youtube.com/watch?v=video_id
	description: Description of webinar
**/

webinars[0] = {title: "Webinar: Introduction to Linux", videoId: "CTO-8BnzS_s", description: "This webinar would be about basics of Linux and its terminologies. We'll be covering basics of command lines/principles/every 'Must Know' things about Linux.<br/><strong>Speakers:</strong> <br/><strong>Anuvrat Parashar:<strong> <a href = \"http://anuvrat.in/\">http://anuvrat.in/</a> "};
webinars[1] = {title: "Webinar: Introduction to Command Line Interface", videoId:"gmi_YM_N2L4", description: "This webinar would be about basics of using Command Line Interface in Linux. We'll be covering basics of command lines/ principles/ every 'Must Know' things about Linux. <br/><strong>Speakers:</strong> <br/><strong>Rohit Goyal:<strong> <a href = \"https://about.me/rohitgoyal18\">about.me/rohit</a> "};
webinars[2]= {title: "Webinar: Open Source Softwares", videoId: "JcYABQrAkaU", description: "Learn the basics of Open Source and Open Source Software in this live interactive session.<br/><strong>Speakers:</strong> <br/><strong>Amit Kumar:<strong> <a href = \"http://iamit.in\">http://iamit.in</a> <br/><stong>Sanyam Khurana:</strong> <a href=\"http://www.sanyamkhurana.com\">sanyamkhurana.com</a>"};
webinars[3] = {title:"'Wordpress 101' by Samriddha Prajapati", videoId: "fjxUa7HX0NY", description:"Learn WordPress in this interactive webinar by <strong>Samriddha Prajapati</strong>. <br/><em>Hi, I’m Samriddha Prajapati and I specialize in Computer Software. I’m passionate about what I do, and I love to help people. Nothing is more fulfilling than being part of a team with similar interests, and an organization that values its employees.</em>"};

/** Open Source Communities List
  
 */
openSource[0] = {url:"https://pydelhi.org", logo:"images/logos/pydelhi.png", title:"PyDelhi"};
openSource[1] = {url:"https://ilugd.github.io/", logo:"images/logos/ilugd.png", title:"Indian Linux Users Group Delhi"};
openSource[2] = {url:"http://linuxchixindia.github.io", logo:"images/logos/linuxchix.png", title:"LinuxChix India"};
openSource[3] = {url:"http://mozpacers.org/", logo:"images/logos/mozpacers.png", title:"Mozilla Delhi"};
openSource[4] = {url:"https://www.facebook.com/groups/0p3nS0urc3M33tups/", logo:"images/logos/opensource.png", title:"Open Source Community"};
openSource[5] = {url:"https://in.pycon.org", logo:"images/logos/pycon.png", title:"PyCon India"};

/*	Participate & Learn
*/

eventsP[0] = {url:"https://summerofcode.withgoogle.com/", logo:"images/logos/gsoc.png", title:"Google Summer of Code"};
eventsP[1] = {url:"https://ilugd.github.io/", logo:"images/logos/outreachy.png", title:"Outreachy"};
eventsP[2] = {url:"https://in.pycon.org", logo:"images/logos/pycon.png", title:"PyCon India"};

/** Team List 
	team[0] = {name:"Test Name 1", designation: "Events Head", ppicUrl: "images/alumni/1.jpg"};
	name: Full Name
	designation: FIll your github username
	ppicUrl: Realtive url to images/team/name.jpg
**/
team[0] = {name:"Shivam Rajput", designation: "#", ppicUrl: "images/team/shivam.jpg"};
team[1] = {name:"Ashish Dahiya", designation: "#", ppicUrl: "images/team/ashish.jpg"};
team[2] = {name:"Tanya Jain", designation: "Tanya-Jain", ppicUrl: "images/team/tanya.jpg"};
team[3] = {name:"Ayush Agarwal", designation: "thisisayush", ppicUrl: "images/team/ayush.jpg"};
team[4] = {name:"Parth Sharma", designation: "parthsharma2", ppicUrl: "images/team/parth.jpg"};
team[5] = {name:"Animesh Verma", designation: "AnimeshVerma17", ppicUrl: "images/team/animesh.jpg"};
team[6] = {name:"Omkar Yadav", designation: "omkar108", ppicUrl: "images/team/omkar.jpg"};
/** End Team List **/

/** Footer Contact Links 
 * icon: <icon name from font-awesome without affixing "fa-">
 * url: url to redirect on click
 * hoverColor: any color from hover-* classes (don't add "hover-")
*/
footerContactLinks[0] = {icon:"github",url:"https://github.com/asetalias",hoverColor:"grey"};
footerContactLinks[1] = {icon:"youtube", url:"https://www.youtube.com/channel/UCKkyqEMLFW3jz-q3nJIFL3g", hoverColor:"red"};
footerContactLinks[2] = {icon:"facebook", url:"https://www.facebook.com/asetalias/", hoverColor:"blue"};
footerContactLinks[3] = {icon:"envelope",url:"mailto:asetalias1@gmail.com",hoverColor:"green"};
footerContactLinks[4] = {icon:"google-plus-square",url:"https://groups.google.com/forum/#!forum/amity-linux-group",hoverColor:"yellow"};
/** Containers **/
var coverLogoContainer = $(".coverLogo");
var navbarLogoContainer = $("#navbarLogo");
var siteMottoContainer = $(".motto");
var siteAboutContainer = $(".siteAboutContainer");
var siteAboutHistoryContainer = $(".siteAboutHistory .description");
var joinNowBtnLinkContainer = $(".joinNowBtnLink");
var siteServicesListContainer = $(".servicesList");
var eventsListContainer = $("#eventsListContainer");
var webinarsListContainer = $("#webinarsListContainer");
var alumniDescriptionContainer = $(".alumniDescription p");
var openSourceContainer = $("#openSourceListContainer");
var eventsPListContainer = $("#eventsParticipateListContainer");	
var teamListContainer = $(".teamList");
var footerContactLinksContainer = $("#contactLinksContainer-1, #contactLinksContainer-2");
/**Flashbox Containers */
var flashBox = $(".flashbox");
var flashBoxContentContainer = $(".flashBox-content");
var flashBoxCloseBtn = $(".flashbox .closeBtn");
/** End Containers **/