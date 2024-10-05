
const downBtn = document.querySelector("#scrollDBtn");
const upBtn = document.querySelector("#scrollUBtn");

downBtn.addEventListener("click", () => {
    // window.scrollTo({
    //   top: 1000,
    //   behavior: "smooth",
    // });
    window.scrollBy({
        top: 1000,
        behavior: "smooth"
    });
});

upBtn.addEventListener("click", () => {
    
    window.scrollBy({
        top: -1000,
        behavior: "smooth"
    });
});
