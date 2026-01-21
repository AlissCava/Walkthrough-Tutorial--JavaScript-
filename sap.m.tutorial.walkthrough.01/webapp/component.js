sap.ui.define([
   "sap/ui/core/UIComponent",
   "sap/ui/model/json/JSONModel",
   "sap/ui/model/resource/ResourceModel"
], (UIComponent, JSONModel, ResourceModel) => {
   "use strict";

   return UIComponent.extend("ui5.walkthrough.Component", {
      metadata : {
         "interfaces": ["sap.ui.core.IAsyncContentCreation"],
         "rootView": {
            "viewName": "ui5.walkthrough.view.App",
            "type": "XML",
            "id": "app"
         }
      },

      init() {
         // call the init function of the parent
         UIComponent.prototype.init.apply(this, arguments);
         // set data model
         const oData = {
            recipient : {
               name : "World"
            }
         };
         const oModel = new JSONModel(oData);
         this.setModel(oModel);

         // set i18n model
         const i18nModel = new ResourceModel({
            bundleName: "ui5.walkthrough.i18n.i18n"
         });
         this.setModel(i18nModel, "i18n");
      }
   });
});

/*
Evoluzione del Componente (Component.js):
- divide la struttura in due sezioni: "metadata" per la configurazione e "init" per la logica di avvio.
- definisce la "rootView" nei metadati, delegando al componente la gestione automatica della vista principale.
- implementa l'interfaccia "sap.ui.core.IAsyncContentCreation" per abilitare il caricamento asincrono di vista e navigazione.
- centralizza l'istanziazione dei modelli (JSON e i18n), spostandoli dal controller al componente per una gestione globale.
- associa i modelli direttamente al componente ("this.setModel"), garantendo che la vista e i controlli annidati li ereditino automaticamente.
- richiama obbligatoriamente il metodo init della classe base tramite "UIComponent.prototype.init.apply".
*/