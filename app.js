const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i)=>{
    const itemNUm = movieLists[i].querySelectorAll("img").length;
    let clickCounter = 0;
    arrow.addEventListener("click",()=>{
        clickCounter++;
        if(itemNUm - (4+clickCounter) >= 0){
            movieLists[i].style.transform = `translateX(${
                movieLists[i].computedStyleMap().get("transform")[0].x.value
            -310}px)`;
        }else{
            movieLists[i].style.transform = "translateX(0)";
            clickCounter = 0;
        }
    });
});

const ball = document.querySelector(".toggle-ball");

const items = document.querySelectorAll(
    ".container,.movie-list-title,.navbar,.menu-container,.sidebar,.left-menu-icon,.toggle,.toggle-ball");

ball.addEventListener("click", ()=>{
    items.forEach(item=>{
        item.classList.toggle("active")
    });
    // ball.classList.toggle("active")
});