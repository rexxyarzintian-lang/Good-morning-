// =========================
// LOADING SCREEN
// =========================

window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loading").style.opacity = "0";

        setTimeout(() => {
            document.getElementById("loading").style.display = "none";
        }, 800);

    }, 1800);
});

// =========================
// TYPING EFFECT
// =========================

const nama = "Shafiya Trisya ❤️";

let index = 0;

function typing() {

    if (index < nama.length) {

        document.getElementById("typing").innerHTML += nama.charAt(index);

        index++;

        setTimeout(typing, 120);

    }

}

typing();


// =========================
// OPEN LETTER
// =========================

const tombol = document.getElementById("start");

const surat = document.getElementById("letter");

const musik = document.getElementById("music");

tombol.onclick = () => {

    surat.style.display = "block";

    surat.scrollIntoView({

        behavior: "smooth"

    });

    musik.play().catch(() => {});

    confetti();

};


// =========================
// CLOCK
// =========================

function jam() {

    const sekarang = new Date();

    document.getElementById("time").innerHTML =
        sekarang.toLocaleTimeString("id-ID");

    document.getElementById("date").innerHTML =
        sekarang.toLocaleDateString("id-ID", {

            weekday: "long",

            day: "numeric",

            month: "long",

            year: "numeric"

        });

}

setInterval(jam, 1000);

jam();


// =========================
// SAKURA & HEART
// =========================

function bunga() {

    const item = document.createElement("div");

    if (Math.random() > 0.5) {

        item.className = "heart";

        item.innerHTML = "❤️";

    } else {

        item.className = "sakura";

        item.innerHTML = "🌸";

    }

    item.style.left = Math.random() * 100 + "vw";

    item.style.fontSize =
        (18 + Math.random() * 25) + "px";

    item.style.animationDuration =
        (5 + Math.random() * 6) + "s";

    document.body.appendChild(item);

    setTimeout(() => {

        item.remove();

    }, 11000);

}

setInterval(bunga, 250);


// =========================
// TOUCH HEART EFFECT
// =========================

document.addEventListener("click", function(e) {

    const hati = document.createElement("div");

    hati.innerHTML = "💖";

    hati.style.position = "fixed";

    hati.style.left = e.clientX + "px";

    hati.style.top = e.clientY + "px";

    hati.style.fontSize = "28px";

    hati.style.pointerEvents = "none";

    hati.style.transition = "1.2s";

    document.body.appendChild(hati);

    setTimeout(() => {

        hati.style.transform = "translateY(-120px) scale(2)";

        hati.style.opacity = "0";

    }, 20);

    setTimeout(() => {

        hati.remove();

    }, 1200);

});


// =========================
// GREETING
// =========================

(function(){

const jamSekarang = new Date().getHours();

let salam = "Selamat Pagi ☀️";

if(jamSekarang >= 11 && jamSekarang < 15){

    salam = "Selamat Siang 🌤";

}

else if(jamSekarang >= 15 && jamSekarang < 18){

    salam = "Selamat Sore 🌇";

}

else if(jamSekarang >= 18){

    salam = "Selamat Malam 🌙";

}

document.querySelector(".hero h3").innerHTML = salam;

})();


// =========================
// CONFETTI EFFECT
// =========================

function confetti(){

for(let i=0;i<80;i++){

const c=document.createElement("div");

c.innerHTML=["🎉","✨","💖","🌸"][Math.floor(Math.random()*4)];

c.style.position="fixed";

c.style.left=Math.random()*100+"vw";

c.style.top="-30px";

c.style.fontSize=(16+Math.random()*18)+"px";

c.style.transition="4s linear";

document.body.appendChild(c);

setTimeout(()=>{

c.style.transform="translateY(110vh) rotate(720deg)";

},50);

setTimeout(()=>{

c.remove();

},4200);

}

}

// ======================
// STARS
// ======================

for(let i=0;i<120;i++){

let s=document.createElement("div");

s.className="star";

let size=Math.random()*3+1;

s.style.width=size+"px";

s.style.height=size+"px";

s.style.left=Math.random()*100+"vw";

s.style.top=Math.random()*100+"vh";

s.style.animationDuration=(1+Math.random()*3)+"s";

document.getElementById("stars").appendChild(s);

}

// ======================
// DOUBLE CLICK LOVE
// ======================

document.addEventListener("dblclick",function(e){

let love=document.createElement("div");

love.innerHTML="💖";

love.style.position="fixed";

love.style.left=e.clientX+"px";

love.style.top=e.clientY+"px";

love.style.fontSize="40px";

love.style.transition="1.5s";

love.style.pointerEvents="none";

document.body.appendChild(love);

setTimeout(()=>{

love.style.transform="translateY(-180px) scale(2)";

love.style.opacity="0";

},20);

setTimeout(()=>{

love.remove();

},1500);

});

// ======================
// PHOTO GLOW
// ======================

setInterval(()=>{

document.querySelector(".photo").style.boxShadow=

"0 0 25px white,0 0 50px hotpink,0 0 90px deeppink";

setTimeout(()=>{

document.querySelector(".photo").style.boxShadow=

"0 0 20px white";

},700);

},2200);

// ======================
// TITLE ANIMATION
// ======================

const titles=[

"❤️ Untuk Shafiya ❤️",

"🌸 Selamat Pagi 🌸",

"💕 I Love You 💕"

];

let t=0;

setInterval(()=>{

document.title=titles[t];

t++;

if(t>=titles.length)t=0;

},2500);