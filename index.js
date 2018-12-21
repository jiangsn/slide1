var wrapper = document.querySelector(".wrapper");

var buttons = document.querySelectorAll(".clickable button");


let current = 0;

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", () => { return goToSlide(i) })
}


// 自动播放
var autoPlay =Play()
function Play(){
    return setInterval(() => {
        goToSlide(current+1);
    }, 1000);
}




function goToSlide(i) {
    if (i > buttons.length - 1) {
        i = 0;
    } else if(i < 0){
        i = buttons.length - 1;
    }
    if (current === buttons.length - 1 && i === 0) {
        console.log("从第五张到第一张")
        wrapper.style.transform = "translate(-2400px)";
        wrapper.addEventListener('transitionend', () => {
            $(wrapper).hide()
            $(wrapper).offset()
            wrapper.style.transform = "translate(-400px)";
            $(wrapper).show()
        }, { once: true })
    } else if (current === 0 && i === buttons.length - 1) {
        wrapper.style.transform = "translate(0px)";
        wrapper.addEventListener('transitionend', () => {
            $(wrapper).hide()
            $(wrapper).offset()
            wrapper.style.transform = "translate(-2000px)";
            $(wrapper).show()
        }, { once: true })
    } else {
        $(wrapper).css({
            "transform": "translate(" + (i + 1) * -400 + "px)",
        });
    }
    current = i;
}

$(".swiper-button-prev").on("click", function () {
    goToSlide(current - 1);
})

$(".swiper-button-next").on("click", function () {
    goToSlide(current + 1);
})

makefakeElement();
// c初始化
function makefakeElement() {
    var imgs = document.querySelectorAll(".wrapper img");
    var fistImgCopy = imgs[0].cloneNode(true);
    var lastImgCopy = imgs[imgs.length - 1].cloneNode(true);
    wrapper.append(fistImgCopy);
    wrapper.prepend(lastImgCopy);
    wrapper.style.transform = "translate(-100%)";
}

document.addEventListener("visibilitychange",()=>{
if(document.hidden){
    console.log(1)
    window.clearInterval(autoPlay);
}else{    console.log(2)
    autoPlay = Play();
}
})






// buttons[0].addEventListener("click",()=>{
//   if(current === 4){
//     console.log("从第五张到第一张")
//     wrapper.style.transform ="translate(-2400px)";
//     wrapper.addEventListener('transitionend',()=>{
//       $(wrapper).hide()
//       $(wrapper).offset()
//         wrapper.style.transform ="translate(-400px)";
//         $(wrapper).show()
//     },{once: true})
//   }else{
//     wrapper.style.transform ="translate(-400px)";
//   }

//   current = 0;
// })
// buttons[1].addEventListener("click",()=>{

//     wrapper.style.transform ="translate(-800px)";
//     current = 1;
// })

// buttons[2].addEventListener("click",()=>{

//     wrapper.style.transform ="translate(-1200px)";
//     current = 2;
// })

// buttons[3].addEventListener("click",()=>{

//     wrapper.style.transform ="translate(-1600px)";

//     current = 3;
// })

// buttons[4].addEventListener("click",()=>{
//     if(current === 0){
//         console.log("到第一张从第五张")
//         wrapper.style.transform ="translate(0px)";
//         wrapper.addEventListener('transitionend',()=>{
//             $(wrapper).hide()
//             $(wrapper).offset()
//               wrapper.style.transform ="translate(-2000px)";
//               $(wrapper).show()
//           },{once: true})
//         }else{
//           wrapper.style.transform ="translate(-2000px)";
//         }

//     current = 4;
// })
