const text =
"Sometimes mistakes happen... 💔\n\nI never wanted to hurt you.\n\nYou are special to me.\n\nPlease accept my apology ❤️";

let i = 0;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 70);
  }
}

typeWriter();

let time = 30;

const timer = setInterval(() => {

document.getElementById("count").innerHTML = time;

if(time === 0){
clearInterval(timer);

document.getElementById("typing").innerHTML =
`
<h2>Will You Forgive Me? ❤️</h2>
`;

document.getElementById("forgiveBtn").style.display =
"inline-block";

}

time--;

},1000);

document.getElementById("musicBtn")
.addEventListener("click", () => {

document.getElementById("music").play();

});

document.getElementById("forgiveBtn")
.addEventListener("click", () => {

alert("Thank You ❤️");

});

function createHeart(){

const heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="absolute";
heart.style.left=Math.random()*100+"vw";
heart.style.top="100vh";
heart.style.fontSize=Math.random()*20+20+"px";
heart.style.animation="float 6s linear";

document.body.appendChild(heart);

setTimeout(()=>{
heart.remove();
},6000);

}

setInterval(createHeart,500);

const style=document.createElement("style");

style.innerHTML=`
@keyframes float{
from{
transform:translateY(0);
opacity:1;
}
to{
transform:translateY(-110vh);
opacity:0;
}
}
`;

document.head.appendChild(style);