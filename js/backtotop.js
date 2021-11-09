let backtotop = document.getElementsByClassName("backtotop")[0];
window.onscroll = () => {
    let scrollDis = document.body.scrollTop || document.documentElement.scrollTop;
    console.log(scrollDis);
    if (scrollDis > 1) {
        backtotop.style.display = "block";
    } else {
        backtotop.style.display = "none";
    }
}

backtotop.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})