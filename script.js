randomNum = document.getElementById("random-btn");
num1 = document.getElementById("num1");
num2 = document.getElementById("num2");
num3 = document.getElementById("num3");





function generateRandomNumber() {
    let generateNum = Math.floor(Math.random() * 100) + 1; 
    return generateNum;
}

randomNum.onclick = function() {
   num1.textContent = generateRandomNumber(); 
   num1.style.backgroundColor = generateRandomColor() ; 
   num1.style.color = generateRandomColor() ; 

   num2.textContent = generateRandomNumber(); 
   num2.style.backgroundColor = generateRandomColor()
   num2.style.color = generateRandomColor() ; 

   num3.textContent = generateRandomNumber(); 
   num3.style.backgroundColor = generateRandomColor(); 
   num3.style.color = generateRandomColor() ; 
}



function generateRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}