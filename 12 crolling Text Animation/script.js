// window.addEventListener("wheel", function(){
//     console.log("Hey");   
// })


window.addEventListener("wheel", function(val){
    // console.log(val);   
    // console.log(val.deltaY);
    
    if(val.deltaY > 0){
        //up scroll
        gsap.to(".marque",{
            transform:'translateX(-200%)',
            duration:3,
            repeat:-1,
            ease:"none",
        })

        gsap.to(".marque img",{
            rotate:180,
        })

    }else{
        //down scroll
        gsap.to(".marque",{
            transform:'translateX(0%)',
            duration:3,
            repeat:-1,
            ease:"none",
        })

        gsap.to(".marque img",{
            rotate:0,
        })
    }
})