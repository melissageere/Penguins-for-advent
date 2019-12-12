$(document).ready(function() {

  console.log("working!");

  $("container").click(function(linkmaker){
        var doornumber = event.target.id
        var imglink = "url('penguins/door"+ doornumber + ".jpg')"
        var date = new Date().getDate();

        console.log(imglink)

        if (date < doornumber) {
          alert("No peeking!");
        } else {
          $(event.target).css({
            "background-image": imglink,
            "background-size": "cover",
            "color": "rgba(255,255,255,0)",
            "border": "3px solid rgba(18,141,243,1)" });
          }
        })
      })


/*
        var date = new Date().getDate();


    if (date < doornumber) {
      alert("No peeking!");
    } else {
      $("#d12").css({
        "background-image": "url('penguins/door12.jpg')",
        "background-size": "cover",
        "color": "rgba(255,255,255,0)",
        "border": "3px solid rgba(18,141,243,1)"
  });

  function opendoor17() {
    $("#d17").css({
      "background-image": "url('penguins/door17.jpg')",
      "background-size": "cover",
      "color": "rgba(255,255,255,0)",
      "border": "3px solid rgba(18,141,243,1)"
    })
  };
/*
  window.setTimeout(opendoor17, 1200);

  $("#d12").click(function() {
    var date = new Date().getDate();
    if (date < 12) {
      alert("No peeking!");
    } else {
      $("#d12").css({
        "background-image": "url('penguins/door12.jpg')",
        "background-size": "cover",
        "color": "rgba(255,255,255,0)",
        "border": "3px solid rgba(18,141,243,1)"
      })

    }
  })
*/
