function gst(){
 var cost =  document.getElementById("gst").value;
 var sel =  document.getElementById("sel").value;
 var  Amount = parseFloat( cost * sel ) / 100;
 var Price = parseFloat(cost) + Amount; 
var persentage = document.getElementById('sum').innerHTML=Price;
}


