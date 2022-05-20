const submitButton = document.querySelector(".submit-btn");
const mainCard = document.querySelector(".main-card");
const secondMainCard = document.querySelector(".second-main-card");
const secondImage = document.querySelector(".second-image");
const btn1 = document.querySelector(".rating-button-1");
const btn2 = document.querySelector(".rating-button-2");
const btn3 = document.querySelector(".rating-button-3");
const btn4 = document.querySelector(".rating-button-4");
const btn5 = document.querySelector(".rating-button-5");
const numberUpdate = document.querySelector(".number-update");

btn1.addEventListener("click", button1);
btn2.addEventListener("click", button2);
btn3.addEventListener("click", button3);
btn4.addEventListener("click", button4);
btn5.addEventListener("click", button5);




submitButton.addEventListener("click", clickSubmit);

function clickSubmit(){
    mainCard.classList.add("hide");
    secondMainCard.classList.remove("hide");
}

secondImage.addEventListener("click",backToRatings);

function backToRatings(){
    secondMainCard.classList.add("hide");
    mainCard.classList.remove("hide");
    numberUpdate.innerHTML = 0;
}

function button1(){
numberUpdate.innerHTML = 1;

    // btn1.style.backgroundColor = "var(--Light-Grey)";
    // btn1.style.color = "var(--White)";

}

function button2(){
numberUpdate.innerHTML = 2;
}

function button3(){
numberUpdate.innerHTML = 3;
}

function button4(){
numberUpdate.innerHTML = 4;
}
            
function button5(){
numberUpdate.innerHTML = 5;
}
          








