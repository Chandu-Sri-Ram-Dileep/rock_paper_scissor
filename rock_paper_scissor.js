function function2(){
    let k=Math.random() ;
    let computermove;
       if(k<=1/3){
           computermove='rock';
       }
       else if(k>1/3 && k<=2/3){
           computermove='paper';
       }
       else{
           computermove='scissor';
       }
       return computermove;
   }
 function function3(){
   localStorage.removeItem('score');
     score.wins=0;
     score.loses=0;
     score.ties=0;
     document.querySelector('.jio').innerHTML=`Wins:${score.wins}  Loses:${score.loses} Ties:${score.ties}`;

 }
 let score=JSON.parse(localStorage.getItem('score'))|| {
     wins:0,
     loses:0,
     ties:0
   };
   document.querySelector('.jio').innerHTML=`Wins:${score.wins}  Loses:${score.loses} Ties:${score.ties}`;

 function play(playermove) {
    let computermove=function2();
    let result;
     if(playermove==computermove){
       score.ties+=1;
       result='tie'
     }
     else if((playermove=='rock'&& computermove=='paper')|| (playermove=='paper'&& computermove=='scissor')||(playermove=='scissor'&& computermove=='rock')){
       score.loses+=1;
       result='you lose'
     }
     else{
       score.wins+=1;
       result= 'you win'
     }
     localStorage.setItem('score',JSON.stringify(score));
     document.querySelector('.jio').innerHTML=`Wins:${score.wins}  Loses:${score.loses} Ties:${score.ties}`;
     document.querySelector(`.kia`).innerHTML=`
     you
<img class="pga1" src="${playermove}.jpeg">
VS
<img class="pga2" src="${computermove}.jpeg">
computer`;
     document.querySelector(`.mia`).innerHTML=`${result}`;
    /* alert("players move:"+ playermove + "\ncomputer's move:"+ computermove + "\nWins:"+ score.wins+ "\nloses:"+score.loses+ "\nties:"+score.ties);*/
 }
   
