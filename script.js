function showWish(){

let name=document.getElementById("name").value.trim();

if(name==""){

alert("Please enter your name.");

return;

}

document.getElementById("friendName").innerHTML="Dear "+name+" ❤️";

document.getElementById("homePage").style.display="none";

document.getElementById("wishPage").style.display="block";

document.getElementById("bgMusic").play();
createHearts();
createBalloons();

}
function createHearts(){

setInterval(()=>{

let heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(20+Math.random()*20)+"px";

document.getElementById("hearts").appendChild(heart);

setTimeout(()=>{

heart.remove();

},6000);

},300);

}



function createBalloons(){

setInterval(()=>{

let balloon=document.createElement("div");

balloon.className="balloon";

balloon.innerHTML="🎈";

balloon.style.left=Math.random()*100+"vw";

document.getElementById("balloons").appendChild(balloon);

setTimeout(()=>{

balloon.remove();

},8000);

},700);

}