// Banner animations

function toggleMainContentScroll () {
    var mainContent = $('.main-content');
    if (mainContent[0].style.position === 'fixed') {
        mainContent[0].style.position = 'absolute';
    } else {
        mainContent[0].style.position = 'fixed';
    }
}

$(function () {
    
    var mainContent = $('.main-content');
    var mainContentScrollable = false;
    var currentScrollPosition = 0;
    
    var showCSS = {
        top: '40%',
        visibility: 'visible',
        scale: '1'
    };

    var hideCSS = {
        top: '120%',
        visibility: 'hidden',
        scale: '0.5'
    };

    var hiddenCSS = {
        top: '-120%',
        scale: '0.5'
    };
    
    if(!mainContentScrollable) {
        mainContent[0].style.position = 'fixed';
    }
    
    var mouseDirection = '';
    $(window).on('mousewheel', function(event) {
        if (event.originalEvent.wheelDelta >= 0) {
            mouseDirection = 'up';
        }
        else {
            mouseDirection = 'down';
        }
    });
    
    $('.header__main-menu a').on('click', function () {
        mainContent[0].style.position = 'absolute';
        mainContentScrollable = true;
    });
    
//    $(window).on('scroll', function () {
//        if(window.scrollY < 10) {
//            console.log('reset animation');
//            TweenLite.to('.banner__questions.one, .banner__questions.two, .banner__questions.three', 0, hiddenCSS);
//        }
//    });
    
    activeQuestion = 0;
    $(window).on("scrollstop", function(e) {
        
        if (mainContentScrollable) return;
        
        switch (activeQuestion) {
            case 0:
                console.log('case: 0', activeQuestion)
                if (mouseDirection === 'down') {
                    TweenLite.to('.banner__questions.one', 0.5, showCSS);
                    TweenLite.to('.banner__event-credits__block', 0.5, { opacity: 0 });
                    activeQuestion++;
                } else {
                    TweenLite.to('.banner__questions.one', 0.5, hideCSS);
                    mainContent[0].style.position = 'fixed';
                    mainContentScrollable = false;
                }        
                break;
            
            case 1:
                console.log('case: 1', activeQuestion)
                if (mouseDirection === 'down') {
                    TweenLite.to('.banner__questions.two', 0.5, showCSS);
                    TweenLite.to('.banner__questions.one', 0.5, hiddenCSS);
                    activeQuestion++;
                } else {
                    TweenLite.to('.banner__questions.two', 0.5, hideCSS);
                    activeQuestion--;
                }        
                break;
            
            case 2:
                console.log('case: 2', activeQuestion)
                if (mouseDirection === 'down') {
                    TweenLite.to('.banner__questions.three', 0.5, showCSS);
                    TweenLite.to('.banner__questions.two', 0.5, hiddenCSS);
                    activeQuestion++;
                } else {
//                    TweenLite.to('.banner__questions.three', 0.5, hideCSS);
//                    activeQuestion--;
                }        
                break;
            
            case 3:
                mainContent[0].style.position = 'absolute';
                mainContentScrollable = true;
                break;
        }
        
        
    });
    
    
});