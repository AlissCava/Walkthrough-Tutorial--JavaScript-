sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device"
], (UIComponent, JSONModel, Device) => {
	"use strict";

	return UIComponent.extend("ui5.walkthrough.Component", {
		metadata: {
			interfaces: ["sap.ui.core.IAsyncContentCreation"],
			manifest: "json"
		},

		init() {
			// call the init function of the parent
			UIComponent.prototype.init.apply(this, arguments);

			// set data model on view
			const oData = {
				recipient: {
					name: "World"
				}
			};
			const oModel = new JSONModel(oData);
			this.setModel(oModel);

			// set device model
			const oDeviceModel = new JSONModel(Device);
			oDeviceModel.setDefaultBindingMode("OneWay");
			this.setModel(oDeviceModel, "device");

			// create the views based on the url/hash
			this.getRouter().initialize();
		},

		getContentDensityClass() {
			return Device.support.touch ? "sapUiSizeCozy" : "sapUiSizeCompact";
		}
	});
});

/*
Gestione della Densità dei Contenuti e Device Model (Component.js):
- Device API: utilizzata per rilevare le capacità hardware del client, in particolare il supporto al touch screen.
- Modello "device": espone i dati del dispositivo come modello JSON ("OneWay") per permettere il binding dichiarativo nelle viste XML.
- getContentDensityClass: metodo helper che determina la dimensione visiva ottimale dei controlli SAPUI5.
- sapUiSizeCozy: classe CSS restituita per dispositivi touch; aumenta le dimensioni dei controlli (es. pulsanti più grandi) per facilitare l'interazione con le dita.
- sapUiSizeCompact: classe CSS restituita per dispositivi desktop; riduce lo spazio occupato dai controlli per mostrare più informazioni a schermo (ottimizzata per l'uso del mouse).
- Centralizzazione: definendo questa logica nel Component, l'app garantisce un'esperienza utente coerente e adattiva su qualsiasi dispositivo.
*/