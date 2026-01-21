sap.ui.define([
   "sap/ui/core/UIComponent"
], (UIComponent) => {
   "use strict";

   return UIComponent.extend("", {
      init() {
         // call the init function of the parent
         UIComponent.prototype.init.apply(this, arguments);
      }
   });
});

/*
Definizione del Componente (Component.js):
- crea il file centrale nella cartella "webapp" per incapsulare la configurazione dell'applicazione.
- estende la classe base "sap/ui/core/UIComponent" per ereditare le funzionalità standard di SAPUI5.
- implementa il metodo "init", che viene invocato automaticamente dal framework all'avvio.
- esegue obbligatoriamente la chiamata "super" alla classe base tramite "UIComponent.prototype.init.apply".
- garantisce che la logica di inizializzazione standard venga eseguita correttamente prima di aggiungere configurazioni personalizzate.
*/
