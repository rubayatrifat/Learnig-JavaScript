const txt = 'Hello I am Rifat. Are You Rifat'

// constuctor pattern
const regexC = new RegExp('Rifat', 'gi')

// Litaral pattern
const regex = /Rifat/gi

console.log(regexC.test(txt))
console.log(regex.test(txt))

// Search
console.log(txt.search(regex))

// Match 
console.log(txt.match(regex))

// Test
console.log(regex.test(txt))

// Exec
console.log(regex.exec(txt))

// Replact
console.log(txt.replace(regex, 'Obaydul'))

// Matcch All
console.log(txt.matchAll(regex))
const macthes = txt.matchAll(regex)
for (let match of macthes) {
    console.log(`match-${match[0]} index-${match.index}`)
}

// Practise

const text = 'Hello "Rifat". I am "Obaydul"'

const regeEx = /"(\w+)"/g
console.log(text.replace(regeEx, '_$1_'))
console.log(text.match(regeEx))
const changeText = text.replace(regeEx, '_$1_')

console.log(`${text} || To || ${changeText} `)


const str = "2023-1-17, 2023-2-17"
const reguExpre = /(?<year>\d{4})-(?<month>\d{1})-(?<day>\d{2})/
console.log(text.replace(reguExpre, '$<year>.$<month>.$<date>'))
console.log(str.match(reguExpre))

