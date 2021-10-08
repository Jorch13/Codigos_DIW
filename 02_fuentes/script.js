function cambiarColorDeFondo(){
    document.getElementById("cuerpo").classList.add("fondoNaranja");
}
 
window.onload=function(){
    document.getElementById("idTitulo").addEventListener('click',cambiarColorDeFondo);
}