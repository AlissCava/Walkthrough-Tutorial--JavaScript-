sap.ui.define([
	"sap/ui/core/mvc/Controller"
], (Controller) => {
	"use strict";

	return Controller.extend("ui5.walkthrough.controller.App", {
		onInit() {
			this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
		}
	});
});

/*
Applicazione della Content Density (App.controller.js):
- onInit: metodo del ciclo di vita invocato al caricamento della vista principale (App.view.xml).
- getOwnerComponent(): accede all'istanza del Component per richiamare il metodo helper definito nel passaggio precedente.
- addStyleClass: aggiunge dinamicamente la classe CSS corretta ("sapUiSizeCompact" o "sapUiSizeCozy") alla radice dell'applicazione.
- Ereditarietà CSS: poiché la classe viene applicata alla vista contenitore, tutti i controlli figli (pulsanti, tabelle, input) erediteranno automaticamente la dimensione ottimale per il dispositivo in uso.
- User Experience (UX): garantisce che l'utente desktop abbia un'interfaccia densa di informazioni, mentre l'utente mobile/touch abbia elementi più grandi e facili da premere.
*/
