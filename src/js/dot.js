var btt = document.getElementsByClassName("dot");

var i;

for (i = 0; i < btt.length; i++) {
  btt[i].addEventListener("click", function() {
    this.classList.toggle("test");
  });
}