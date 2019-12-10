let btnMenu = document.querySelector('.btn-menu');
let menu = document.querySelector('.list-container');
let containerMenu = document.querySelector('.menu');
let activator = true;

// Nav Bar Animations

btnMenu.addEventListener('click', () => {

    document.querySelector('.btn-menu i').classList.toggle('fa-times');

    if(activator){

        menu.style.left = "0";
        menu.style.transition = "0.5s";

        activator = false


    }else{
        activator = false;

        menu.style.left = "-100%";
        menu.style.transition = "0.5s";

        activator = true;
    }
});

// Switch Active Class

let links = document.querySelectorAll('.lists li a');

links.forEach((element) => {

    element.addEventListener('click', (event) => {

        links.forEach((link) => {

           link.classList.remove('active');
            
        });

        event.target.classList.add('active');


    });

});

// scroll effects

let prevScrollPos = window.pageYOffset;
let goTop = document.querySelector('.go-top');

window.onscroll = () => {

    let currenScrollPos = window.pageYOffset;

    //show and hide menu

    if(prevScrollPos > currenScrollPos){

        containerMenu.style.top = "0";
        containerMenu.style.transition = "0.5s";

    }else{

        containerMenu.style.top = "-60px";
        containerMenu.style.transition = "0.5s";

    }

    prevScrollPos =  currenScrollPos;

    // show and hide scroll styles

    let up = window.pageYOffset;

    if(up <= 600){
        containerMenu.style.borderBottom = "none";

        goTop.style.right = "-100%";
    }else{

        containerMenu.style.borderBottom = "3px solid #ff2e63";

        goTop.style.right = "0%";
        goTop.style.transition = "1s";

    }

}

goTop.addEventListener('click', () =>{

    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

let seeMore = document.querySelector('.down');

seeMore.addEventListener('click', () => {

    document.body.scrollTop = 800;
    document.documentElement.scrollTop = 800;  

});