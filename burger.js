document.addEventListener("DOMContentLoaded", function(){
    document.querySelector(".header-burger").addEventListener("click", function(e){
        e.preventDefault();
        if(document.body.className.match("lock")){
            document.body.classList.remove("lock");
        } else {
            document.body.classList.add("lock");
        }
        let el = document.querySelectorAll(".header-burger, .header-menu");
        if(el[0].className.match("activeOpen")){
            el[0].classList.remove("activeOpen");
            el[1].classList.remove("activeOpen");
        } else {
            el[0].classList.add("activeOpen");
            el[1].classList.add("activeOpen");
        }
    })
});