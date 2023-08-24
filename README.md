# Boom Countdown

## Traccia

Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani!
Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di domani mattina!

## Svolgimento

- faccio un oggetto date che mi da i ms di oggi dal 1970
- faccio un oggetto date che mi da i ms di domani a una certa ora dal 1970
- faccio la differenza tra i ms di domani e quelli di oggi e li trasformo in s
- mi ricavo secondi,minuti,ore,giorni
- mi prendo gli elementi nel DOM e li uso per stamparci i dati del temopo che abbiamo trovato
- aggiungo un controllo per aggiungere lo 0
- mi creo una funzione che avvia il countdown
- metto tutto in una timing function per avviare il countdown
- faccio un controllo che blocca il countdown e una volta arrivato a 0
