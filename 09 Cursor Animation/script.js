var main = document.querySelector("#main");
var cursor = document.querySelector("#cursor");
var img = document.querySelector("#img");

main.addEventListener("mousemove", function(val){
    gsap.to(cursor,{
        x:val.x,
        y:val.y,
        duration: 1,
        ease:"black.out(1.7)",
        // https://gsap.com/docs/v3/Eases/
    })
});



img.addEventListener("mouseenter" , function(){
    cursor.innerHTML = "More";
    gsap.to(cursor,{
        scale:4,
        backgroundColor:"#ffffff5c"
    })
});
img.addEventListener("mouseleave" , function(){
    cursor.innerHTML = "";
    gsap.to(cursor,{
        scale:1,
        backgroundColor:"white"
    })
});