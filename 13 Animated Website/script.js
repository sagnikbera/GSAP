function page1animation(){
    var tl = gsap.timeline()

tl.from("nav h1, nav h4,nav button",{
    y:-30,
    opacity:0,
    delay:1,
    duration:1,
    stagger:0.15,
})

tl.from("#centerP1 h1",{
    x:-300,
    opacity:0,
    duration:0.5,
})

tl.from("#centerP1 p",{
    x:-100,
    opacity:0,
    duration:0.4,
})

tl.from("#centerP1 button",{
    opacity:0,
})

tl.from("#centerP2 img",{
    x:300,
    opacity:0,
    duration:0.5,
},"-=1") //this mean, it will run under timeline but it will start 1s before

tl.from("#sec1btm img",{
    opacity:0,
    y:30,
    stagger:0.15,
    duration:0.6,
})
}


function page2animation(){

    var tl2 = gsap.timeline({
        scrollTrigger:{
            trigger:".sec2",
            scroller:"body",
            // markers:true,
            start:"top 50%",
            end:"top -60%",
            scrub:2,
        }
    })


    tl2.from(".servics",{
        y:30,
        opacity:0,
        duration:0.5,
    })

    tl2.from(".elem.line1.left",{
        x:-300,
        opacity:0,
        duration:1,
    },"sagnik")

    tl2.from(".elem.line1.right",{
        x:300,
        opacity:0,
        duration:1,
    },"sagnik")

    //pase any name(same) to perform at one time

    tl2.from(".elem.line2.left",{
        x:-300,
        opacity:0,
        duration:1,
    },"soumik")

    tl2.from(".elem.line2.right",{
        x:300,
        opacity:0,
        duration:1,
    },"soumik")



    tl2.from(".elem.line3.left",{
        x:-300,
        opacity:0,
        duration:1,
    },"sagnik1")

    tl2.from(".elem.line3.right",{
        x:300,
        opacity:0,
        duration:1,
    },"sagnik1")

    //pase any name(same) to perform at one time

    tl2.from(".elem.line4.left",{
        x:-300,
        opacity:0,
        duration:1,
    },"soumik1")

    tl2.from(".elem.line4.right",{
        x:300,
        opacity:0,
        duration:1,
    },"soumik1")
}


page1animation();
page2animation();