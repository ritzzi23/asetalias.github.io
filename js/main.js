$(document).ready(function(e){
    /** Load Data **/
    document.title = siteTitle;			//Update Site Title
    coverLogoContainer.attr("src",logoUrl);	//Update Logo on Cover page
    siteMottoContainer.html(siteMotto); //Update Site Motto
    siteAboutContainer.html(siteAbout);	//Update Site About
    siteAboutHistoryContainer.html(siteAboutHistory);   //Update Site About: History
    joinNowBtnLinkContainer.attr("href",joinNowBtnLink);    //Update link to regsitration page
    alumniDescriptionContainer.html(alumniDescription);    //Load alumni description
    loadServices();
	checkFlashBox();
    /** Generate Boxes */
    generateAllBoxes();
    generateContactLinks();
    //setTheme("blue","deep-orange");
    $(".preloader").delay(1000).fadeOut(2000);  //hide preloader
    responsive();
    $(".single-item").slick({
        dots: false,
        autoplay:true,
        arrows: true,
        infinite: true 
    });
    $("#webinarsListContainer, #eventsListContainer").slick({
        dots: true,
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    $(".teamList").slick({
        dots: true,
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        mobileFirst: true,
        autoplay: true,
        autoplaySpeed:1000,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});