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
		}
	});
});

/*
Logica di Filtraggio della Lista (InvoiceList.controller.js):
- importa "sap/ui/model/Filter" e "sap/ui/model/FilterOperator" per gestire la ricerca.
- implementa la funzione "onFilterInvoices" attivata dall'evento di ricerca.
- recupera la stringa digitata dall'utente tramite "oEvent.getParameter('query')".
- crea un oggetto Filtro che cerca la corrispondenza (non sensibile alle maiuscole) nel campo "ProductName".
- utilizza "this.byId('invoiceList')" per individuare correttamente la lista nella vista tramite il suo ID.
- accede al binding dell'aggregazione "items" e applica il filtro per aggiornare dinamicamente i dati visualizzati.
- garantisce che, se la ricerca è vuota, la lista venga resettata mostrando tutti gli elementi.
*/