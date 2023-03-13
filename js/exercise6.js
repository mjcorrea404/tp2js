let num = 1;
for(let i = 1; i <= 5; i++) {    
  let row = "";
  for(let j = 1; j <= i; j++) {  
    row += num + " ";
    num++;
    if(num > 30) break;          
  }
  console.log(row);
  if(num > 30) break;            
}
