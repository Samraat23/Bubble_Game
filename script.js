
var timer = 60;
var score = 0;
var hitrn = 0; 


function increaseScore(){
  score += 10;
  document.querySelector("#scor").textContent = score;
}

function decreaseScore(){
  score -= 5;
  document.querySelector("#scor").textContent = score;
}


function getnewhit(){
  hitrn = Math.floor(Math.random()*10);
  document.getElementById("hit").innerHTML = hitrn;
}


function makebubble(){
  var clutter = "";

for(var  i = 1; i<=70; i++){
  var rn = Math.floor(Math.random()*10);
  clutter += `<div id="bubble">${rn}</div>`
}
var r = document.querySelector("#pbottom");
r.innerHTML = clutter;
}

function runtimer(){
     var timeint = setInterval(function(){
      if(timer > 0){
      timer--;
      document.querySelector("#timer").textContent = timer;
      }
      else{
        clearInterval(timeint);
        document.querySelector("#pbottom").innerHTML = `<h1> Game Over </h1>`;
      }
    },1000);
}

document.querySelector("#pbottom").addEventListener('click',function(des){
  var clickednum = Number(des.target.textContent)
  if(clickednum === hitrn ){
     increaseScore();
     makebubble();
     getnewhit();
  }
  else{
     decreaseScore();
     makebubble();
     getnewhit();

  }
})

runtimer();
makebubble();
getnewhit();
















