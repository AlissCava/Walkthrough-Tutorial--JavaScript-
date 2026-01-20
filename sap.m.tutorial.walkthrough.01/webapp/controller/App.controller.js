sap.ui.define(["sap/ui/core/mvc/Controller", "sap/m/MessageToast"], (Controller) => {
  "use strict";

  return Controller.extend("ui5.walkthrough.controller.App", {
    onInit() {
      //set a data model on view
      const oData = {
        recipient : {
            name : "World"
        }
      }; 
      const oMOdel = new JSONMOdel(oData);
      this.getView(). setModel(oModel);
    },

    onShowHello() {
      // show a native JavaScript alert
      MessaggeToast.show("Hello World");
    },
  });
});

/*
Integrazione Modello Dati JSON (App.controller.js):
- importa il modulo "sap/ui/model/json/JSONModel" per la gestione dei dati locali
- implementa il metodo "onInit", un hook del ciclo di vita (lifecycle) richiamato dal framework alla creazione del controller (simile a un costruttore)
- definisce un oggetto dati locale ("oData") con una struttura nidificata per il destinatario ("recipient")
- istanzia il modello JSON caricando i dati definiti
- associa il modello alla vista tramite "this.getView().setModel(oModel)", rendendo i dati accessibili ai controlli della View XML
- mantiene temporaneamente un messaggio statico nel "MessageToast" in attesa della logica di traduzione (i18n)
*/
