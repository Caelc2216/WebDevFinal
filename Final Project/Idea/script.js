let score = 0;
var message = [
  "Come on, just click it",
  "Come on, just click it",
  "Oooo, so close",
  "You almost got it",
  "That was close",
];

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

$(".run").on("mouseenter", function () {
  let left = getRandomNumber(90, 10);
  let top = getRandomNumber(90, 10);
  score += 1;

  if ($("#medium").is(":checked")) {
    setTimeout(() => {
      $(".run").css({
        left: `${left}%`,
        top: `${top}%`,
      });
    }, 200);
  }
  if ($("#easy").is(":checked")) {
    setTimeout(() => {
      $(".run").css({
        left: `${left}%`,
        top: `${top}%`,
      });
    }, 500);
  }
  if ($("#hard").is(":checked")) {
    setTimeout(() => {
      $(".run").css({
        left: `${left}%`,
        top: `${top}%`,
      });
    }, 100);
  }
  if ($("#unfair").is(":checked")) {
      setTimeout(() => {
        $(".run").css({
          left: `${left}%`,
          top: `${top}%`,
        });
      },0);
    }

  $("#score").text(score);
  $("#message").text(`${message[getRandomNumber(0, 3)]}`);
});



$(".run").on("click", function () {
  console.log("BTN Clicked");

  $("#success").removeClass("d-none");
  $("#success").text(
    `You successfully clicked the button after ${score} tries`
  );
  score = 0;

  setTimeout(() => {
    $("#success").addClass("d-none");
  }, 3000);
});
