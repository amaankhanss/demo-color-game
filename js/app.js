let coins = 1000;
let selectedColor = "";
let amount = 10;
const history = [];

const colors = ["red","green","blue","yellow"];
const tilesWrap = document.getElementById("tiles");
for(let i=69;i<=100;i++){
  const d=document.createElement("div");
  d.className="tile";
  d.textContent="F"+i;
  tilesWrap.appendChild(d);
}

function selectColor(c){ selectedColor=c; }
function setAmount(a){ amount=a; }

function playGame(){
  if(!selectedColor){ alert("Select color"); return; }
  const resultColor = colors[Math.floor(Math.random()*colors.length)];
  let res;
  if(resultColor===selectedColor){
    coins+=amount; res="WIN";
  }else{
    coins-=amount; res="LOSE";
  }
  document.getElementById("coins").innerText=coins;
  document.getElementById("coinBig").innerText=coins;
  document.getElementById("result").innerText=`${res}! Result: ${resultColor}`;

  history.unshift({c:selectedColor,a:amount,r:res});
  if(history.length>10) history.pop();
  renderHistory();
}

function renderHistory(){
  const tb=document.getElementById("history");
  tb.innerHTML="";
  history.forEach(h=>{
    const tr=document.createElement("tr");
    tr.innerHTML=`<td>${h.c}</td><td>${h.a}</td>
      <td class="${h.r==='WIN'?'win':'lose'}">${h.r}</td>`;
    tb.appendChild(tr);
  });
}
