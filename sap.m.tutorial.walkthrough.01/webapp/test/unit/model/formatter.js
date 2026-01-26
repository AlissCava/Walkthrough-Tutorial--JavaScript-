sap.ui.define([
	"ui5/walkthrough/model/formatter",
	"sap/ui/model/resource/ResourceModel",
], (formatter, ResourceModel) => {
	"use strict";

	QUnit.module("Formatting functions", {});

	QUnit.test("Should return the translated texts", (assert) => {
        const oResourceModel = new ResourceModel({
            bundleUrl: sap.ui.require.toUrl("ui5/walkthrough/i18n/i18n.properties"),
            supportedLocales: [
                ""
            ],
            fallbackLocale: ""
        });

        const oControllerMock = {
            getOwnerComponent() {
                return {
                    getModel() {
                        return oResourceModel;
                    }
                };
            }
        };

        const fnIsolatedFormatter = formatter.statusText.bind(oControllerMock);

        assert.strictEqual(fnIsolatedFormatter("A"), "New", "The long text for Status A is correct");
        assert.strictEqual(fnIsolatedFormatter("B"), "In Progress", "The long text for Status B is correct");
        assert.strictEqual(fnIsolatedFormatter("C"), "Done", "The long text for Status C is correct");
        assert.strictEqual(fnIsolatedFormatter("Foo"), "Foo", "The long text for Status Foo is correct");
	});
});

/*
Unit Test per il Formatter personalizzato (formatter.js):
- Carica il formatter reale e il ResourceModel per gestire le traduzioni i18n.
- QUnit.module: definisce un gruppo di test per le funzioni di formattazione.
- Inizializzazione ResourceModel: carica il file delle proprietà i18n per simulare i testi dell'app.
- oControllerMock: crea un oggetto simulato (mock) che replica la struttura del controller UI5.
- bind(oControllerMock): isola la funzione statusText collegandola al mock invece che a un controller reale.
- Assertions: verifica che gli stati "A", "B" e "C" vengano convertiti correttamente nei testi tradotti.
- Fallback Test: controlla che un valore non previsto (es. "Foo") venga restituito senza trasformazioni.
*/