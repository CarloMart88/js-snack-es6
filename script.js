// Ciao Ragazzi,
// Esercizio di oggi: Snack Array e Oggetti
// cartella/repo **js-snack-es6

// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

// creo l'array con chiavi name e weight e valori relativi 
const bikes = [ 
 { 
  name: "Bianchi",
  weight: 9  
  },
  { 
  name: "Trek",
  weight: 6  
  },
  { 
  name: "Specialized",
  weight: 8  
  },
  { 
  name: "Cannondale",
  weight: 10  
  },
  { 
  name: "Scott",
  weight: 11  
  },
];

// defnisco una variabile affinche corrisponda al primo valore dell'array
let lightWeight = bikes[0];

// ciclo l'array con il for 
for (i = 0 ; i<bikes.length ; i++){
  // variabile i 
  let bike = bikes[i];
// ciclo l'array con il for 
  if(bike.weight < lightWeight.weight) {
    lightWeight = bike
  }

}

console.log(lightWeight);








// Snack2**
// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

// Buon lavoro!