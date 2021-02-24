$(document).ready(function(){
        $(".collection-1-thumbnail").hover(function(){
          $(".collection-1-thumbnail img").css("opacity","0.7");
          $(".collection-1-thumbnail img").css("transition","200ms");
          $(".article-button-right .backgroud-line").css("position","absolute");
          $(".article-button-right .backgroud-line").css("background-color","black");
          $(".article-button-right .backgroud-line").css("width","85px");
          $(".article-button-right .backgroud-line").css("right","10");
          $(".article-button-right .backgroud-line").css("transition","500ms");
        }, function(){
          $(".collection-1-thumbnail img").css("opacity","1");
          $(".article-button-right .backgroud-line").css("background-color","#d6d6d6");
        //   $(".article-button-right .backgroud-line").css("right","inherit");
          $(".article-button-right .backgroud-line").css("width","243px");
        });
      });

      $(document).ready(function(){
        $(".collection-1-title").hover(function(){
          $(".collection-1-thumbnail img").css("opacity","0.7");
          $(".collection-1-thumbnail img").css("transition","200ms");
        }, function(){
          $(".collection-1-thumbnail img" ).css("opacity","1");
        });
      });

      $(document).ready(function(){
        $(".article-button-right p").hover(function(){
          $(".collection-1-thumbnail img").css("opacity","0.7");
          $(".collection-1-thumbnail img").css("transition","200ms");
        }, function(){
          $(".collection-1-thumbnail img" ).css("opacity","1");
        });
      });