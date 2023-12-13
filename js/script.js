$(document).ready(function(){
    
    // draggable
	 $(function(){
       $("#draggable").draggable();
});

    // draggable
    $(function(){
      $("#dragg").draggable();
      $("#droppabl").droppabl({
        drop: function(event, ui){
          $(this)
            .addClass("ui-state-highlight")
            .find("p")
            .html("Dropped!");
        }
    });
}); 

	// accordion

	 $(function(){
    $("#accordion").accordion({
        collapsible: true
    });
});

    // autocomplete
     var data = [
        "html",
        "css",
        "js",
        "jq",
        "jq ui",
        "bootstrap",
        "php"
    ];

    $("#c_name").autocomplete({
      source: data
});


     $(function(){
    $("#sortable").sortable();
});
  
    // Datepicker

     $(function(){
    $("#datepicker").datepicker();
});

    // tabs

     $(function(){
    $("#tabs").tabs();
});

    // tooltip
      $(function(){
    $("#age").tooltip();

});
    
    // adds class
//      $(function(){
//     $("#button").on("click", function(){
//       $("#effect").addClass("newClass", 1000, callback);
//     });
 
//     function callback(){
//       setTimeout(function() {
//         $("#effect").removeClass("newClass");
//       }, 1500 );
//     }
// });

    // color animation
      $(function(){
    var state = true;
    $("#button").on("click", function(){
      if ( state ) {
        $("#effect").animate({
          backgroundColor: "#aa0000",
          color: "#fff",
          width: 500
        }, 1000);
      } else {
        $("#effect").animate({
          backgroundColor: "#fff",
          color: "#000",
          width: 240
        }, 1000);
      }
      state = !state;
    });
});

     // remove class

//        $(function(){
//     $("#button_1").on("click", function(){
//       $("#effect_1").removeClass("newClass", 1000, callback);
//     });
 
//     function callback(){
//       setTimeout(function(){
//         $("#effect_1").addClass("newClass");
//       }, 1500 );
//     }
// });

  // Switch Class

$(function(){
    $("#button_3").on("click", function(){
      $(".newClass").switchClass("newClass", "anotherNewClass", 1000);
      $(".anotherNewClass").switchClass("anotherNewClass", "newClass", 1000 );
    });
});

    // dialog
     $( function() {
    $( "#dialog" ).dialog();
});





})