https://sapui5.hana.ondemand.com/#/topic/3da5f4be63264db99f2e5b04c5e853db

Il "Libretto di Istruzioni" dell'App: manifest.json

Il file manifest.json (chiamato anche Descrittore) è come la carta d'identità o il libretto di istruzioni della tua applicazione. Invece di scrivere mille righe di codice per dire all'app come comportarsi, scriviamo tutto qui dentro in modo ordinato.

A cosa servono le varie parti?
Immagina il file diviso in tre grandi "cassetti":

1. Chi è l'app? (sap.app)
In questa sezione diamo le informazioni di base:

ID: Il nome "fiscale" dell'app. Deve essere unico e non troppo lungo (massimo 70 caratteri).

Titolo e Descrizione: Il nome che l'utente vedrà. Usiamo le doppie parentesi graffe {{...}} per dire all'app di andare a leggere il nome corretto nel file delle traduzioni (i18n).

Versione: Serve per capire se stiamo usando la versione 1.0 o una più nuova.

2. Su cosa funziona? (sap.ui)
Qui diciamo semplicemente su quali dispositivi può girare l'app:

Tecnologia: Specifichiamo che stiamo usando SAPUI5.

Dispositivi: Confermiamo che l'app funziona bene su Computer, Tablet e Smartphone.

3. Di cosa ha bisogno per partire? (sap.ui5)
Questa è la parte più "intelligente" perché automatizza il lavoro:

rootView: Diciamo all'app qual è la prima pagina da mostrare quando si apre.

Dependencies: Elenchiamo le "scatole degli attrezzi" (le librerie) che ci servono per far apparire i pulsanti e i menu.

Models: Qui diciamo all'app dove si trovano i dati e i testi delle traduzioni. Grazie a questa sezione, non dobbiamo più caricare i file manualmente nel codice JavaScript (il file Component.js diventa molto più pulito).

Perché è così utile?
È più veloce: SAPUI5 legge questo file prima di tutto il resto, quindi sa già cosa preparare mentre l'app si avvia.

Meno errori: Avendo tutto in un unico file di configurazione, è più difficile dimenticarsi di caricare qualcosa.

Ordine: Separa la configurazione (cosa serve) dalla logica (cosa fa l'app).
