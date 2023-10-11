# Extraire TESTCORS dans un repertoire client

`npm i`
`node server.js`
## Dans le repertoire client
`lancer liveserver`


## API details

Route                                        | Description
---------------------------------------------|------------------------------------
GET    /api/accounts/:user                   | Get all data for the specified account




## Corriger l'utilisation d'un port utilisé sur mac

### Vérifier l'utilisation du port
> Vérification du port 5000
`lsof -i :5000`
```
COMMAND   PID   USER     FD   TYPE            DEVICE SIZE/OFF   NODE  NAME
ControlCe 397 userName   27u  IPv4 0x6757547125dc2b7b      0t0  TCP *:commplex-main (LISTEN)
ControlCe 397 userName   28u  IPv6 0x6757547125f1a753      0t0  TCP *:commplex-main (LISTEN)
```

Ici nous voyons que le port est utilisé par le processus avec le `PID 397` du nom de `ControlCe`
Ce processus correspond au récepteur AirPlay d'Apple, qui utilise les ports 5000 et 7000

Pour désactiver ce prossessus il faut aller dans
```
Paramètres > Partage > Récepteur d'AirPlay (Tout en bas de la liste à gauche)
```
