let myBtt = document.querySelector('.bttClass');
let firstArea = document.querySelector('.textClass1');
let secondArea = document.querySelector('.textClass2');
let clear = document.querySelector('.forClear');

myBtt.addEventListener('click', firstFunc);
myBtt.addEventListener('click', secondFunc);
clear.addEventListener('click', thirdFunc);



function firstFunc() {
  let str = firstArea.value;
 
  let finArr = [];
  
   if(str === "" && secondArea.value === "") {
     alert("please fill the text area");
   } 
   
   else {
    for(var i = 0; i < str.length; i++) {
      var result = str.charCodeAt(i);
      finArr.push(result.toString(2)); //toString(2)
     }
  }
  secondArea.innerHTML = finArr.join(" ");
}



function secondFunc() {
  let binaryCode = secondArea.value;
       
    let arr2 = binaryCode.split(" ");
    let finalArr2 = [];
    for(var j = 0; j < arr2.length; j++) {
    finalArr2.push(String.fromCharCode(parseInt(arr2[j],2))); //parseInt(num, 2)
    }
  
    firstArea.innerHTML = finalArr2.join("");
}

function thirdFunc() {
  location.reload();
}