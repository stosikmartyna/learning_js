// Wyświetl w konsoli liczbę znaków, z której składa się zdanie "Mateusz bardzo lubi jeże." 
const exampleString = 'Mateusz bardzo lubi jeże.'

console.log(exampleString.length)


// Stwórz zmienną zawierającą zdanie 'Dogs are my favourite animals.' i za pomocą metody zamień 'Dog' na swoje ulubione zwierzę.
const exampleString2 = 'Dogs are my favourite animals.'

console.log(exampleString2.replace('Dogs', 'Cats'))


// Zastąp podkreślniki spacją w zdaniu 'Ala_ma_kota_a_kot_ma_Alę.'
const exampleString3 = 'Ala_ma_kota_a_kot_ma_Alę.'

console.log(exampleString3.replace(/_/g, ' '))


// Wydobądź nazwę użytkownika z pelnego e-maila i wyświetl w konsoli.
const exampleMail = 'januszkowal@gmail.com'
const exampleUser = exampleMail.substring(0, exampleMail.indexOf('@'))

console.log(exampleUser)