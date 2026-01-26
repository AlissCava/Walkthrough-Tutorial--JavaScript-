sap.ui.define([
	"sap/ui/test/Opa5",
	"sap/ui/test/actions/Press"
], (Opa5, Press) => {
	"use strict";

	const sViewName = "ui5.walkthrough.view.HelloPanel";

	Opa5.createPageObjects({
		onTheAppPage: {
			actions: {
				iPressTheSayHelloWithDialogButton() {
					return this.waitFor({
						id: "helloDialogButton",
						viewName: sViewName,
						actions: new Press(),
						errorMessage: "Did not find the 'Say Hello With Dialog' button on the HelloPanel view"
					});
				}
			},

			assertions: {
				iShouldSeeTheHelloDialog() {
					return this.waitFor({
						controlType: "sap.m.Dialog",
						success() {
							// we set the view busy, so we need to query the parent of the app
							Opa5.assert.ok(true, "The dialog is open");
						},
						errorMessage: "Did not find the dialog control"
					});
				}
			}
		}
	});
});

/*
Definizione del Page Object (App.js):
- createPageObjects: definisce l'oggetto "onTheAppPage" utilizzato per organizzare azioni e verifiche in modo modulare.
- Actions (iPressTheSayHelloWithDialogButton): utilizza "waitFor" per cercare un pulsante specifico tramite ID e Vista, eseguendo un'azione di pressione (Press) una volta trovato.
- Assertions (iShouldSeeTheHelloDialog): verifica la presenza nel DOM di un controllo di tipo "sap.m.Dialog".
- Robustezza: la funzione "waitFor" gestisce automaticamente l'attesa (polling) finché l'elemento non appare o non scade il timeout.
- Manutenibilità: centralizzando qui i selettori (ID e nomi vista), se l'interfaccia cambia, basterà aggiornare solo questo file invece di tutti i test.
*/