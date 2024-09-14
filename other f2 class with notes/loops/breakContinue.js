// break keyword


for(let i =0; i<=10; i++){
   if(i === 4){
    break;
   }

    console.log(i);
}

console.log("after break");


// continue keyword


for(let i =0; i<=10; i++){
    if(i === 4){
     continue;  // ye uper le jata h yahi se esley 4 skip ho jayega
    }
     console.log(i);  // 4 print nhi print hoga kuki continue usko uoer le gya yaha tak ane hi nahi deya
 }
 
 console.log("after loop end");