function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(mudarEstiloDaSidebar);

function mudarEstiloDaSidebar() {
	var e = document.getElementsByClassName("sidebar");
	e[0].style.backgroundImage = "url('/img/bg.jpg')";
}