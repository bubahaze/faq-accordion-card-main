// klikniecie strzalki powoduje odkrycie odpowiedzi

$(".arrow").click(() => {
    $("p").toggleClass("pressed");
})