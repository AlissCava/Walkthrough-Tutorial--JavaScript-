sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel"
], (Controller, History, MessageToast, JSONModel) => {
	"use strict";

	return Controller.extend("ui5.walkthrough.controller.Detail", {
		onInit() {
			const oViewModel = new JSONModel({
				currency: "EUR"
			});
			this.getView().setModel(oViewModel, "view");

			const oRouter = this.getOwnerComponent().getRouter();
			oRouter.getRoute("detail").attachPatternMatched(this.onObjectMatched, this);
		},

		// ... altri metodi (onObjectMatched, onNavBack, onRatingChange) ...
	});
});

/*
Integrazione del View Model Locale (Detail.controller.js):
- JSONModel: istanzia un modello locale specifico per questa vista, utilizzato per memorizzare stati dell'interfaccia o parametri di configurazione (come la valuta).
- Named Model ("view"): assegna il nome "view" al modello per distinguerlo dai dati di business (come "invoice" o "i18n") durante il binding XML.
- Coerenza UI: l'aggiunta della proprietà "currency" permette ai formattatori della pagina di dettaglio di visualizzare i prezzi con lo stesso formato utilizzato nella lista principale.
- Encapsulation: questo modello è limitato alla sola vista Detail; eventuali modifiche qui non influenzeranno altre parti dell'applicazione.
- Ciclo di Vita: il modello viene creato durante l'onInit, garantendo che sia disponibile prima che la vista venga renderizzata o che i dati della fattura vengano caricati.
*/