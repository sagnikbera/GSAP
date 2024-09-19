// var tl = gsap.timeline({paused:true});
var tl = gsap.timeline();

var menu = document.querySelector("#nav i");
var cross = document.querySelector("#full i");

tl.to("#full",{
    right:0,
    duration:0.6,
})

tl.from("#full h4",{
    x:150,
    durationl:1,
    stagger:0.3,
    // stagger is for to move one by one 

    opacity:0, //it is initial opacity
})

tl.from("#full i",{
    y:-100,
    opacity:0,
})

tl.pause(); //to pasue the timeline

menu.addEventListener("click",function(){
    tl.play();
})

cross.addEventListener("click",function(){
    tl.reverse();
})