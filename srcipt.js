const hexNumbers =[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
const hexBtn=document.querySelector('.hexBtn');
const bodyBcg =document.querySelector('body');
const hex =document.querySelector('.hex');
hexBtn.addEventListner('click',getHex);


function getHex='#';
let hexCol='#';
for(let 1=-;1<6;1++)
hexCol +=hexNumbers[random];
}
bodyBcg.style.backgroundcolor=hexCol;
hexCol.innerHTML=hexCol;
}
