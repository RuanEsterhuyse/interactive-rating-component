const submitButton = document.querySelector(".submit-btn");
const mainCard = document.querySelector(".main-card");
const secondMainCard = document.querySelector(".second-main-card");
const secondImage = document.querySelector(".second-image");   
const numberUpdate = document.querySelector(".number-update");
let btns = document.querySelectorAll(".btn");
let starsScore = 3;



submitButton.addEventListener('click', btnClicked);
btns.forEach(btn =>{
    btn.addEventListener('click', ratingBtnClicked);
});

function btnClicked(){
    mainCard.classList.add("hide");
    secondMainCard.classList.remove("hide");
    numberUpdate.textContent = starsScore;

};


function ratingBtnClicked (e) {
    btns.forEach( btn => {
        btn.classList.remove('active');
    })
    
    e.target.classList.add('active');

    starsScore = e.target.textContent;
};  


// for (button of btns) {
//     button.addEventListener("click", function (e) {
//       e.preventDefault;
//       let value = button.value;
//       numberUpdate.innerText = `${value}`;
//       submitButton.disabled = false;
//     });
//   }
//   console.log(value);


// submitButton.addEventListener("click", clickSubmit);
// function clickSubmit() {
//     mainCard.classList.add("hide");
//     secondMainCard.classList.remove("hide");

//     }

secondImage.addEventListener("click",backToRatings);
function backToRatings() {
    secondMainCard.classList.add("hide");
    mainCard.classList.remove("hide");
}


