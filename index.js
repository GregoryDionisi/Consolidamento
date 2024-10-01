const prodotti = [
    { "nome": 'T-shirt', "prezzo": 30, "inStock": true },
    { "nome": 'Pantaloni', "prezzo": 120, "inStock": false },
    { "nome": 'Scarpe', "prezzo": 80, "inStock": true },
    { "nome": 'Giacca', "prezzo": 200, "inStock": true },
    { "nome": 'Cappello', "prezzo": 25, "inStock": false }
  ];



// 1) Creare un array di stringhe con il nome di ogni prodotto e il suo prezzo formattato, usando il template literals.
const primo = prodotti.map( prodotti => `Nome: ${prodotti.nome}, Prezzo: ${prodotti.prezzo}`)
console.log(primo)


// 2) Creare un nuovo array di oggetti che includa il nome e una descrizione che indichi se il prodotto è "Disponibile" o "Non disponibile" usando l'operatore ternario.
const secondo = prodotti.map ( prodotti => `Nome: ${prodotti.nome}, Descrizione: ${prodotti.inStock ? "Disponibile" : "Non disponibile"}`)
console.log(secondo)


// 3) Creare un nuovo array di oggetti che includa il nome e una descrizione che indichi se il prodotto è "Disponibile" o "Non disponibile" usando l'operatore ternario.
const terzo = prodotti.map( prodotti => `Nome: ${prodotti.nome}, Prezzo scontato: ${prodotti.prezzo > 100 ? prodotti.prezzo - prodotti.prezzo*20/100 : prodotti.prezzo}`)
console.log(terzo)

// 4) Calcolare la somma dei prezzi di tutti i prodotti dopo avere applicato l'eventuale sconto del 20%.
const quarto = prodotti.reduce(((acc, n) => acc + (n.prezzo > 100 ? n.prezzo - n.prezzo*20/100 : n.prezzo)), 0)
console.log(quarto)



// 5) Ordinare i prodotti in ordine decrescente di prezzo.
const quinto = prodotti.sort((n1, n2) => n1.prezzo - n2.prezzo)
console.log(quinto)


// 6) Separare l'array originale in due distinti array: uno per i prodotti inStock e uno per i prodotti outStock. Suggerimento: crea due nuovi array.
const inStock = prodotti.filter(prodotto => prodotto.inStock);
const outStock = prodotti.filter(prodotto => !prodotto.inStock);

console.log(inStock);
console.log(outStock);
