
function renderizarGUI() {
   // 1. Crear elemento
   const divCalculadora = document.createElement("div");
   //2.Agregar atributos
   divCalculadora.setAttribute("id", "calculadora");
   divCalculadora.setAttribute("class", "text-center")
   divCalculadora.setAttribute("style", "width: 50%; margin:0 auto");
   //3. Insertar relemento en el DOM
   document.body.appendChild(divCalculadora);

   //Div pantalla
   const divPantalla = document.createElement("div");
   divPantalla.setAttribute("id", "divPantalla");


   divCalculadora.appendChild(divPantalla);

   //pantalla
   const Pantalla = document.createElement("input");

   Pantalla.setAttribute("id", "Pantalla");
   Pantalla.setAttribute("type", "text");
   Pantalla.setAttribute("value", "0");
   Pantalla.setAttribute("class", "form-control text-right");
   Pantalla.setAttribute("disabled", "true");
   divPantalla.appendChild(Pantalla);

   //divBotones
   const divBotones=document.createElement("div");
   divBotones.setAttribute("id","divBotones");
   divCalculadora.appendChild(divBotones)
}

renderizarGUI();

