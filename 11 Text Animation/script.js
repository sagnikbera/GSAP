// function breakText(){
//            var h1 = document.querySelector("h1"); 
//         /* <h1>SagnikBera</h1>  */

//         var h1Text = h1.textContent;
//         // SagnikBera

//         var splittedText = h1Text.split("");
//         // ["S", "a", "g", "n", "i", "k", "..... ==> array

//         var clutter = "";

//         splittedText.forEach(function(elem){
//             // clutter = clutter + elem;
//             clutter = clutter + `<span>${elem}</span>`;
//         });

//         h1.innerHTML = clutter;
// }

// breakText();

// gsap.from("h1 span",{
//     y:150,
//     // span is a inline Element, here y:100 is transfrom-translate lightskyblue, so it will not work 
//     // to be make it functional, we have to add inline-block proparty in span
//     opacity:0,
//     duration:1,
//     delay:0.5,


//     // stagger:0.2, 
//     //for left to right

//     stagger:-0.2, 
//     //from right to left


// })




// ===========================
// ==========================
// ==========================
// ==========================
// ==========================
// ==========================
//for half
// ===========================
// ==========================
// ==========================
// ==========================
// ==========================
// ==========================



function halfVal(){
    var h1 = document.querySelector("h1"); 
    /* <h1>SagnikBera</h1>  */

    var h1Text = h1.textContent;
    // SagnikBera

    var splittedText = h1Text.split("");
    // ["S", "a", "g", "n", "i", "k", "..... ==> array

    var halfValue = Math.floor(splittedText.length/2);

    var clutter = "";


    splittedText.forEach(function(elem,idx){
        if(idx<halfValue){
            clutter = clutter + `<span class="a">${elem}</span>`
        }else{
            clutter = clutter + `<span class="b">${elem}</span>`
        }
    });

    h1.innerHTML = clutter;

}

halfVal();

gsap.from("h1 .a",{
    y:50,
    duration:0.8,
    delay:0.5,
    opacity:0,
    stagger:0.2,
})

gsap.from("h1 .b",{
    y:50,
    duration:0.8,
    delay:0.5,
    opacity:0,
    stagger:-0.2,
})




