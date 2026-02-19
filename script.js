// 26 March 7PM IST -> 13:30 UTC
const target = new Date("2026-03-26T13:30:00Z");

let d=document.getElementById("d"),
h=document.getElementById("h"),
m=document.getElementById("m"),
s=document.getElementById("s"),
boom=document.getElementById("boom"),
done=false;

function update(){
let diff=target-new Date();
if(diff<=0){
if(!done){done=true;boom.classList.add("show")}
d.textContent=h.textContent=m.textContent=s.textContent=0;
return;
}
let sec=Math.floor(diff/1000);
d.textContent=Math.floor(sec/86400);
h.textContent=Math.floor((sec%86400)/3600);
m.textContent=Math.floor((sec%3600)/60);
s.textContent=sec%60;
}
setInterval(update,1000);
update();
