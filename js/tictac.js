//value >
const td11=document.querySelector("#td11");
const td12=document.querySelector("#td12");
const td13=document.querySelector("#td13");
const td21=document.querySelector("#td21");
const td22=document.querySelector("#td22");
const td23=document.querySelector("#td23");
const td31=document.querySelector("#td31")
const td32=document.querySelector("#td32");
const td33=document.querySelector("#td33");
const boxes=document.querySelectorAll(".box");
const result=document.querySelector("#result")
const reset = document.querySelector('#reset')
const table = document.querySelector('#table')
//value <

//click in box >
let turn=0;
for (const box of boxes){
   box.addEventListener('click',function(){
      if (turn==0){
         if (box.innerText==""){
            box.innerText="O"
            result.innerText="Player X Turn";
            turn=1
         }
         // else{
         //    console.log("no!")
         // }
         
      }
      else{
         if (box.innerText==""){
            box.innerText="X"
            result.innerText="Player O Turn";
            turn=0
         } 
         // else{
         //    console.log("no!")
         // }

      }
      if (td11.innerText==="O" && td12.innerText==="O" && td13.innerText==="O"){result.innerText="O is winner"} 
      else if (td21.innerText==="O" && td22.innerText==="O" && td23.innerText==="O"){result.innerText="O is winner"} 
      else if (td31.innerText==="O" && td32.innerText==="O" && td33.innerText==="O"){result.innerText="O is winner"} 
      else if (td11.innerText==="O" && td21.innerText==="O" && td31.innerText==="O"){result.innerText="O is winner"} 
      else if (td12.innerText==="O" && td22.innerText==="O" && td32.innerText==="O"){result.innerText="O is winner"} 
      else if (td13.innerText==="O" && td23.innerText==="O" && td33.innerText==="O"){result.innerText="O is winner"} 
      else if (td11.innerText==="O" && td22.innerText==="O" && td33.innerText==="O"){result.innerText="O is winner"} 
      else if (td13.innerText==="O" && td22.innerText==="O" && td31.innerText==="O"){result.innerText="O is winner"}
      else if (td11.innerText==="X" && td12.innerText==="X" && td13.innerText==="X"){result.innerText="X is winner"} 
      else if (td21.innerText==="X" && td22.innerText==="X" && td23.innerText==="X"){result.innerText="X is winner"} 
      else if (td31.innerText==="X" && td32.innerText==="X" && td33.innerText==="X"){result.innerText="X is winner"} 
      else if (td11.innerText==="X" && td21.innerText==="X" && td31.innerText==="X"){result.innerText="X is winner"} 
      else if (td12.innerText==="X" && td22.innerText==="X" && td32.innerText==="X"){result.innerText="X is winner"} 
      else if (td13.innerText==="X" && td23.innerText==="X" && td33.innerText==="X"){result.innerText="X is winner"} 
      else if (td11.innerText==="X" && td22.innerText==="X" && td33.innerText==="X"){result.innerText="X is winner"} 
      else if (td13.innerText==="X" && td22.innerText==="X" && td31.innerText==="X"){result.innerText="X is winner"} 
      else if ((td11.innerText==="X" || td11.innerText==="O") && (td12.innerText==="X" || td12.innerText==="O") && (td13.innerText==="X" || td13.innerText==="O") && (td21.innerText==="X" || td21.innerText==="O") && (td22.innerText==="X" || td22.innerText==="O") && (td23.innerText==="X" || td23.innerText==="O") && (td31.innerText==="X" || td31.innerText==="O") && (td32.innerText==="X" || td32.innerText==="O") && (td33.innerText==="X" || td33.innerText==="O")){
         result.innerText="DRAW !!"
      }
     
   })
}


//click in box <

//reset button >
reset.addEventListener('click',function(){
   td11.innerText=""
   td12.innerText=""
   td13.innerText=""
   td21.innerText=""
   td22.innerText=""
   td23.innerText=""
   td31.innerText=""
   td32.innerText=""
   td33.innerText=""
   result.innerText=""
})
//reset button <

//rough
// if (result.innerText !=="O is winner" || result.innerText !=="X is winner"){

// }else{
   
// }