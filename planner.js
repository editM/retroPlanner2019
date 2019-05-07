//data sot tn anash
var emratMuaj = ["Janar", "Shkurt", "Mars", "Prill", "Maj", "Qershor",
  "Korrik", "Gusht", "Shtator", "Tetor", "Nentor", "Dhjetor"
];
var sot = new Date;
var dita = sot.getDate();
if(dita<10) {
    dita = '0'+dita;
}
var monthi = emratMuaj[sot.getMonth()];
var year = sot.getYear();
var hour = sot.getHours();
if(hour<10) {
    hour = '0'+hour;
}
var min = sot.getMinutes();
if(min<10) {
    min = '0'+min;
}
var dataplot = dita + ' ' + monthi + ', Ora ' + hour + ':' + min;
document.getElementById("tani").innerHTML=dataplot;

//gjetja e muajit
var d = new Date();
var clicks = d.getMonth();
var slideIndex = clicks+1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("muaj");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
   }
  x[slideIndex-1].style.display = "block";  
}


var message = "Janar";
   if(clicks==1)
   {message ="Shkurt";}
    else if(clicks==2)
   {message ="Mars";}
else if(clicks==3)
   {message ="Prill";}
else if(clicks==4)
   {message ="Maj";}
else if(clicks==5)
   {message ="Qershor";}
else if(clicks==6)
   {message ="Korrik";}
else if(clicks==7)
   {message ="Gusht";}
else if(clicks==8)
   {message ="Shtator";}
else if(clicks==9)
   {message ="Tetor";}
else if(clicks==10)
   {message ="Nentor";}
  else if(clicks==11)
     {message = "Dhjetor";}
  else if(clicks==12||clicks==(-1)){
  clicks = 0;
 }
   document.getElementById("currentmonth").innerHTML = message;

 function emriMuajit(n) {
   clicks +=1;
   var message = "Janar";
   if(clicks==1)
   {message ="Shkurt";}
    else if(clicks==2)
   {message ="Mars";}
else if(clicks==3)
   {message ="Prill";}
else if(clicks==4)
   {message ="Maj";}
else if(clicks==5)
   {message ="Qershor";}
else if(clicks==6)
   {message ="Korrik";}
else if(clicks==7)
   {message ="Gusht";}
else if(clicks==8)
   {message ="Shtator";}
else if(clicks==9)
   {message ="Tetor";}
else if(clicks==10)
   {message ="Nentor";}
  else if(clicks==11)
     {message = "Dhjetor";}
  else if(clicks==12||clicks==(-1)){
 	clicks = 0;
 }
   document.getElementById("currentmonth").innerHTML = message;

 };

 function emriMuajitm(n) {
   clicks -=1;
   var message = "Janar";
   if(clicks==1)
   {message ="Shkurt";}
    else if(clicks==2)
   {message ="Mars";}
else if(clicks==3)
   {message ="Prill";}
else if(clicks==4)
   {message ="Maj";}
else if(clicks==5)
   {message ="Qershor";}
else if(clicks==6)
   {message ="Korrik";}
else if(clicks==7)
   {message ="Gusht";}
else if(clicks==8)
   {message ="Shtator";}
else if(clicks==9)
   {message ="Tetor";}
else if(clicks==10)
   {message ="Nentor";}
  else if(clicks==11)
     {message = "Dhjetor";}
  else if(clicks==(-1)){
  	message="Dhjetor";
 	clicks = 11;
 }
   document.getElementById("currentmonth").innerHTML = message;

 };


 // butoni aktiv
var header = document.getElementById("datat");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  document.getElementById("comment").style.display = "none";
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });

}

document.getElementById(message).getElementsByTagName('button')[(new Date()).getDate() - 1].className += ' active';

//forma vizible/invisible
document.getElementById("comment").style.display = "none";


function vizibel(){
  document.getElementById("comment").style.display = "block";
}


//savimi
function afisho(){
  var a=document.getElementById("titull").value;
  if(a==""){
    alert("Ju lutem plotesoni vendet bosh!");
    return;
  }
  else{
  var header2 = document.getElementById("datat");
var btns2 = header2.getElementsByClassName("btn");
for (var j = 0; j < btns.length; j++) {
  var current2 = document.getElementsByClassName("active");
  current2[0].id = "eventi";
}
  var keeper=document.getElementById("eventi");
  var sav = document.createElement("p");
  var tekst = document.createTextNode(a);
  sav.appendChild(tekst);
  document.body.appendChild(sav);
  sav.style.display="none";
  keeper.appendChild(sav);
  keeper.style.backgroundColor="#33cc33";
  current2[0].id = "";
  document.getElementById("titull").value="";
}
}
//zhdukja e paragrafit ne klikimin e dates tjtr
 var header3 = document.getElementById("datat");
var btns3 = header3.getElementsByClassName("btn");
for (var k = 0; k < btns.length; k++) {
  btns[k].addEventListener("click", function() {
    var current3 = document.getElementsByClassName("active")[0];
    if (current3.childNodes.length > 1) {
      for(var l=0; l<current3.getElementsByTagName("P").length; l++){
  var merre = current3.getElementsByTagName("P")[l].innerHTML;
  document.getElementById('futuru').innerHTML=merre;
  document.getElementById("futuru").style.display = "block";
}
}
else{
  document.getElementById("futuru").style.display = "none";
}
  });
}