// Zamień string '123' na liczbę
const quantity = '123'
console.log(Number(quantity)) // 'quantity'.toNumber --> to samo


// Zamień liczbę 345 na string
const num = 345
console.log(String(num))


// Wygeneruj losową liczbę całkowitą w przedziale 0 do 10
const randomNumber = Math.random() * 10
const randomInteger = randomNumber.toFixed()

console.log(randomInteger)


// Wygeneruj losową liczbę w przedziale 0-3 i zaokrąglij ją do 2 miejsc po przecinku.
const randomNumber2 = Math.random() * 3
const randomInteger2 = randomNumber2.toFixed(2)

console.log(randomInteger2)


// Oblicz, ile minut, godzin i dni upłynęło od momentu twoich urodzin.
const birthDate = new Date(1995,1,3,12,45,0)
const actualDate = new Date()

const secondsAlive = ((actualDate-birthDate) / 1000)
const minutesAlive = (secondsAlive / 60).toFixed()
const daysAlive = (minutesAlive / 60 / 24).toFixed()

console.log(`I'm living ${minutesAlive} minutes and ${daysAlive} days.`)