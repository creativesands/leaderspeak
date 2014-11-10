// banner animations

$(function () {
    
    var duration = 0.5;
    var wait = 4;
    var tween;
    
    setTimeout(function animate () {
        tween = new TimelineMax();
        tween.repeat(-1);
        
        tween.to('.banner__questions.one', duration, { x: '0'});
        tween.to('.banner__questions.one', wait, { x: '0'});
        tween.to('.banner__questions.one', duration, { x: '100%'});
        
        tween.to('.banner__questions.two', duration, { x: '0'});
        tween.to('.banner__questions.two', wait, { x: '0'});
        tween.to('.banner__questions.two', duration, { x: '100%'});
        
        tween.to('.banner__questions.three', duration, { x: '0'});
        tween.to('.banner__questions.three', wait, { x: '0'});
        tween.to('.banner__questions.three', duration, { x: '100%'});
        
    }, 1000);
    
});