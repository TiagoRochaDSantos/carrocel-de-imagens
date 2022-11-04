var cont=1

function avanca(){
  cont=cont+1
if (cont>6){
  cont=6
}

   document.getElementById("foto").src=cont+".png"
}
function volta(){
  cont=cont-1
if (cont<1){
  cont=1
}

   document.getElementById("foto").src=cont+".png"
}
function inicio(){
cont=1
  
   document.getElementById("foto").src=cont+".png"
}