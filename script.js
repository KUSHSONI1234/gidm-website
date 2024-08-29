window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('nav-blur');
        navbar.classList.remove('nav-transparent');
    } else {
        navbar.classList.add('nav-transparent');
        navbar.classList.remove('nav-blur');
    }
});

// 
  var crsr = document.querySelector("#cursor");
  var blur = document.querySelector("#cursor-blur");
  var section = document.querySelector(".gradient-section");

  section.addEventListener("mouseenter", function () {
    crsr.style.display = "block";
    blur.style.display = "block";
  });

  section.addEventListener("mouseleave", function () {
    crsr.style.display = "none";
    blur.style.display = "none";
  });

  section.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x + "px";
    crsr.style.top = dets.y + "px";
    blur.style.left = dets.x - 200 + "px";
    blur.style.top = dets.y - 200 + "px";
  });

  var h4all = section.querySelectorAll("h4");
  h4all.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
      crsr.style.transform = "scale(3)";
      crsr.style.border = "1px solid #fff";
      crsr.style.background = "transparent";
    });
    elem.addEventListener("mouseleave", function () {
      crsr.style.transform = "scale(1)";
      crsr.style.border = "none";
      crsr.style.background = "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(149,193,30,1) 50%, rgba(0,0,0,0) 100%)";
    });
  });