sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	"sap/m/MessageToast"
], (Controller, History, MessageToast) => {
	"use strict";

	return Controller.extend("ui5.walkthrough.controller.Detail", {
		
		onInit() {
			const oRouter = this.getOwnerComponent().getRouter();
			oRouter.getRoute("detail").attachPatternMatched(this.onObjectMatched, this);
		},

		onObjectMatched(oEvent) {
			// Reset del custom control per permettere una nuova votazione
			this.byId("rating").reset();

			this.getView().bindElement({
				path: "/" + window.decodeURIComponent(oEvent.getParameter("arguments").invoicePath),
				model: "invoice"
			});
		},

		onNavBack() {
			const oHistory = History.getInstance();
			const sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				const oRouter = this.getOwnerComponent().getRouter();
				oRouter.navTo("overview", {}, true);
			}
		},

		onRatingChange(oEvent) {
			// Recupera il valore dal parametro dell'evento personalizzato
			const fValue = oEvent.getParameter("value");
			const oResourceBundle = this.getView().getModel("i18n").getResourceBundle();

			// Mostra un messaggio di conferma con il voto ricevuto
			MessageToast.show(oResourceBundle.getText("ratingConfirmation", [fValue]));
		}
	});
});

/*
Integrazione del Custom Control nel Controller (Detail.controller.js):
- MessageToast: caricata come dipendenza per fornire un feedback visivo immediato all'utente dopo la votazione.
- onObjectMatched: include ora la chiamata a .reset() sul controllo "rating". Questo è fondamentale perché, navigando tra diverse fatture, il controllo deve tornare allo stato iniziale (non votato).
- onRatingChange: gestisce l'evento personalizzato "change" definito nel metadata del ProductRating. 
- oEvent.getParameter("value"): dimostra come i dati passati dal custom control tramite fireEvent siano facilmente accessibili nel controller della vista.
- User Experience: l'uso del MessageToast permette di simulare il salvataggio dei dati senza la complessità di una chiamata API reale, mantenendo l'esempio focalizzato sull'interazione tra componenti.
*/