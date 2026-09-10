const screens = ["welcome","archive","message"];

function nextScreen(id){
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  window.scrollTo({top:0,behavior:"smooth"});
  if(id === "message") launchConfetti();
}

function restart(){
  nextScreen("welcome");
}

function launchConfetti(){
  const box = document.getElementById("confetti");
  box.innerHTML = "";
  for(let i=0;i<42;i++){
    const p=document.createElement("span");
    p.className="confetti-piece";
    p.style.left=Math.random()*100+"vw";
    p.style.setProperty("--x",(Math.random()*180-90)+"px");
    p.style.animationDelay=(Math.random()*.7)+"s";
    p.style.transform=`rotate(${Math.random()*180}deg)`;
    if(i%3===0){p.style.background="#ffd5e5"}
    if(i%3===1){p.style.background="#ff8fba"}
    if(i%3===2){p.style.background="#fff2f7"}
    box.appendChild(p);
  }
  setTimeout(()=>box.innerHTML="",2600);
}
