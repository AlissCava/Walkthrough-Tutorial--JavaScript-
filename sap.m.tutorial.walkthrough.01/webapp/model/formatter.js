sap.ui.define([], () => {
	"use strict";

	return {
		statusText(sStatus) {
			const oResourceBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
			switch (sStatus) {
				case "A":
					return oResourceBundle.getText("invoiceStatusA");
				case "B":
					return oResourceBundle.getText("invoiceStatusB");
				case "C":
					return oResourceBundle.getText("invoiceStatusC");
				default:
					return sStatus;
			}
		}
	};
});


/*
Logica di Formattazione (formatter.js):
- definisce un modulo riutilizzabile nella nuova cartella "webapp/model" per gestire la formattazione dei dati.
- non estende classi base, ma restituisce un oggetto JavaScript contenente funzioni di formattazione.
- implementa la funzione "statusText" per convertire codici tecnici (es. "A", "B", "C") in testi leggibili estratti dal bundle i18n.
- utilizza "this.getOwnerComponent().getModel()" per accedere ai modelli in modo sicuro, evitando errori se la vista non è ancora collegata al componente.
- permette di separare la logica di presentazione dai dati grezzi, migliorando la manutenibilità del codice.
*/