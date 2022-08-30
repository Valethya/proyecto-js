document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".sidenav");
  M.Sidenav.init(elems, {});
});

document.addEventListener("DOMContentLoaded", function () {
  var fab = document.querySelectorAll(".fixed-action-btn");
  var instances = M.FloatingActionButton.init(fab, {});
});
