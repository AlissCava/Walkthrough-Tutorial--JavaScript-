sap.ui.define([
	"../localService/mockserver"
], (mockserver) => {
	"use strict";

	// initialize the mock server
	mockserver.init();

	// initialize the embedded component on the HTML page
	sap.ui.require(["sap/ui/core/ComponentSupport"]);
});

/*
Inizializzazione del Mock Server (initMockServer.js):
- carica la dipendenza "mockserver.js" dalla cartella localService.
- invoca il metodo "init" del server di prova prima di caricare il componente dell'app.
- intercetta tutte le richieste dirette a un servizio reale per gestirle localmente.
- abilita "ComponentSupport" per avviare l'applicazione solo dopo che il simulatore è pronto.
- permette all'app di funzionare in "modalità test" senza che il codice principale se ne accorga.
*/