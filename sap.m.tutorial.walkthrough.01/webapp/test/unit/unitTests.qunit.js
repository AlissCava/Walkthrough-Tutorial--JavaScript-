sap.ui.define([
	"./model/formatter"
]);

/*
Entry Point per i Test Unitari (unitTests.qunit.js):
- funge da punto di accesso centrale per tutta la suite di test unitari dell'applicazione.
- importa il file "formatter.js" dalla sottocartella model per includere i test dei formatter.
- centralizza il caricamento dei test: aggiungendo qui nuove dipendenze, verranno eseguite automaticamente.
- viene richiamato dalla pagina HTML o dal test runner per avviare l'esecuzione dei test caricati.
- garantisce che i test siano isolati e organizzati seguendo la stessa struttura delle cartelle dell'app.
*/