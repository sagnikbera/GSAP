gsap.from("#page1 #circle",{
    scale:0,
    delay:1,
    duration:2,
    rotate:720,
})

gsap.from("#page2 #circle",{
    scale:0,
    delay:1,
    duration:2,
    rotate:720,
    // scrollTrigger:"#page2 #circle"
    scrollTrigger: {
        trigger:"#page2 #circle",
        scroller:"body",
        markers:true,
        start:"top 80%", //it will start when the page position is 60% from top
        end:"top 30%",
        scrub:true, //it will react or back-scrolling
    }
})

gsap.from("#page3 #circle",{
    scale:0,
    delay:1,
    duration:2,
    rotate:720,
})