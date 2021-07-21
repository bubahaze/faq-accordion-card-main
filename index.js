// klikniecie strzalki powoduje odkrycie odpowiedzi


//     var x = document.getElementById("myDIV");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }


let numberOfQuestions = $(".question").length;

for (let i = 0; i < numberOfQuestions; i++) {

    // //     if ($(this).hasClass("show-answer")) {
    // //         document.querySelectorAll(".question")[i].classList.remove("show-answer");
    // //     }
    let content = document.querySelectorAll(".question")[i];
    content.addEventListener("click", function() {
        // if (content.)
        document.querySelector("#question" + i).classList.toggle("show-answer");

    });

    //     //$(".question:eq(i)").toggleClass("show-answer");
}

// $(".question").click(() => {
//     $(".question").toggleClass("show-answer");
//     //$(".arrow").toggleClass("transform", "rotate(180deg)");
// })