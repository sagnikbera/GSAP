gsap.to("#page2 img",{
    width:"100%",
    scrollTrigger:{
        trigger:"#page2", //pin--> parent
        scroller: "body",
        markers:true,
        scrub:2, //or true
        start: "top 0",
        end:"top -100%",
        pin:true, //it will stop at page 2 and animation will goes on
    }
})