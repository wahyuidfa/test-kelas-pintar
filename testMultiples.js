function findMulitiples(n) {
 

   for(let i = 3; i<30; i++){
       if(i % 3 == 0 && i % 7 ==0) {
           console.log("Z")
       } else console.log(i)
   }

}
findMulitiples(13)