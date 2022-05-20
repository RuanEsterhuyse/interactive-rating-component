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
const buttons = document.querySelectorAll("button");
console.log(buttons);
btn1.addEventListener("click", button1);
btn2.addEventListener("click", button2);
btn3.addEventListener("click", button3);
btn4.addEventListener("click", button4);
btn5.addEventListener("click", button5);

submitButton.addEventListener("click", clickSubmit);
function clickSubmit() {
    mainCard.classList.add("hide");
    secondMainCard.classList.remove("hide");
}

secondImage.addEventListener("click",backToRatings);
function backToRatings() {
    secondMainCard.classList.add("hide");
    mainCard.classList.remove("hide");
    numberUpdate.innerHTML = 0;
    btn1.style.backgroundColor = "var(--Medium-Grey)";
    btn1.style.color = "var(--Light-Grey)";
    btn2.style.backgroundColor = "var(--Medium-Grey)";
    btn2.style.color = "var(--Light-Grey)";
    btn3.style.backgroundColor = "var(--Medium-Grey)";
    btn3.style.color = "var(--Light-Grey)";
    btn4.style.backgroundColor = "var(--Medium-Grey)";
    btn4.style.color = "var(--Light-Grey)";
    btn5.style.backgroundColor = "var(--Medium-Grey)";
    btn5.style.color = "var(--Light-Grey)";  
}

function button1() {
numberUpdate.innerHTML = 1;
if(btn1) {
    btn1.style.backgroundColor = "var(--Light-Grey)";
    btn1.style.color = "var(--White)";
    btn2.style.backgroundColor = "var(--Medium-Grey)";
    btn2.style.color = "var(--Light-Grey)";
    btn3.style.backgroundColor = "var(--Medium-Grey)";
    btn3.style.color = "var(--Light-Grey)";
    btn4.style.backgroundColor = "var(--Medium-Grey)";
    btn4.style.color = "var(--Light-Grey)";
    btn5.style.backgroundColor = "var(--Medium-Grey)";
    btn5.style.color = "var(--Light-Grey)";
    } 
}

function button2() {
numberUpdate.innerHTML = 2;
if(btn2) {
    btn2.style.backgroundColor = "var(--Light-Grey)";
    btn2.style.color = "var(--White)";
    btn1.style.backgroundColor = "var(--Medium-Grey)";
    btn1.style.color = "var(--Light-Grey)";
    btn3.style.backgroundColor = "var(--Medium-Grey)";
    btn3.style.color = "var(--Light-Grey)";
    btn4.style.backgroundColor = "var(--Medium-Grey)";
    btn4.style.color = "var(--Light-Grey)";
    btn5.style.backgroundColor = "var(--Medium-Grey)";
    btn5.style.color = "var(--Light-Grey)";
    }
}

function button3(){
numberUpdate.innerHTML = 3;
if(btn3){
    btn3.style.backgroundColor = "var(--Light-Grey)";
    btn3.style.color = "var(--White)";
    btn1.style.backgroundColor = "var(--Medium-Grey)";
    btn1.style.color = "var(--Light-Grey)";
    btn2.style.backgroundColor = "var(--Medium-Grey)";
    btn2.style.color = "var(--Light-Grey)";
    btn4.style.backgroundColor = "var(--Medium-Grey)";
    btn4.style.color = "var(--Light-Grey)";
    btn5.style.backgroundColor = "var(--Medium-Grey)";
    btn5.style.color = "var(--Light-Grey)";
   } 
}

function button4(){
numberUpdate.innerHTML = 4;

if(btn4){
    btn4.style.backgroundColor = "var(--Light-Grey)";
    btn4.style.color = "var(--White)";
    btn1.style.backgroundColor = "var(--Medium-Grey)";
    btn1.style.color = "var(--Light-Grey)";
    btn2.style.backgroundColor = "var(--Medium-Grey)";
    btn2.style.color = "var(--Light-Grey)";
    btn3.style.backgroundColor = "var(--Medium-Grey)";
    btn3.style.color = "var(--Light-Grey)";
    btn5.style.backgroundColor = "var(--Medium-Grey)";
    btn5.style.color = "var(--Light-Grey)";

   } 
}          
function button5(){
numberUpdate.innerHTML = 5;

if(btn5){
    btn5.style.backgroundColor = "var(--Light-Grey)";
    btn5.style.color = "var(--White)";
    btn1.style.backgroundColor = "var(--Medium-Grey)";
    btn1.style.color = "var(--Light-Grey)";
    btn2.style.backgroundColor = "var(--Medium-Grey)";
    btn2.style.color = "var(--Light-Grey)";
    btn3.style.backgroundColor = "var(--Medium-Grey)";
    btn3.style.color = "var(--Light-Grey)";
    btn4.style.backgroundColor = "var(--Medium-Grey)";
    btn4.style.color = "var(--Light-Grey)";
   } 
}
          

