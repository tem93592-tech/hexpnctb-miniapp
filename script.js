// =====================================
// HEXPNCTb Mini App
// script.js
// =====================================


// Проверяем Telegram Mini App

const tg = window.Telegram?.WebApp;


// Если приложение открыто внутри Telegram

if (tg) {

    tg.ready();

    tg.expand();

    console.log("Telegram Mini App запущен");

}



// =====================================
// Loader
// =====================================

window.addEventListener("load", () => {


    const loader = document.getElementById("loader");


    setTimeout(() => {

        if(loader){

            loader.style.opacity = "0";


            setTimeout(()=>{

                loader.style.display="none";

            },500);

        }


    },1200);



});




// =====================================
// Telegram Theme
// =====================================


if(tg){


    document.documentElement.style.setProperty(
        "--bg",
        tg.themeParams.bg_color || "#09090b"
    );


    document.documentElement.style.setProperty(
        "--text",
        tg.themeParams.text_color || "#ffffff"
    );


}




// =====================================
// Card Click Animation
// =====================================


const cards = document.querySelectorAll(".card");


cards.forEach(card=>{


    card.addEventListener("click",()=>{


        card.style.transform="scale(.95)";


        setTimeout(()=>{

            card.style.transform="";

        },150);


    });


});




// =====================================
// Bottom Navigation
// =====================================


const navItems = document.querySelectorAll(".bottomItem");


navItems.forEach(item=>{


    item.addEventListener("click",()=>{


        navItems.forEach(i=>{

            i.classList.remove("active");

        });



        item.classList.add("active");


    });


});




// =====================================
// Telegram Button
// =====================================


const button = document.querySelector(".mainButton");


if(button){


button.addEventListener("click",()=>{


    console.log("Переход в Telegram");


});


}




// =====================================
// Future Posts System
// =====================================


function addPost(title,text,date){


    const container =
    document.getElementById("postsContainer");



    if(!container)return;



    const post=document.createElement("div");


    post.className="post";



    post.innerHTML=`

    <div class="postTitle">
    ${title}
    </div>


    <div class="postDate">
    ${date}
    </div>


    <div class="postText">
    ${text}
    </div>

    `;



    container.prepend(post);



}




console.log("HEXPNCTb Mini App готов");
