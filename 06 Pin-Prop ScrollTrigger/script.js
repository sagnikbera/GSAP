gsap.to("#page2 h1",{
    transform: "translateX(-210%)",
    scrollTrigger:{
        // trigger:"#page2",
        trigger:"#page2 h1",

//both trigger have diff animation

        scroller:"body",
        scrub:2,
        markers: true,
        start: "top 0",
        end : "top -100%" ,
        pin: true,
    }
})