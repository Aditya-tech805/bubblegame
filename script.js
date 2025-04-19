var timer=60;
var Score=0;

var hitrun;

function bubblecreate(){
   
var clutter = "";
 
for( var i=1 ; i<=128; i++){
   var rn=Math.floor(Math.random()*10);
   clutter +=`<div class="bubble">${rn}</div>`;
}
document.querySelector("#panelbtm").innerHTML =clutter;
};


function runtimer(){
  var timerint = setInterval(()=>{
    if(timer>0){
      timer--;
      document.querySelector("#timeval").textContent =timer;
    }
    else{
      clearInterval(timerint);
      document.querySelector("#panelbtm").innerHTML=`<h1>Game Over</h1> `;
      document.querySelector("#reset").style.display ="inline-block";
      
    }
   },1000)
}

function chalhitmar(){
   hitrun = Math.floor(Math.random()*10);
   document.querySelector("#hitval").innerHTML =hitrun;
}
 
function increaseScore(){
   Score +=10;
   document.querySelector("#Scoreval").textContent =Score;
}

document.querySelector("#panelbtm")
.addEventListener("click",function(dets){
   var numbercliked = Number(dets.target.textContent);
   if(hitrun === numbercliked){
      increaseScore();
      bubblecreate();
      chalhitmar();
   }
});

document.querySelector("#reset")
.addEventListener("click", function(){
   Score = 0;
   timer = 60;
   document.querySelector("#Scoreval").textContent = Score;
   document.querySelector("#timeval").textContent = timer;
   this.style.display = "none"; 
   reset();
})



function reset(){
   bubblecreate();
   runtimer();
   chalhitmar();
}

bubblecreate();
runtimer();
chalhitmar();


