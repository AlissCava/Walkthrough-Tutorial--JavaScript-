sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History"
], (Controller, History) => {
	"use strict";

	return Controller.extend("ui5.walkthrough.controller.Detail", {

		onInit() {
			const oRouter = this.getOwnerComponent().getRouter();
			oRouter.getRoute("detail").attachPatternMatched(this.onObjectMatched, this);
		},

		onObjectMatched(oEvent) {
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
		}
	});
});

/*
Controller della Vista di Dettaglio (Detail.controller.js):
- onInit: registra l'evento "patternMatched". Ogni volta che l'URL corrisponde alla rotta "detail", viene eseguita la funzione onObjectMatched.
- onObjectMatched: recupera il parametro "invoicePath" dall'URL, lo decodifica e usa "bindElement" per collegare la vista esattamente a quel set di dati nel modello.
- Element Binding: questa operazione permette ai controlli nella vista Detail di mostrare i dati della fattura corretta senza logiche complicate.
- onNavBack: gestisce il ritorno alla pagina precedente. Utilizza la classe "History" di SAPUI5 per capire se l'utente proviene da un'altra pagina dell'app.
- Gestione Cronologia: se esiste una pagina precedente nell'app, usa il comando nativo del browser; altrimenti, forza il ritorno alla "overview".
- Parametro "true" in navTo: indica al router di sostituire la cronologia corrente, evitando che il tasto "indietro" del browser crei loop infiniti sulla pagina di dettaglio.
*/
