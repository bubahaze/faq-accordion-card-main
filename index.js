// klikniecie strzalki powoduje odkrycie odpowiedzi

this.addEventListener("DOMContentLoaded", () => {
        const questions = document.querySelectorAll(".question")

        questions.forEach((question) =>
            question.addEventListener("click", () => {
                if (question.parentNode.classList.contains("show-answer")) {
                    question.parentNode.classList.toggle("show-answer")
                } else {
                    document.querySelectorAll(".question").forEach(question => question.parentNode.classList.remove("show-answer"))
                    question.parentNode.classList.add("show-answer")
                }
            }))

    })
    // let radios = document.getElementsByTagName("input");
    // for (let i = 0; i < radios.length; i++) {
    //     radios[i].addEventListener("click", function(e) {
    //             if (e.ctrlKey) {
    //                 this.checked = false;
    //             }
    //         }
    //     }







//     var x = document.getElementById("myDIV");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }


// let numberOfQuestions = $(".question").length;

// for (let i = 0; i < numberOfQuestions; i++) {

//     // //     if ($(this).hasClass("show-answer")) {
//     // //         document.querySelectorAll(".question")[i].classList.remove("show-answer");
//     // //     }
//     if (document.querySelector("#question" + i).classList.contains("show-answer")) {
//         this.classList.remove("show-answer");
//     } else {
//         return;
//     }

//     document.querySelectorAll(".question")[i].addEventListener("click", function() {

//             document.querySelector("#question" + i).classList.toggle("show-answer");
//             //this.nextElementSibling.classList.toggle("show-answer");

//         })
//         //document.querySelector("#question" + i).classList.toggle("show-answer");

// }

//     //$(".question:eq(i)").toggleClass("show-answer");


// $(".question").click(() => {
//     $(".question").toggleClass("show-answer");
//     //$(".arrow").toggleClass("transform", "rotate(180deg)");
// })