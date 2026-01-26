sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], (Controller, JSONModel, Filter, FilterOperator) => {
	"use strict";

	return Controller.extend("ui5.walkthrough.controller.InvoiceList", {

		// ... altri metodi ...

		onPress(oEvent) {
			const oItem = oEvent.getSource();
			const oRouter = this.getOwnerComponent().getRouter();
			oRouter.navTo("detail", {
				invoicePath: window.encodeURIComponent(oItem.getBindingContext("invoice").getPath().substring(1))
			});
		}
	});
});

/*
Gestione della navigazione con parametri (InvoiceList.controller.js):
- oEvent.getSource(): identifica esattamente quale elemento della lista (ObjectListItem) è stato cliccato dall'utente.
- getBindingContext("invoice"): recupera l'oggetto di contesto legato al modello delle fatture per l'elemento specifico.
- getPath().substring(1): ottiene il percorso dei dati (es. "Invoices/2") rimuovendo la barra iniziale "/", poiché i caratteri speciali non sono ammessi direttamente negli URL.
- encodeURIComponent: codifica il percorso per garantire che l'URL generato sia valido e sicuro per il browser.
- navTo("detail", {...}): istruisce il router a passare alla vista di dettaglio inviando il percorso dell'item come parametro "invoicePath".
- Deep Linking: questa tecnica permette non solo di navigare, ma anche di creare un URL univoco che l'utente può copiare o salvare nei segnalibri per tornare esattamente a quella fattura.
*/
