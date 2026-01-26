sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel",
	"sap/ui/test/starter/runTest",
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

			// set data model
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
		}
	});
});

/*
Integrazione del Modello Dispositivo (Component.js):
- sap.ui.Device: carica l'API di SAPUI5 che rileva automaticamente le caratteristiche del browser e del sistema (es. se è un dispositivo touch, le dimensioni dello schermo, il sistema operativo).
- oDeviceModel: crea un JSONModel utilizzando direttamente i dati forniti dall'oggetto Device.
- OneWay Binding: imposta la modalità di binding a "sola lettura". Poiché i dati del dispositivo non devono essere modificati dall'app, questo previene errori accidentali e ottimizza le prestazioni.
- Named Model ("device"): registra il modello con un nome specifico. Questo permette di referenziarlo nelle viste XML usando la sintassi "{device>/...}".
- Reattività: grazie a questo modello, l'applicazione può adattare la sua interfaccia in tempo reale (ad esempio nascondendo pulsanti su mobile o cambiando layout) senza scrivere codice CSS complesso.
- Ereditarietà: essendo impostato a livello di Component, il modello "device" è disponibile automaticamente in tutte le viste e i controller dell'applicazione.
*/