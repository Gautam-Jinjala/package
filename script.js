// Navbar Script
function btnToggel() {
  let toggel = document.querySelector(".toggel-icon");
  let Icon = document.querySelector(".toggel-close-icon");
  let navlist = document.querySelector(".nav-list");
  if (toggel.style.display === "block") {
    toggel.style.display = "none";
    Icon.style.display = "block";
    navlist.style.display = "block";
  } else {
    Icon.style.display = "none";
    toggel.style.display = "block";
    navlist.style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // Initialize AOS
  AOS.init();

  // Pagination
  const links = document.querySelectorAll(".nav-item, .btn");
  const sections = document.querySelectorAll(".division");

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      links.forEach((link) => link.classList.remove("active"));

      this.classList.add("active");

      const targetId = this.getAttribute("href").substring(1);

      sections.forEach((section) => section.classList.remove("active"));

      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.classList.add("active");

        // Update URL hash without reloading the page
        history.pushState(null, null, `#${targetId}`);

        AOS.refresh();
      }
    });
  });
});

window.onSideMenuItemClicked = () => {
  const clas = document.getElementsByClassName("toggel-icon")[0].style.display;
  
  if (
     clas == "none" && window.innerWidth < 768
  ) {
    document.getElementsByClassName("nav-button")[0].click();
  }
}

window.addEventListener("resize", (e) => {
  if(window.innerWidth > 768){
    document.getElementsByClassName("toggel-icon")[0].style.display = "none";
    document.getElementsByClassName("nav-list")[0].style.display = "block";
  }
  else{
    document.getElementsByClassName("toggel-icon")[0].style.display = "block";
    document.getElementsByClassName("nav-list")[0].style.display = "none";
  }
})

// Counter animation
const counterAnim = (
  qSelector,
  start = 0,
  end,
  duration = 1000,
  plus = true
) => {
  const target = document.querySelector(qSelector);
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    target.innerText = `${parseFloat(
      (progress * (end - start) + start).toFixed(1)
    )}${plus ? "+" : ""}`;
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
};
counterAnim("#count1", 100, 23, 2000, false);
counterAnim("#count2", 100, 5.8, 2000);
counterAnim("#count3", 100, 6.1, 2000);

// Get the button
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
