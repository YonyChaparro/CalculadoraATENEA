
function renderizarGUI() {
   // 1. Crear elemento
   const divCalculadora = document.createElement("div");
   //2.Agregar atributos
   divCalculadora.setAttribute("id", "calculadora");
   divCalculadora.setAttribute("style", "width:50% text-aling: center");
   divCalculadora.setAttribute("class","text-center")

   //3. Insertar relemento en el DOM
   document.body.appendChild(divCalculadora);



   //Div pantalla
   const divPantalla = document.createElement("div");
   divPantalla.setAttribute("id", "divPantalla");
   divCalculadora.setAttribute("class", "form-control text-rigth")
   document.body.appendChild(divPantalla);

   //pantalla
   const Pantalla = document.createElement("input");

   Pantalla.setAttribute("id", "Pantalla");
   Pantalla.setAttribute("type", "text");
   Pantalla.setAttribute("value", "0");
   Pantalla.setAttribute("class", "form-control text-right")
   Pantalla.setAttribute("disabled", "true");
   
   document.body.appendChild(Pantalla);
}

renderizarGUI();

