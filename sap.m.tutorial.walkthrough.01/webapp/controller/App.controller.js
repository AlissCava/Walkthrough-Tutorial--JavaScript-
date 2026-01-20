sap.ui.define([
   "sap/ui/core/mvc/Controller"
], (Controller) => {
   "use strict";

   return Controller.extend("ui5.walkthrough.controller.App", {
      onShowHello() {
         // show a native JavaScript alert
         alert("Hello World");
      }
   });
});

/*
Implementazione Controller (App.controller.js):
- importa il modulo base sap.ui.core.mvc.Controller
- estende la classe Controller per definire la logica di business della vista
- adotta il namespace "ui5.walkthrough.controller.App" per garantire l'unicità
- definisce l'event handler "onShowHello" seguendo la convenzione del prefisso "on"
- implementa un'azione di feedback immediato tramite un alert JavaScript nativo
*/