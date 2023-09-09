window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var height = document.body.offsetHeight - window.innerHeight;
  if (document.body.scrollTop > height || document.documentElement.scrollTop > height) {
    document.getElementById("back-to-top").style.display = "block";
  } else {
    document.getElementById("back-to-top").style.display = "none";
  }
}

