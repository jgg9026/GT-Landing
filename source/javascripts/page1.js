$(document).ready(function(){
  var menu_item=$(".sidebar").width();
  console.log(menu_item);
  console.log($(".sidebar").css("width"));
  console.log($("body").css("width"));
  var ten=$("body").css("width"); 
  ten= parseInt(ten, 10);
  ten =ten/10;
  console.log(ten);
  console.log($(".sidebar").css("width"));
  var ancho=0;
  $(".wrapper .page1 .burguer .burguer_button").click(function(){
      var size=$(".sidebar").css("width");
      console.log(size);
      switch ($(".sidebar").css("width")){
        case '0px':
          $(".menu").animate({'width': '10%'}, 250);
          $(".wrapper .page1 .burguer .burguer_button").animate({'left':ten+'px'}, 400);
          $(".burguer").animate({'left': '8%'}, 250);
          console.log("hola");
          break;
        case size:
          $(".menu").animate({'width': '0px'}, 250);
          $(".burguer").animate({'left': '1%'},250);

          break;
      }
  });

  
});