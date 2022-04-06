let header = document.getElementsByTagName("header")[0];
let logo = document.getElementsByClassName("logo")[0];
let navText = document.getElementsByClassName("navbar")[0].children;
let button = document.getElementsByClassName("icon")[0].children;

/* is resizeNavbar pressed? */
let navbarState = true;

window.addEventListener("scroll", scrollBackground);

function scrollBackground(){
    
    if (document.documentElement.scrollTop < 350 && navbarState === true) {
        header.style.backgroundColor = "rgba(255,255,255,0.0)";
        header.style.boxShadow = "none";
        logo.setAttribute("src", "img/logo_white.png");
        for (let i = 0; i< navText.length; i++){
            navText[i].style.color = "aliceblue";
        }
        
        for (let i = 0; i< button.length; i++){
            button[i].style.backgroundColor = "aliceblue";
        }
        
    } else {
        header.style.backgroundColor = "rgba(255,255,255,0.7)";
        header.style.boxShadow = "0px 0px 20px black";
        logo.setAttribute("src", "img/logo_black.png");
        for (let i = 0; i< navText.length; i++){
            navText[i].style.color = "black";
        }
        
        for (let i = 0; i< button.length; i++){
            button[i].style.backgroundColor = "black";
        }
    }
}

function resizeNavbar() {
    let x = document.getElementsByClassName("header")[0];
    if (x.className === "header") {
        x.className += " responsive";
        navbarState = false;
        scrollBackground();
    } else {
        x.className = "header";
        navbarState = true;
        scrollBackground();
    }
}
        