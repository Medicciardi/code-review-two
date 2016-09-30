//Front-end logic
$().ready(function(){
  $("form.vacation").submit(function(event){
    event.preventDefault();
    var choice = $("input:radio[name=operator]:checked").val();
    var choice2 = $("input:radio[name=operator2]:checked").val();
    if (choice === "ice" && choice2 === "budget1") {
      $(".destination").children().hide();
      $("#swiss").show();
    } else if (choice === "kayak") {
      $(".destination").children().hide();
      $("#patagonia").show();
    } else if (choice === "scuba") {
      $(".destination").children().hide();
      $("#hawaii").show();
    } else if (choice === "lounge") {
      $(".destination").children().hide();
      $("#fiji").show();
    } else if (choice === "ice") {
      $(".destination").children().hide();
      $("#patagonia").show();
    } else {
      $(".destination").children().hide();
      $("#hawaii").show();
    }
  });
});













//Back-end logic
