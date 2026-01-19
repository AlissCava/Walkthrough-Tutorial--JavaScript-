sap.ui.define([
	"sap/m/Text"
], (Text) => {
	"use strict";

	new Text({
		text: "Hello World"
	}).placeAt("content");
});

/*
Modulo UI5:
- importa il modulo sap.m.Text come dipendenza
- definisce la funzione di callback in modalità "use strict"
- crea una nuova istanza del controllo Text
- assegna la stringa "Hello World" alla proprietà text
- inietta il controllo nell'elemento del DOM con ID "content"
*/
