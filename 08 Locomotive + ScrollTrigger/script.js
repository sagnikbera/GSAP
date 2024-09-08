const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
}); //from locomotive github 
// https://github.com/locomotivemtl/locomotive-scroll

gsap.from("#page1 #box",{
    scale:0,
    duration: 1,
    delay:1,
    opacity:0,
    rotate:360,
 })

 gsap.from("#page2 #box",{
    scale:0,
    duration: 1,
    opacity:0,
    rotate:360,
    scrollTrigger: {
        trigger:"#page2 #box",
        scroller:"body",
        start:"top 50%",
        markers:true,
    }
 })
