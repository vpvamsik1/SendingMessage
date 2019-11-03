



document.addEventListener("DOMContentLoaded", function(){

  var element1 = $("#name");
  for(var i = 0; i < element1.length; i++) {
    element1[i].oninvalid = function(e) {
      e.target.setCustomValidity("");
      if(!e.target.validity.valid) {
        e.target.setCustomValidity("Please enter a name");
      }
    };
    element1[i].oninput = function(e) {
      e.target.setCustomValidity("");
    }
  }

  

  var element3 = $("#subject");
  for(var i = 0; i < element3.length; i++) {
    element3[i].oninvalid = function(e) {
      e.target.setCustomValidity("");
      if(!e.target.validity.valid) {
        e.target.setCustomValidity("Please enter a subject");
      }
    };
    element3[i].oninput = function(e) {
      e.target.setCustomValidity("");
    }
  }

  var element4 = $("#content");
  for(var i = 0; i < element4.length; i++) {
    element4[i].oninvalid = function(e) {
      e.target.setCustomValidity("");
      if(!e.target.validity.valid) {
        e.target.setCustomValidity("Please enter some content");
      }
    };
    element4[i].oninput = function(e) {
      e.target.setCustomValidity("");
    }
  }


  $("#B1").on("click", function(){
    if((element1.val()) && (element3.val()) && (element4.val())) {

          alert("dsfds");

    }
  });

})







