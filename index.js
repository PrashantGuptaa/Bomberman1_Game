let cont = document.getElementById('container');
let score = document.getElementById('score');
let msg = document.getElementById('congo');
let reset = document.getElementById('restart');
let roller = document.getElementById('pass');
let random = [];
let sc = 0;
let gameover = false;

const genrateRandomNum =() =>{
for(let i = 0; i < 9 ; i++){
  let ran1 =  Math.ceil(Math.random() * 10 );
  let ran2 =  Math.ceil(Math.random() * 10 );
random[i] = ran1*ran2;
}
}
console.log(random);

const board = () =>{
  gameover = false;
  reset.style.display = 'none';
  roller.style.display = 'flex';
  let idman = 1;
for(let i = 1 ; i < 10 ; i++){
let rowEl = document.createElement('div');
rowEl.className = 'row';
for(let j = 1; j < 10 ; j++){
  let boxEl = document.createElement('div');
  boxEl.className = 'box';
  boxEl.setAttribute('id', idman.toString());
  boxEl.addEventListener('click',(event) => handleclick(boxEl));
  boxEl.value = idman;
  rowEl.appendChild(boxEl);
 idman++;
}
cont.appendChild(rowEl);
}
genrateRandomNum();
}

const handleclick = (boxEl) =>{
if(gameover)
return;
if(boxEl.value === 0)
return;
  let val = boxEl.value;
  val = Number(val) ;
  console.log(val);
  if(Blast(val)){
boxEl.style.backgroundColor = '#FF0080';
gameover = true;
setTimeout(()=>{
  roller.style.display = 'none';
  modal.style.display = 'flex';
  reset.style.display = 'flex';
 }, 100);
  }
else{
sc++;
boxEl.style.backgroundColor = '#7303c0';
boxEl.value = 0;
score.innerHTML = `Score: ${sc}`;
if(sc === 71){
  msg.innerHTML = 'Congrats, You won the Game';
  setTimeout(()=>{
    modal.style.display = 'flex';
   }, 100);
 // alert('You Won');
  gameover = true;
}
}
}

const Blast = (boom) => {
for(let i = 0 ;  i < 9 ; i++){
if(boom ===random[i])
return true;
}
return false;
}

const restart = () =>{
cont.innerHTML = '';
sc = 0;
score.innerHTML = `Score: ${sc}`;
board();
}


let animation = ()=>{
anime({
  targets: '#pass',
 left: '240px',
  translateX : 300,
  borderRadius: ['40%', '80%'],
  loop: true,
  direction: 'alternate',
  rotateZ: 2000,
  duration: 1500,
  easing: 'easeInOutSine'
});
}

board();
animation();

