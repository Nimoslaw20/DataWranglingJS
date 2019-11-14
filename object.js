var Person = require('./dataObject');

var objects = [
    new Person({
        age: 30,
        name: "Dawn Keith",
        gender: "female",
        balance: 3960.64,
        company: "COSMOSIS",
        email: "dawnkeith@cosmosis.com",
        phone: "+1 (839) 437-3421",
        address: "392 Clifford Place, Fontanelle, Arizona, 2687"
    }),

    new Person({

        age: 31,
        name: "Bettie Eaton",
        gender: "female",
        company: "COMTREK",
        balance: 1280.14,
        email: "bettieeaton@comtrek.com",
        phone: "+1 (861) 460-2317",
        addres: "203 Allen Avenue, Elrama, North Carolina, 4453"
    }),


    new Person({
        age: 37,
        name: "Baker Townsend",
        gender: "male",
        balance: "$3,170.35",
        company: "EVIDENDS",
        email: "bakertownsend@evidends.com",
        phone: "+1 (808) 500-2793",
        address: "190 Just Court, Canoochee, Alabama, 325"
    }),
];


var richClient = [];

objects.forEach(person => {
    if (person.isRich) richClient.push(person);
})

//console.log(richClient);
console.log(richClient.length);