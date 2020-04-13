// Napisz funkcję sumującą dwie liczby

function sum(num1, num2) {
    return num1 + num2 
} 

const sum2 = (num1, num2) => {
    return num1 + num2
}

const sum3 = (num1, num2) => num1 + num2


// Wywołaj funkcję sum i zwróć wynik w konsoli 
console.log(sum(5, 2))


// Stwórz zmienną z imieniem użytkownika i napisz funkcję, która zwraca powitalny tekst z tym imieniem
const userName = 'Martyna'
const sayHello = () => 'Cześć ' + userName + '!'

console.log(sayHello())


// Napisz funkcję, która przyjmuje imię jako parametr i zwraca powitalny tekst z tym imieniem.
const sayHello2 = (name) => `Cześć ${name}!`

console.log(sayHello2('Mateusz'))


// Stwórz obiekt zawierający dane użytkownika i napisz funkcję zwracającą tekst w formie: X ma Y lat i mieszka w mieście Z
const person = {
    name: 'Anna',
    age: 45,
    city: 'Warszawa',
}
const getUserData = () => `${person.name} ma ${person.age} lat i mieszka w mieście ${person.city}.`

console.log(getUserData())


// Napisz funkcję przyjmującą dane użytkownika jako parametry i zwracającą tekst w formie: X ma Y lat i mieszka w mieście Z.
const getUserData2 = (name, age, city) => `${name} ma ${age} lat i mieszka w mieście ${city}.`

console.log(getUserData2('Mikołaj', 51, 'Gdańsk'))