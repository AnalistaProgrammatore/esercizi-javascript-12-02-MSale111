/**
* Scrivere qui il codice della funzione fattoriale(n)
**/
function fattoriale (n){
    if (n===1){
        return 1
    }
return n*(fattoriale(n-1))
}
console.log(fattoriale(5))