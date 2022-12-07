/*
Consegna:
 Scrivi un programma che stampi in console i numeri da 1 a 100, ma che
 - per i multipli di 3 stampi “Fizz” al posto del numero
 - per i multipli di 5 stampi “Buzz” al posto del numero.
 - Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz” al posto del numero.

Prima di partire a scrivere codice poniamoci qualche domanda:
- Come faccio a sapere se un numero è divisibile per un altro?
 -Abbiamo visto qualcosa di particolare che possiamo usare?

 Consigli del giorno:
- Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
- Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
- Non complichiamoci la vita con soluzioni complesse: la strada semplice è quasi sempre la migliore


BONUS 1:
Crea un elemento che faccia da contenitore nel DOM e poi riempilo con i tuoi elementi via JS.
Puoi usare varie tecniche  (template literals, innerHTML, appendecc)


BONUS 2:
Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
Come abbiamo visto puoi  usare varie tecniche (style , className, classList)
 Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.
*/

//***************************************************************************************************

/* STEP
1- creo un ciclo da 1 a 100.

2- verifico se il numero diviso 3 dà resto 0.
2a- se vero, verifico se il numero diviso 5 dà resto 0.
2b- se vero, stampo fizzbuzz a schermo.
2c- se falso, stampo fizz a schermo.

3- verifico se il numero diviso 5 dà resto 0.
3a- se vero, stampo buzz a schermo.

4- se è tutto falso, stampo un numero a schermo.
*/

//***************************************************************************************************

//prendo l'elemento dal DOM
const targetElement = document.getElementById("target");

//variabile d'appoggio
//let content = " ";

//1- creo un ciclo da 1 a 100.

for (let i = 1; i <= 100; i++) {
  //content += " " + i;
  console.log(i);
}

//targetElement.innerText = content;
