//Front-end logic
$().ready(function(){
  $("form.vacation").submit(function(event){
    event.preventDefault();
    var choice = $("input:radio[name=operator]:checked").val();
    if (choice === "ice") {
      $("#swiss").show();
    } else if (choice === "kayak") {
      $("#patagonia").show();
    } else if (choice === "lounge") {
      $("#fiji").show();
    } else if (choice === "scuba") {
      $("#hawaii").show();
    }


  });
});













//Back-end logic
