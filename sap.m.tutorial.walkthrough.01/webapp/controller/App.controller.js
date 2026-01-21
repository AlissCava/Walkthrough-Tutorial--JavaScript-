sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/MessageToast"
], (Controller, MessageToast) => {
  "use strict";

  return Controller.extend("ui5.walkthrough.controller.App", {
    onShowHello() {
      // read msg from i18n model
      const oBundle = this.getView().getModel("i18n").getResourceBundle();
      const sRecipient = this.getView().getModel().getProperty("/recipient/name");
      const sMsg = oBundle.getText("helloMsg", [sRecipient]);

      // show message
      MessageToast.show(sMsg);
    }
  });
});

/*
Gestione Avanzata Modelli e Localizzazione (App.controller.js):
- importa ResourceModel per gestire il bundle dei testi e JSONModel per i dati applicativi.
- nel metodo "onInit", istanzia il ResourceModel puntando a "ui5.walkthrough.i18n.i18n" (namespace + cartella + nome file).
- configura il modello i18n come "modello nominato" (chiave "i18n") per permetterne l'uso parallelo con il modello JSON predefinito.
- in "onShowHello", accede al Resource Bundle tramite il metodo "getResourceBundle" per estrarre i testi tradotti.
- recupera dinamicamente il valore dell'input dal modello JSON usando "getProperty("/recipient/name")".
- utilizza il metodo "getText" passando un array di stringhe per sostituire i segnaposto (es. {0}) con dati variabili.
- sfrutta il meccanismo di fallback di SAPUI5 che, a runtime, tenta di caricare il file i18n specifico per la lingua del browser prima di usare quello di default.
- visualizza il messaggio finale composto e localizzato attraverso il MessageToast.
*/
