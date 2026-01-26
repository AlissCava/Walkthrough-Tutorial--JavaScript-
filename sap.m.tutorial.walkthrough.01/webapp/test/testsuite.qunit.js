sap.ui.define(() => {
	"use strict";

	return {
		name: "QUnit test suite for UI5 Walkthrough",
		defaults: {
			page: "ui5://test-resources/ui5/walkthrough/Test.qunit.html?testsuite={suite}&test={name}",
			qunit: {
				version: 2
			},
			ui5: {
				theme: "sap_horizon"
			},
			loader: {
				paths: {
					"ui5/walkthrough": "../"
				}
			}
		},
		tests: {
			"unit/unitTests": {
				title: "UI5 Walkthrough - Unit Tests"
			},
			"integration/opaTests": {
				title: "UI5 Walkthrough - Integration Tests"
			}
		}
	};
});

/*
Aggiornamento della Test Suite Globale (testsuite.qunit.js):
- Estensione dei test: aggiunge il modulo "integration/opaTests" alla lista dei test eseguibili.
- Integrazione OPA5: permette di lanciare i test di interazione utente (NavigationJourney) direttamente dalla suite principale.
- Automazione: rimuove la necessità di estensioni manuali (.qunit.js), gestite automaticamente dal runner durante l'esecuzione.
- Visualizzazione: definisce titoli chiari ("Unit Tests" vs "Integration Tests") per distinguere le tipologie di test nell'interfaccia browser.
- Punto di controllo unico: centralizza tutta la qualità del codice (logica e UI) in un unico pannello di controllo per facilitare il Continuous Integration (CI).
*/