sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], (Controller, JSONModel, Filter, FilterOperator) => {
	"use strict";

	return Controller.extend("ui5.walkthrough.controller.InvoiceList", {
		onInit() {
			const oViewModel = new JSONModel({
				currency: "EUR"
			});
			this.getView().setModel(oViewModel, "view");
		},

		onFilterInvoices(oEvent) {
			// build filter array
			const aFilter = [];
			const sQuery = oEvent.getParameter("query");
			if (sQuery) {
				aFilter.push(new Filter("ProductName", FilterOperator.Contains, sQuery));
			}

			// filter binding
			const oList = this.byId("invoiceList");
			const oBinding = oList.getBinding("items");
			oBinding.filter(aFilter);
		},

		onPress() {
			const oRouter = this.getOwnerComponent().getRouter();
			oRouter.navTo("detail");
		}
	});
});

/*
Gestione della navigazione nel Controller (InvoiceList.controller.js):
- onPress: definisce la funzione che viene richiamata quando l'utente clicca su un elemento della lista delle fatture.
- getRouter: recupera l'istanza del router globale attraverso il componente principale dell'app (Owner Component).
- navTo: esegue la navigazione verso la rotta denominata "detail", come configurato nel file manifest.json.
- Integrazione: questo metodo trasforma una semplice interazione della lista in un cambio di stato dell'applicazione, aggiornando l'URL.
- Best Practice: l'uso di nomi di rotte logiche ("detail") invece di percorsi file fisici rende il sistema di navigazione flessibile e facile da mantenere.
*/