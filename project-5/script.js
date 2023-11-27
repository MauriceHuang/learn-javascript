const navElement = document.querySelector("nav");
const navbarLinks = navElement.querySelectorAll("a");
const navPostition = navElement.getBoundingClientRect().top;

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  console.log("scroll position", scrollPosition);
  navElement.style.top = scrollPosition + "px";
  navbarLinks.forEach((link) => {
    const sectionElement = document.querySelector(link.hash);
    console.log(`${link.hash}'s offsetTop`, sectionElement.offsetTop);
    console.log(`${link.hash}'s offsetHeight`, sectionElement.offsetHeight);
    if (
      scrollPosition > sectionElement.offsetTop &&
      scrollPosition < sectionElement.offsetTop + sectionElement.offsetHeight
    ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});
