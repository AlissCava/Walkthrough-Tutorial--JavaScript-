sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], (Controller, JSONModel) => {
	"use strict";

	return Controller.extend("ui5.walkthrough.controller.InvoiceList", {
		onInit() {
			const oViewModel = new JSONModel({
				currency: "EUR"
			});
			this.getView().setModel(oViewModel, "view");
		}
	});
});

/*
Controller della Lista Fatture (InvoiceList.controller.js):
- gestisce la logica specifica per la visualizzazione delle fatture.
- nel metodo "onInit", crea un "View Model" (modello JSON locale) per memorizzare impostazioni di configurazione della vista.
- definisce la proprietà "currency" (impostata su "EUR") per sopperire alla mancanza di informazioni sulla valuta nel modello dati principale.
- assegna il modello alla vista con il nome "view" per permetterne il binding nel file XML.
- segue la convenzione SAPUI5 di preferire l'uso dei Data Types (come Currency) rispetto ai formattatori personalizzati per la gestione dei dati.
*/