$(document).ready(() => {
  $("button").on("click", () => {
    const image = $("input#userPic").val();
    $("p").append(<"img src="'+ image + '>);
  });
)};
