$(document).ready(function(){
  var menu_item=$(".warpper .page1 .menu .sidebar").css("width");

  $(".wrapper .page1 .burguer .burguer_button").click(function(){
    console.log("hola");
    console.log(menu_item);
      switch ($(".wrapper .page1 .menu").css("width")){
        case "10%":
          $(".warpper .page1 .menu").animate({'width': '0px'}, 400);
          console.log("hola");
          break;
        case "0%":
          $(".warpper .page1 .menu").animate({'width': '10%'}, 400);
          break;
      }
  });

  
});