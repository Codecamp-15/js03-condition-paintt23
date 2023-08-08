
/* let a = prompt("กรุณาใส่ตัวเลข: ")

if (a < 0 ){
    alert('Positive');
}else if (a=0){ 
  alert('Zero');
}else if(a > 0){
 alert ('Negative number')
}else{
    alert('Invalid number')
} */

let num = prompt ("กรุณาใส่ตัวเลข: ")

if(num === null|| num.trim()===''||isNaN(num)){
  alert('Invalid number')
}else if (num>0){
  alert('positive')
}else if(num=0) {
 alert ('zero')
}else if(num<0){
  alert('Negative number');
}
