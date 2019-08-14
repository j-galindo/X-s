function XO(str) {
  let x=0;
  let o=0;
  str=str.toLowerCase();
  for(i=0; i<str.length;i++){
  
  switch (str[i]){
    case 'x':
      x++;
    break;
    case 'o':
      o++;
    break;
    }  
    
} 



//   for(i=0; i<str.length;i++){
//   switch (str[i]){
//     case 'y':
//       y++;
//     break;
//     }
    
// } 
if (x === o){
  return(true);
}

return(false);

console.log(x);
console.log(o);
// return str
}