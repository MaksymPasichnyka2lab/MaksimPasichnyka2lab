function calc(){
  var num1=document.getElementById('num1').value;
  var num2=document.getElementById('num2').value;
  num1=parseInt(num1);
  num2=parseInt(num2);
  
  var result=num1+num2;
  document.getElementById('result').innerHTML=result;
}
function calc1(){
  var num1=document.getElementById('num1').value;
  var num2=document.getElementById('num2').value;
  num1=parseInt(num1);
  num2=parseInt(num2);
  
  var result=num1-num2;
  document.getElementById('result').innerHTML=result;
}
function calc2(){
  var num1=document.getElementById('num1').value;
  var num2=document.getElementById('num2').value;
  num1=parseInt(num1);
  num2=parseInt(num2);
  
  var result=num1*num2;
  document.getElementById('result').innerHTML=result;
}
function calc3(){
  var num1=document.getElementById('num1').value;
  var num2=document.getElementById('num2').value;
  num1=parseInt(num1);
  num2=parseInt(num2);
  
  var result=num1/num2;
  document.getElementById('result').innerHTML=result;
}
