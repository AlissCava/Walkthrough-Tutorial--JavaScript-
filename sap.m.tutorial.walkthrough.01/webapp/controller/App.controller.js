sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/m/MessageToast"
], (Controller) => {
   "use strict";

   return Controller.extend("ui5.walkthrough.controller.App", {
      onShowHello() {
         // show a native JavaScript alert
         MessaggeToast.show("Hello World");
      }
   });
});

/*
Evoluzione Controller con MessageToast (App.controller.js):
- estende le dipendenze includendo il modulo "sap/m/MessageToast"
- sfrutta la sintassi AMD (Asynchronous Module Definition) per separare il caricamento dei moduli dall'esecuzione, migliorando le performance
- mappa i moduli caricati su parametri della funzione callback (es. MessageToast) per un accesso semplificato senza namespace
- utilizza "sap.ui.define" per dichiarare un namespace globale che renda il controller rintracciabile nell'app
- sostituisce l'alert nativo con "MessageToast.show", offrendo un feedback utente moderno e non bloccante
*/
