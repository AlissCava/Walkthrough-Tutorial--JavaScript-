sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel"
], (UIComponent, JSONModel) => {
	"use strict";

	return UIComponent.extend("ui5.walkthrough.Component", {

		metadata: {
			interfaces: ["sap.ui.core.IAsyncContentCreation"],
			manifest: "json"
		},

		init() {
			// call the init function of the parent
			UIComponent.prototype.init.apply(this, arguments);

			// set data model
			const oData = {
				recipient: {
					name: "World"
				}
			};
			const oModel = new JSONModel(oData);
			this.setModel(oModel);

			// create the views based on the url/hash
			this.getRouter().initialize();
		}
	});
});

/*
Configurazione del Componente Radice (Component.js):
- UIComponent.extend: definisce il cuore dell'applicazione, caricando le impostazioni dal file manifest.json.
- IAsyncContentCreation: interfaccia che garantisce la creazione asincrona dei contenuti per migliorare le prestazioni.
- Metodo init: inizializza il componente richiamando il costruttore della classe base (UIComponent).
- JSONModel: crea e imposta il modello dati globale "recipient" accessibile da tutte le viste dell'app.
- Router Initialization: attiva il meccanismo di navigazione tramite getRouter().initialize().
- Gestione URL: il router analizza l'hash dell'URL (es. #/test) e carica automaticamente la vista corretta in base alle regole definite nel manifest.
- Automazione: non serve istanziare il router manualmente; SAPUI5 lo genera basandosi sulla configurazione dell'App Descriptor.
*/