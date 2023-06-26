


//For the Slide Design Section
var slides = document.querySelectorAll(".slide");
var btns = document.querySelectorAll(".sliderBtn");
let currentSlide = 1;

//JS for Manual nav for slider
var manualNav = function(manual){
    slides.forEach((slide) =>{
        slide.classList.remove("active");

       btns.forEach((SliderBtn) => {
            SliderBtn.classList.remove("active");
       });
    });

    slides[manual].classList.add("active");
    btns[manual].classList.add("active");
}

btns.forEach((SliderBtn, i) =>{
    SliderBtn.addEventListener("click", () => {
        manualNav(i);
        currentSlide = i;
    });
});