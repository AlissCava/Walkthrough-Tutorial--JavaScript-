sap.ui.define([
	"./NavigationJourney"
]);

/*
Entry Point per i Test di Integrazione (opaTests.qunit.js):
- Funge da raccoglitore centrale per tutti i "viaggi" (Journeys) di integrazione dell'app.
- Carica la dipendenza "NavigationJourney.js", assicurando che i test di navigazione vengano inclusi nell'esecuzione.
- Svolge un ruolo analogo a unitTests.qunit.js, ma focalizzato sui test OPA5 (interazione utente) anziché sui test unitari.
- Viene richiamato dalla Test Suite globale per avviare la simulazione delle interazioni reali all'interno del browser.
- Permette di scalare il progetto aggiungendo semplicemente nuovi Journey all'interno dell'array di dipendenze.
*/