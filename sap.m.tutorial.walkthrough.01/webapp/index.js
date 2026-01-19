sap.ui.define([
	"sap/ui/core/mvc/XMLView"
], (XMLView) => {
	"use strict";

	XMLView.create({
		viewName: "ui5.walkthrough.view.App"
	}).then((oView) => oView.placeAt("content"));
});

/*
Modulo UI5:
- importa il modulo sap.m.Text come dipendenza
- definisce la funzione di callback in modalità "use strict"
- crea una nuova istanza del controllo Text
- assegna la stringa "Hello World" alla proprietà text
- inietta il controllo nell'elemento del DOM con ID "content"
- delega la parte visiva al file XML
*/
