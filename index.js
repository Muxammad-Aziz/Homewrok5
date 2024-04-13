let users = ['xondamir', 'Alex', 'Barbara', 'mirko', 'umarjon', 'Бобур', 'Амина', 'ansorjon', 'muxammadaziz', 'sherobod', 'daler']

/* длинное и короткое слова*/
let sorted = users.toSorted((a,b) => a.length - b.length)
min = sorted[0]
max = sorted[sorted.length - 1]
console.log(min);
console.log(max);


/* найти и показать четные имена c индексом  */
for (let i = 0; i < users.length; i++) {
    if (i % 2 === 0) {
        console.log(i,users[i]);
    }
}



// let cars = [3000, 7000, 11000, 9000, 16000, 17000, 22000, 30000, 40000, 100000]

// let from = prompt('от') 
// let up = prompt('до')

