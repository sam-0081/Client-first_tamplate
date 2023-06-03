"use strict";

// window.addEventListener("load", () => {
//     // (A) CHECK FOR MOBILE
//     var isMobile = navigator.userAgent.toLowerCase().match(/mobile/i);

//     // (B) DO SOMETHING...
//     if (isMobile) {
//         document.body.classList.add('_touch');
//     }
//     else {
//         document.body.classList.add('_pc');
//     }
// });


document.addEventListener("DOMContentLoaded", function () {


    //modal

    if (document.querySelector('.modal')) {
        const modal = document.querySelector('.modal'),
            modalBtn = document.querySelectorAll('[data-modal]'),
            modalContent = document.querySelector('.modal__content'),
            modalClose = document.querySelector('.modal__close');

        modalBtn.forEach((el) => {

            el.addEventListener('click', () => {

                modal.classList.add('open');
                modalContent.classList.add('open');
                document.body.classList.add('noscroll');
            });
        });

        modalClose.addEventListener('click', () => {
            modalContent.classList.add('hide');
            document.body.classList.remove('noscroll');

            setTimeout(() => {
                modal.classList.remove('open');
                modalContent.classList.remove('open');
                modalContent.classList.remove('hide');
            }, 200);
        });

        modal.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal')) {

                modalContent.classList.add('hide');
                setTimeout(() => {
                    modal.classList.remove('open');
                    modalContent.classList.remove('open');
                    document.body.classList.remove('noscroll');
                    modalContent.classList.remove('hide');
                }, 200);

            }
        });
    }

    //donate modal
    if (document.querySelector('.modal-donate')) {
        const modal = document.querySelector('.modal-donate'),
            modalBtn = document.querySelectorAll('[data-modal-donate]'),
            modalContent = modal.querySelector('.modal__content'),
            modalClose = modal.querySelector('.modal__close');

        modalBtn.forEach((el) => {

            el.addEventListener('click', () => {

                modal.classList.add('open');
                modalContent.classList.add('open');
                document.body.classList.add('noscroll');
            });
        });

        modalClose.addEventListener('click', () => {
            modalContent.classList.add('hide');
            document.body.classList.remove('noscroll');

            setTimeout(() => {
                modal.classList.remove('open');
                modalContent.classList.remove('open');
                modalContent.classList.remove('hide');
            }, 200);
        });

        modal.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal-donate')) {

                modalContent.classList.add('hide');
                setTimeout(() => {
                    modal.classList.remove('open');
                    modalContent.classList.remove('open');
                    document.body.classList.remove('noscroll');
                    modalContent.classList.remove('hide');
                }, 200);

            }
        });
    }





    // =======================menu==================

    const iconMenu = document.querySelector('.icon-menu'),
        popup = document.querySelector('.popup'),
        menu = document.querySelector('.menu').cloneNode(true),
        menuLinks = menu.querySelectorAll('.menu__link'),
        body = document.body,
        // menuList = document
        menuLinksDesktop = document.querySelectorAll('.menu__list .menu__link');

    iconMenu.addEventListener("click", menuHandler);





    menuLinksDesktop.forEach((el) => {
        // console.log(el.getAttribute('href'));  
        // console.log(document.location.href);

        if ('/' + el.getAttribute('href') == window.location.pathname) {
            el.classList.add('menu__link--activ');
        }
    });

    menuLinks.forEach((el) => {
        if ('/' + el.getAttribute('href') == window.location.pathname) {
            el.classList.add('menu__link--activ');
        }
    });



    function menuHandler(e) {
        e.preventDefault();
        if (e.target.parentNode.parentNode.classList.contains("bg--green")) {
            menu.classList.add("bg--green");
        }
        if (e.target.parentNode.parentNode.classList.contains("bg--off-white")) {
            menu.classList.add("bg--off-white");
        }

        popup.classList.toggle("open");

        iconMenu.classList.toggle("active");
        body.classList.toggle("noscroll");
        renderPopup();


    }

    menuLinks.forEach(element => {
        element.addEventListener("click", () => {
            popup.classList.remove("open");
            iconMenu.classList.remove("active");
            body.classList.remove("noscroll");



        });

    });

    menu.addEventListener('click', e => {
        if (e.target.classList.contains('menu')) {
            popup.classList.remove('open');
            iconMenu.classList.remove("active");
            body.classList.remove("noscroll");
        }
    });

    function renderPopup() {
        popup.appendChild(menu);
    }




    // =======================tabs===========================

    if (document.querySelector(".tabs")) {
        const tabs = document.querySelector(".tabs");
        const tabList = tabs.querySelector(".tab-list");
        const tabLinks = tabList.querySelectorAll(".tab-link");
        const tabContents = tabs.querySelectorAll(".tab");

        tabLinks.forEach(function (link) {
            link.addEventListener("click", function (event) {
                event.preventDefault();
                const targetId = this.hash;
                // console.log(targetId);
                const targetTab = tabs.querySelector(targetId);

                tabLinks.forEach(function (link) {
                    link.classList.remove("active");
                    link.parentNode.classList.remove("active");
                });
                this.classList.add("active");
                this.parentNode.classList.add("active");

                tabContents.forEach(function (tab) {
                    tab.classList.remove("active");
                });
                targetTab.classList.add("active");
            });
        });
    }

    // const tabs = document.querySelector(".tabs");
    // const tabList = tabs.querySelector(".tab-list");
    // const tabLinks = tabList.querySelectorAll(".tab-link");
    // const tabContents = tabs.querySelectorAll(".tab");

    // tabLinks.forEach(function (link) {
    //     link.addEventListener("click", function (event) {
    //         event.preventDefault();
    //         const targetId = this.hash;
    //         // console.log(targetId);
    //         const targetTab = tabs.querySelector(targetId);

    //         tabLinks.forEach(function (link) {
    //             link.classList.remove("active");
    //             link.parentNode.classList.remove("active");
    //         });
    //         this.classList.add("active");
    //         this.parentNode.classList.add("active");

    //         tabContents.forEach(function (tab) {
    //             tab.classList.remove("active");
    //         });
    //         targetTab.classList.add("active");
    //     });
    // });


    if(document.querySelector('#about-video')){

        var video = document.getElementById("about-video");
        var playButton = document.getElementById("play-button");
    
        playButton.addEventListener("click", function () {
            video.play();
            video.setAttribute("controls", "controls");
            playButton.style.display = "none";

        });

        video.addEventListener("pause", function() {
            playButton.style.display = "block";

          });
        
    }
   
});
