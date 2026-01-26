sap.ui.define([
	"sap/ui/test/opaQunit",
	"./pages/App"
], (opaTest) => {
	"use strict";

	QUnit.module("Navigation");

	opaTest("Should open the Hello dialog", (Given, When, Then) => {
		// Arrangements
		Given.iStartMyUIComponent({
			componentConfig: {
				name: "ui5.walkthrough"
			}
		});

		//Actions
		When.onTheAppPage.iPressTheSayHelloWithDialogButton();

		// Assertions
		Then.onTheAppPage.iShouldSeeTheHelloDialog();

		// Cleanup
		Then.iTeardownMyApp();
	});
});

/*
Test di Integrazione OPA5 (NavigationJourney.js):
- opaTest: definisce un test di integrazione che simula l'interazione dell'utente in modo leggibile (stile user story).
- Given (Arrangements): configura lo stato iniziale, in questo caso avviando il componente UI5 dell'applicazione.
- When (Actions): contiene le azioni interattive simulate, come il clic sul pulsante "Say Hello With Dialog".
- Then (Assertions): verifica che il comportamento atteso si sia verificato, controllando ad esempio che il dialogo sia effettivamente visibile a schermo.
- Cleanup (Teardown): chiude l'applicazione al termine del test per garantire che l'ambiente torni pulito per i test successivi.
- BDD (Behavior Driven Development): la struttura del test permette di comprendere la logica di business prima ancora di implementare i dettagli tecnici dei singoli passaggi.
*/