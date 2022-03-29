// однастрочный вариант без объявления переменной.
alert("Hello, " + prompt("Hi, what's your name ?") + "! How are you?");

// много строчный вариант с объявлением переменной, более четабелен.
let nameUser = prompt("Hi, what's your name ?");
console.log(nameUser + ' = ' + typeof nameUser);// typeof - показывает тип переменной.
alert("Hello, " + nameUser + "! How are you?");
// или так 
alert(`Hello, ${nameUser}! How are you?`);
