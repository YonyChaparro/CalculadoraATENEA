/*/TODO: BOTÓN PARTA BORRAR PANTALLA
HACER UN CATCH PARA MANEJAR LA EXCEPCIÓN DE LA EXPRECIÓN NO VÁLIDA
*/

function renderizarGUI() {

   var Botones=["7","8","9","*","4","5","6","+","1","2","3","-","0","/",".","="]

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

   for (let i = 0; i < Botones.length; i++) {

      //Creamos las filas
      if (i%4==0) {
         const divfila=document.createElement("div")
         divfila.setAttribute("class", "row")
         divBotones.appendChild(divfila)
      }

      let Boton=document.createElement("button");
      Boton.setAttribute("id","boton"+Botones[i]);
      Boton.innerHTML=Botones[i]
      Boton.setAttribute("class", "btn")
      Boton.setAttribute("class", "btn btn-light col-3 border-white")

      divBotones.appendChild(Boton)
      divCalculadora.appendChild(Boton);

      //Agregar un escuchador de eventos 
      Boton.addEventListener("click", function() {  
         procesarEvento(Boton);
      });

      divBotones.lastChild.appendChild(Boton)

   }
}

function procesarEvento(Boton) {
   let miPantalla=document.getElementById("Pantalla");
   if (miPantalla.value=="0") {
      miPantalla.value="";
   }
   if (Boton.innerHTML != "=") {
      miPantalla.value+=Boton.innerHTML;
   }else{
      //Evaluar la expreción con Math.js
      let resultado=math.evaluate(miPantalla.value);
      miPantalla.value=resultado;
   }
}

renderizarGUI();

