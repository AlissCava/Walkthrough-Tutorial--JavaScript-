sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], (Controller, MessageToast) => {
    "use strict";

    return Controller.extend("ui5.walkthrough.controller.HelloPanel", {
        onShowHello() {
            // read msg from i18n model
            const oBundle = this.getView().getModel("i18n").getResourceBundle();
            const sRecipient = this.getView().getModel().getProperty("/recipient/name");
            const sMsg = oBundle.getText("helloMsg", [sRecipient]);

            // show message
            MessageToast.show(sMsg);
        },

        async onOpenDialog() {
            // create dialog lazily
            this.oDialog ??= await this.loadFragment({
                name: "ui5.walkthrough.view.HelloDialog"
            });
        
            this.oDialog.open();
        }
    });
});

/*
Gestione Dialogo Asincrono e Riutilizzabile (HelloPanel.controller.js):
- implementa la funzione "onOpenDialog" con logica asincrona tramite "async/await".
- applica il caricamento "lazy" (pigro): il frammento viene creato solo la prima volta che l'utente preme il pulsante.
- utilizza l'API "loadFragment" per caricare il file XML del dialogo in modo asincrono.
- memorizza l'istanza del dialogo ("this.oDialog") per evitare di ricaricarla ad ogni clic, migliorando le prestazioni.
- suggerisce l'uso di un "BaseController" personalizzato per condividere funzioni comuni tra diversi controller.
*/