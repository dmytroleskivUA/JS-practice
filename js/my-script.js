/**
  |==============================================================================|
  |                         MODULE 1  LESSON 1
  |==============================================================================|
**/

// ❗️❗️❗️ Оголошення змінних

// const a = "variable"; // ініціалізуємо завжди зі значенням
// a = "new variable"; // отримаємо в консолі TypeError, адже переприсвоювати значення змінним,
// оголошеним через const, не можна.Важливо: якщо цей рядок не закоментувати, скрипт запнеться на помилці і далі не виконуватиметься.
// let b; // можемо ініціалізувати без присвоєння значення;

// b = "one more variable"; // значення може бути присвоєно пізніше, після ініціалізації;

// ❗️❗️❗️ Взаємодія з користувачем

// // - виведення даних:

// console.log("Hello!");
// alert("Hello!");

// // - отримання даних:

// const answer = confirm("Is your name Ivan?"); // користувач може відповісти так або відхилити питання
// console.log(answer)
// prompt("What is your name?"); // користувач  може ввести якісь дані або відхилити питання
// const userName = prompt("What is your name?");
// // console.log(userName)
// console.log(typeof userName)
// userName = prompt("What is your name?");
// console.log(userName)

// ❗️❗️❗️ Додавання із заміною (також є для всіх інших операторів)

// let value = 5;
// value = value + 10;
// console.log(value) // 15
// value = value + 10;
// console.log(value) // 25

// value += 10;
// console.log(value); // 15
// value += 10;
// console.log(value); // 25

// let value1 = 10;
// // value1 = value1 - 2;
// // console.log(value1) // 8
// // value1 = value1 -2 ;
// // console.log(value1) // 6

// value1 -= 2;
// console.log(value1); // 8
// value1 -= 2;
// console.log(value1); // 6

// // Оператори порівняння (<, >, <=, >=, ==, ===, !=, !==)

// ❗️❗️❗️ Загальні правила порівняння

// // Результатом порівняння буде бульове значення.
// // При порівнянні різних типів за допомогою операторів == та =! операнди приводяться до числа
// // null не дорівнює нічому крім себе та undefined.
// // undefined не дорівнює нічому крім себе та null.
// // NaN не дорівнює нічому, навіть самому собі
// // Рядки між собою порівнюються за unicode (посимвольно).

// ❗️❗️❗️ Правила приведення різних типів до числа:

// // true --> 1
// // false --> 0
// // '', а також рядок з пробілами --> 0
// // null --> 0
// // undefined --> NaN
// // не порожній рядок --> якщо рядок складається лише з цифр, відбувається приведення до числа. В іншому випадку - NaN.

// Оператор ==
// console.log(null == 0); // false
// console.log(undefined == 0); // false
// console.log(undefined == null); // true
// console.log("123" == 123); // true
// console.log(true == "1"); // true
// console.log(4 == 5); // false

// // Оператор ===
// console.log("123" === 123); // false
// console.log(null === null); // true
// console.log(2 + 2 === 4); // true
// console.log(NaN === NaN); // false
// console.log(undefined === null); // false

// // // Оператор !=
// console.log("4" != 4); // false

// // Оператор !==
// console.log("4" !== 4); // true

// console.log(null > 0) // false
// console.log(null >= 0) // true

// ❗️❗️❗️ Number.isNaN

// const a = 123;
// const b = "qwerty";

// console.log(Number.isNaN(a)); // false
// console.log(Number.isNaN(b)); //false

// const toNumber = Number(b);
// console.log(toNumber); // NaN
// console.log(Number.isNaN(toNumber)); // true
// console.log(toNumber == NaN) // false

// const data = prompt("Enter a number, please");
// console.log(data);

// const dataToNumber = Number.parseInt(data);
// console.log(dataToNumber);

// const isNaN = Number.isNaN(dataToNumber);
// console.log(isNaN);

// const num1 = 0.3;
// const num2 = 0.6;
// const sum1 = num1 + num2;
// console.log(sum1)
// // console.log((num1*100 + num2*100) / 100 )
// console.log(sum1.toFixed(3));
// const fixedSum1 = Number(sum1.toFixed(3));
// console.log(fixedSum1);

// Math.random() - повертає псевдовипадкове число в діапазоні [0, 1)
// console.log(Math.random() * (max - min) + min); // псевдовипадкове число від min до max

// ❗️❗️❗️ Приведення до рядка
// const num = 123;
// console.log(num)
// const str1 = String(num)
// console.log(str1)
// const str2 = num + ''
// console.log(str2)
// const str3 = num.toString()
// console.log(str3)

// ❗️❗️❗️ Шаблонні рядки
// const userName = prompt('What is your name');
// const age = prompt('How old are your');

// const message = `My name is ${userName}. I am ${age} years old.`
// alert(message)

// const word1 = "     ";
// console.log(word1.length);

// ❗️❗️❗️ Методи рядків

// const word2 = "hTMl";
// console.log(word2.toLowerCase()) // html
// console.log(word2.toUpperCase()) // HTML

// const word3 = "superjavascript";
// const substring1 = "java";
// const substring2 = "css";

// console.log(word3.indexOf(substring1)); // 5
// console.log(word3.indexOf(substring2)); // -1

// const word4 = "banana";
// // console.log(word4.indexOf("a")); // 1
// // console.log(word4.lastIndexOf("a")); // 5
// // console.log(word4.indexOf("n")); // 2
// console.log(word4.lastIndexOf("n")); // 4

// const sentense = "two tasty bananas";
// console.log(sentense.indexOf(" ")); // 3
// console.log(sentense.indexOf("tasty bananas")); // 4

// console.log(word3.includes(substring1)); // true
// console.log(word3.includes("Java")); // false
// console.log(word3.includes(substring2)); // false

// const jsFileName = "script.js";
// const minifiedJsFileName = jsFileName.replace(".js", ".min.js");
// console.log(jsFileName) // "script.js"
// console.log(minifiedJsFileName); // "script.min.js"

// const cssFileNames = "styles.css, about.css, portfolio.css";
// // const minifiedCssFileNames1 = cssFileNames.replace(".css", ".min.css");
// // console.log(minifiedCssFileNames1); // "styles.min.css, about.css, portfolio.css"
// const minifiedCssFileNames2 = cssFileNames.replaceAll(".css", ".min.css");
// console.log(minifiedCssFileNames2); // "styles.min.css, about.min.css, portfolio.min.css"

// const word5 = "javascript";

// const word6 = word5.slice();
// console.log(word6); // 'javascript'
// console.log(word5.slice(0, word5.length)); // 'javascript'
// console.log(word5.slice(0)); // 'javascript'
// console.log(word5.slice(0, 10)); // 'javascript'

// console.log(word5.slice(3)); // 'ascript'

// const word7 = word5.slice(0, 4);
// console.log(word7); // 'java'
// console.log(word5.slice(4)); // 'script'
// console.log(word5.slice(-6, -3)); // 'scr'
// console.log(word5.slice(-1)); // 't'
// console.log(word5.slice(-6)); // 'script'

// console.log('    a    '.trim().length) // 1

// ❗️❗️❗️ Операції з приведенням типів

// console.log(2 + 5 + "" + 1 + 0 - 10); // 700
// console.log('710bjk' - 10); // NaN
// console.log("" + 1 - 0); // 1
// console.log(true + false); // 1
// console.log(true + ""); // 'true'
// console.log(true + "false"); // 'truefalse'
// console.log(true - "false"); // NaN
// console.log(6 / "3"); // 2
// console.log("2" * "3"); // 6
// console.log(4 + 5 + "px"); // '9px'
// console.log("$" + 4 + 5); // '$45'
// console.log("4" - 2); // 2
// console.log("4" + 2); // '42'
// console.log("4" / 2); // 2
// console.log("4px" - 2); // NaN
// console.log(7 / 0); // Infinity
// console.log("  -9  " + 5); ' -9 5'

// ❗️❗️❗️  Логічні операторы (&&,  ||,  !)

// // У логічних операціях  відбуваєтьмя приведення типів операндів до true або false.

// // (falsy) значення, що приводяться до false у логічному перетворенні:
// // 0
// // NaN
// // null
// // undefined
// // порожній рядок
// // false.

// // Абсолютно все інше приводиться до true.

// // && - запинається на false
// // Якщо всі операнди були приведені до true, повертається остання.
// // Якщо результат приведення операнди до буля false, перевірка зупиняється та повертається вихідне значення цього операнда.

// // || - запинається на true
// // Повертає перше правдиве (приведене до true) значення або останнє, якщо таке truthy значення не знайдено.

// // ! - інвертує true в false, або false в true

// console.log(true && 3); // 3
// console.log(false && 3); // false
// console.log(false && false); // false
// console.log(true && 4 && "kiwi"); // 'kiwi'
// console.log(true && "" && "kiwi"); // ''
// console.log(true && " " && "kiwi"); // 'kiwi'
// console.log(true && 0 && "kiwi"); // 0
// console.log(true || 3); // true
// console.log(true || 3 || 4); // true
// console.log(true || false || 7); // true
// console.log(false || true || 7); // true
// console.log(null || 2 || undefined); // 2
// console.log((1 && null && 2) > 0); // false
// console.log(null || (2 && 3) || 4); // 3
// console.log(null || (null && 3) || 4); // 4

/**
  |==============================================================================|
  |                         MODULE 1  LESSON 2
  |==============================================================================|
**/

// ❗️❗️❗️ Оператори розгалудження

// const number1 = Number(prompt("Enter a number 1, please"));
// console.log(number1);
// const number2 = Number(prompt("Enter a number 2, please"));
// console.log(number2);

// if(number1 > number2) {
//     console.log('I am here')
// }

// if (number1 > number2) {
//     console.log('+')
// } else {
//     console.log('-')
// }

// if (number1 > number2) {
//     console.log(">");
//   } else if (number1 === number2) {
//     console.log("=");
//   } else if (number1 < number2) {
//     console.log("<");
//   }

// if (number1 > number2) {
//   console.log(">");
// } else if (number1 === number2) {
//   console.log("=");
// } else {
//   console.log("<");
// }

// if (number1 > number2) {
//   console.log(">");
// } else {

//   if (number1 === number2) {
//     console.log("=");
//   } else {
//     console.log("<");
//   }

// }

// if(number1 > 50 && number2 > 50) {
//     console.log('super')
// }

// ❗️❗️❗️ Тернарний оператор

// const number1 = 10

// // if (number1 > 20) {
// //     console.log('true')
// // } else {
// //     console.log('false')
// // }

// number1 > 20 ? console.log('true') : console.log('false')

// const number2 = 20;
// number2 > 20
//   ? console.log(">")
//   : number2 === 20
//   ? console.log("=")
//   : console.log("<");

// ❗️❗️❗️ Switch

// const number = Number(prompt("Enter a number berween 0 and 3"));

// switch (number) {
//   case 0:
//     console.log("Your entered 0");
//     break;
//   case 1:
//     console.log("Your entered 1");
//     break;
//   case 2:
//     console.log("Your entered 2");
//     break;
//   case 3:
//     console.log("Your entered 3");
//     break;
//   default:
//     console.log("Your entered another number");
// }

// if (number === 0) {
//   console.log("Your entered 0");
// } else if (number === 1) {
//   console.log("Your entered 1");
// } else if (number === 2) {
//   console.log("Your entered 2");
// } else if (number === 3) {
//   console.log("Your entered 3");
// } else {
//   console.log("Your entered another number");
// }

// ❗️❗️❗️ Області видимості

// // const a = 1;
// // console.log(b)
// if (true) {
//     // const a = 2;
//     // const b = 3;
//     // console.log(a)
//     if (true) {
//         // const a = 4;
//         // console.log(a)
//     }
// }
// // console.log(b)

// let a = 1;

// if (true) {
//   a = 2;
// //   console.log(a)
// }

// console.log(a);

// ❗️❗️❗️ Цикли

// let counter = 1;

// while (counter <= 5) {
//   console.log("counter: ", counter);
// //   counter = counter + 1
//   counter += 1;
// }

// console.log('next')

// let number

// do{
//     console.log('here')
//     number = prompt('Input number, that bigger then 100')
// } while (number <=100)

// console.log(number)

// for (let i = 0; i <= 3; i += 1) {
//     console.log(i);
// }

// let word = "";

// for (let i = 0; i < 3; i += 1) {
//   console.log("Iteration:", i + 1);
//   console.log("previous string:", word);
//   console.log(i);
//   word += i;
//   console.log("next string:", word);
// }
// // https://monosnap.com/file/agY6GyBSoMjnf2o9L6IdU4vRnGdZPm
// console.log('final:', word)

// const word = "css";
// let word2 = "";

// for (let i = 0; i < word.length; i += 1) {
//   console.log("Iteration:", i + 1);
//   console.log('i', i)
//   console.log("previous string", word2);
//   console.log(word[i]);

//   word2 += word[i];
//   console.log("next string", word2);
// }

// // https://monosnap.com/file/R8e4VDAfvT1CzBHBp9pY0uyEdvsIe6
// console.log(word2);

// const num1 = 5
// const num2 = 10

// for(let i = num2; i >= num1; i-=1) {
//     console.log(i)
// }

// for(let a = 100; a > 50; a -= 10) {
//     console.log(a)
// }

// for (let i = 0; i <= 5; i += 1) {
//     console.log(i);

//     if (i === 2) {
//       console.log("Знайшли число 2, перериваємо виконання циклу");
//       break;
//     }
//   }

//   console.log("Лог після циклу");

//   for (let i = 0; i < 15; i += 1) {
//     console.log( 'before', i);
//     if (i / 3 === 4 || i / 2 === 5) {
//       continue;
//     }
//     console.log('after', i);
//   }

// a:
// for (let i = 0; i < 3; i+=1) {
// console.log('i', i)
//    b:
//    for (let j = 0; j < 3; j+=1) {
//     console.log('  j', j)
//       if (i === 1 && j === 1) {
//          break a;
//       }
//    }
// }

/**
  |==============================================================================|
  |                         MODULE 2  LESSON 1 
  |==============================================================================|
**/

// const numbers = [1, 2, 3, 4, 5]
// for(let i = 0; i < a.length; i+=1) {
//     console.log(a[i])
//     // console.log(a[i] + 10)
// }

// for(const number of numbers) {
//     console.log(numbers.indexOf(number))
//     // console.log(number + 10)
// }

// ❗️❗️❗️ Присвоєння за посиланням

// const a = 2;
// const b = a;
// console.log(a === b)
// console.log(2 === 2)

// const array1 = [1, 2, 3];
// const array2 = array1;

// console.log(array1)
// console.log(array2)
// console.log(array1 === array2)
// console.log([1, 2, 3] === [1, 2, 3]) //false

// array1[0] = 10;

// console.log(array1)
// console.log(array2);

// array2[2] = 5;

// console.log(array1)

// const array3 = array2

// console.log(array3)

// array3[1] = 100;

// console.log(array1)

// array2.length = 0;

// console.log(array3)

// array1[2] = 1000;
// console.log(array3)
// console.log(array1[0])

// for (const elem of array3) {
//     console.log(elem)
// }
// console.log(array3.length)

// let array1 = [1, 3, 5]
// let array2 = array1;

// array1[0] = 50;
// console.log(array1)
// console.log(array2)

// array1 = [9, 90, 900]

// console.log(array1)
// console.log(array2)

// array2 = array1;

// console.log(array1)
// console.log(array2)

// const a = [1, 2, 3]
// const b = a
// console.log(a === b) // true

// const c = [1, 2, 3]
// const d = [1, 2, 3]
// console.log(c === d) // false
// console.log(c[0] === d[0]) // true

// const e = [1, 2, [3, 4]]
// const f = [1, 2, [3, 4]]
// console.log(e[2] === f[2]) // false
// console.log(e[0] === f[0]) // true
// console.log(e[2][0]) // 3

// ❗️❗️❗️ Методи масивів

// const string = '1-!2-!3-!4-!5-!6-!7-!8-!9'
// console.log(string.split('!'))

// const string1 = 'vehq jrf vbh jre bv h'
// console.log(string1.split(' '))

// const string2 = '123456789'
// const array = string2.split('')
// console.log(array)

// const array3 = [1, 2, 3, 4, 5, 6, 7];
// const string3 = array3.join('')
// console.log(string3)

// const array5 = [1,4,6,7,4,7,89]
// // const res1 = array5.includes(100 && 4)
// // console.log(res1) // true
// // const res2 = array5.includes(100) && array5.includes(4)
// // console.log(res2) // false

// const emptyArray = [0, 90]
// emptyArray.push(1)
// // console.log(emptyArray)
// // const length1 = emptyArray.push(1)
// // console.log(length1) // 3
// const length2 = emptyArray.push(2, 3, 100, 200, 1000, 100000)
// console.log(emptyArray)
// console.log(length2)

// const notEmptyArray = [1, 2, 3, 4, 5]
// // notEmptyArray.pop()
// // console.log(notEmptyArray)
// const deletedEl = notEmptyArray.pop()
// // console.log(notEmptyArray)
// console.log(deletedEl)

// const superArray = [1, 2, 3, 4, 5]
// const length2 = superArray.unshift(5, 10)
// console.log(superArray)
// console.log(length2)

// const superArray1 = [1, 2, 3, 4, 5]
// const deletedEl1 = superArray1.shift()
// console.log(superArray1)
// console.log(deletedEl1)

// const array6 = [1, 2, 3, 4, 5, 6, 7]
// const array7 = array6.slice(0, 5)
// console.log(array7)
// const array8 = array6.slice(-2)
// console.log(array8)
// console.log(array6)

// const numbers2 = [1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 9]
// const numbers3  = numbers2.splice(5, 2)
// // console.log(numbers2)
// console.log(numbers3)

// const numbers2 = [1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 9]
// const copy = numbers2.slice()
// const deleted = copy.splice(5, 2)
// console.log(copy)
// console.log(deleted)
// console.log(numbers2)

// const numbers3 = [1, 2, 3, 6, 7, 8, 9]
// const copy1 = numbers3.slice()
// const deleted1 = copy1.splice(3, 0, 4, 5)
// console.log(copy1)
// console.log(deleted1)

// const numbers4 = [1, 2, 3, 4, 4, 4, 7]
// const copy2 = numbers4.slice()
// const deleted2 = copy2.splice(4, 2, 5, 6)
// console.log(copy2)
// console.log(deleted2)

// const a = [1, 2, 3];
// const b = [5, 6, 7, [8, 9]]
// const c = 4

// const arr = a.concat(c, b) // [1, 2, 3, 4, 5, 6, 7, [8, 9]]
// // console.log(arr)
// console.log(a)

/**
  |==============================================================================|
  |                         MODULE 2  LESSON 2 
  |==============================================================================|
**/

// function isIncluded(array, number) {
//   const result = array.includes(number);
//   console.log(result);
// }

// isIncluded([1, 2, 5, 8, 3], 4); // false
// isIncluded([1, 2, 5, 8, 3], 5); // true
// isIncluded(5, [1, 3, 5]); // error

// function isIncluded(array, number) {
//     const result = array.includes(number)
//     // console.log(result)
//     return result
//     // console.log(result)
// }

// isIncluded([1, 2, 5, 8, 3], 4) // false

// const a = isIncluded([1, 2, 5, 8, 3], 4)
// console.log(a)

// console.log(isIncluded([1, 2, 5, 8, 3], 4)) // false
// console.log(isIncluded([1, 2, 5, 8, 3], 5)) // true

// const a = isIncluded([1, 2, 5, 8, 3], 4)
// console.log(a) // false
// const b = isIncluded([1, 2, 5, 8, 3], 5)
// console.log(b) // true

// function add(a, b) {
// //   const sum = a + b
// //   return sum
//   return a + b;
// }

// const number1 = add(1, 3); // 4
// console.log(number1)
// const number2 = add(5, 7); // 12
// console.log(number2)

// const sum = number1 + number2 // 16
// console.log(sum)

// const sum = add(1, 3) + add(5, 7)
// console.log(sum) // 16

// function add(a, b) {
//   if (typeof a !== "number" || typeof b !== "number") {
// // console.log('One of operands is not a number')
// return;
//     return "One of operands is not a number";
//   }
//   return a + b;
// }

// console.log(add(3, 7)); // 10
// console.log(add(5, "10")); // 'One of operands is not a number'
// console.log(add(3, "7"));

// ❗️❗️❗️ Значення параметрів за замовчуванням

// function add(a = 0, b = 0) {
//   // const sum = a + b
//   // return sum
//   console.log(a);
//   console.log(b);
//   return a + b;
// }

// console.log(add(1));

// function add(a , b , c ) {
//     console.log(a + b + c)
// }

// const num1 = 3;
// const num2 = 4

// add(num1, num2)
// add(3)
// add()

// ❗️❗️❗️ Arguments

// function add() {
//     // console.log(arguments)
//     // console.log(arguments[0])
//     // console.log(arguments.length)
//     // let sum = 0;
//     // for(const arg of arguments) {
//     //     // console.log(arg)
//     //     sum +=arg
//     // }
//     // console.log(sum)
//     // return sum
// }

// add(5, 7, 4, 9, 10)
// add(5, 7, 4, 9, 10, 100, 45, 36)

// function isIncluded() {
//     console.log(arguments)
//     const array = Array.from(arguments);
//     console.log(array)
//     const number = arguments[arguments.length - 1]
//     console.log(number)
//     const array2 = array.slice(0, -1)
//     console.log(array2)
//     console.log(array2.includes(number))
//     return array2.includes(number)
// }

// function isIncluded(...array) {
//     console.log(array)
//     const number = array[array.length - 1]
//     console.log(number)
//     const array2 = array.slice(0, -1)
//     console.log(array2)
//     console.log(array2.includes(number))
//     return array2.includes(number)
// }

// isIncluded(2, 5, 6, 8, 4, 9, 3, 7)

// console.log(add(3, 7))
// console.log(add( 5, '10'))

// const add = function(a, b) {
//     if(typeof a !== 'number' || typeof b !== 'number') {
//         return 'One of operands is not a number'
//         // return
//     }
//     return a + b
// }

// console.log(add(3, 7))
// console.log(add( 5, '10'))

// ❗️❗️❗️ stack

// function x(a, b) {
//     if (a > b) {
//         return a - b
//     }
//     return a + b
// }
// console.log(x(10, 20))
// console.log(x(20, 10))

// function bar() {
//   console.log("bar");
//   console.log(222);
// }

// function baz() {
//   console.log("baz");
//   console.log(444);
// }

// function foo() {
//   console.log("foo");
//   console.log(111)
//   bar();
//   console.log(333);
//   baz();
//   console.log(555);
//     // foo()
// }

// foo();

//   console.log('!!!')

// ❗️❗️❗️ Задачі

// function transform(...args) {
// //   console.log(args);
//   const array = [];
//   for (const arg of args) {
//     if (typeof arg === "number") {
//       array.push(String(arg));
//     } else {
//       array.push(Number(arg));
//     }
//   }
//   return array;
// }

// function transform(...args) {
//   const array = [];
//   for (const arg of args) {
//     typeof arg === "number" ? array.push(String(arg)) : array.push(Number(arg));
//   }
//   return array;
// }

// console.log(transform(4, "5", 3, "9", 7)); // ['4', 5, '3', 9, '7']

// function flatArray(array) {
//     const newArray = [];
//     for (const elem of array) {
//       if (Array.isArray(elem)) {
//         for (const item of elem) {
//           newArray.push(item);
//         }
//       } else {
//         newArray.push(elem);
//       }
//     }
//     return newArray;
//   }

//   console.log(flatArray(["a", 5, ["3", 7, 8], "45", [1, 3, 7, 8]]));

/**
  |==============================================================================|
  |                         MODULE 3   LESSON 1 
  |==============================================================================|
**/
// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     isPublic: false,
//     rating: 0,
//     data: {
//         a: 1,
//         b: {
//           test: 'test!!!',
//           test1: {
//             d: 10
//           }
//         },
//         c: 3
//     }
//   };

// const a = book.title
// console.log(a)
// console.log(book.genres)
// console.log(book.data.a)
// console.log(book.data.b.test)

// console.log(book['genres']);
// console.log(book[genres]); // error

// const x = 'author';

// // console.log(book['author']) //  "Bernard Cornwell"
// // console.log(book[x]) // "Bernard Cornwell"

// console.log(book.x) // undefined

// console.log(book['data']['a']) // 1

// console.log(book)

// book.isPublic = true;

// console.log(book)

// book.genres.push('tale')
// console.log(book)

// book.price = '10$'
// book['price'] = '10$'

// book.data['d'] = 'd'

// book.title = [book.title]

// book.x = {}
// book.x.y = 'test'

// console.log(book)

// ❗️❗️❗️ Скорочена форма запису при створенні об'єкта

// const name = "Генрі Сибола";
// const age = 45;

// const user = {
//   name: name,
//   age: age,
// };

// console.log(user)

// const user = {
//   name,
//   age,
// };

// console.log(user)

// console.log(user.name); // "Генрі Сибола"
// console.log(user.age); // 25

// ❗️❗️❗️ Протопитипне наслідування, for in

// const animal = {
//   legs: 4,
//   eyes: 2
// };

// // console.log(animal)

// const dog = Object.create(animal);

// // console.log(dog)

// dog.name = "Манго"

// console.log(dog); // {name: 'Манго'}
// console.log(dog.name); // 'Манго'
// console.log(dog.legs); // 4

// for (const a in dog) {
//   console.log(a)
// }

// for (const key in dog) {

//   console.log(dog.hasOwnProperty(key))
// if (dog.hasOwnProperty(key)) {
//     console.log(key)
// }
// }

// dog.eyeColor = 'grey';

// const keys = Object.keys(dog)
// console.log(keys)

// for (const item of keys) {
//   console.log(item)

// }

// // const values = Object.values(dog)
// // console.log(values)

// const entries = Object.entries(dog)
// console.log(entries)

// ❗️❗️❗️ Приклад з методами

// const student = {
//     name: 'Jhon',
//     email: 'jhon@gmail.com',
//     homeworkResults: [],
//     getName() {
//        return this.name
//     },
//     getEmail() {
//         console.log(this.email)
//     },
//     getHWResults() {
//         console.log(this.homeworkResults)
//     },
//     addHomeworkResults(topic, sucess) {
//     //   const item = {topic:topic, sucess:sucess}
//         const item = {topic, sucess}
//         this.homeworkResults.push(item)
//     }
// }

// // console.log(student.getName())
// // student.getEmail()
// // student.getHWResults()
// student.addHomeworkResults('HTML/CSS', true)
// student.getHWResults()
// student.addHomeworkResults('JS', true)
// student.getHWResults()

// ❗️❗️❗️ Задача

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "На березі спокійних вод",
//     author: "Роберт Шеклі",
//     rating: 8.51,
//   },
//   {
//     title: "Сон смішної людини",
//     author: "Федір Достоєвський",
//     rating: 7.75,
//   },
// ];

// const data = {};
// const keys = Object.keys(books[0]);
// console.log(keys);

// for (const key of keys) {
//   data[key] = [];
// }
// console.log(data);

// for (const key in data) {
//   for (let book of books) {
//     data[key].push(book[key]);
//   }
// }

// console.log(data)
/**
  |==============================================================================|
  |                         MODULE 3   LESSON 2 
  |==============================================================================|
**/
// ❗️❗️❗️ Spread

// const a = ['a', 'b', 'c'];
// const b = [1, 2, 3];
// const c = [[1, 2], 'qwe', 1234]
// const d = [...a, 100, 200, 300, ...b, ...c[0], c[1], c[2]];
// // const e = [a, b, c]

// console.log(d)

// const obj1 = {a: 1, b: 2};
// const obj2 = {c: 3, d: 4}
// const obj3 = {...obj1, ...obj2}
// console.log(obj3)

// const obj1 = {a: 1, b: 2};
// const obj2 = {a: 0, c: 3, d: 4}
// // const obj3 = {...obj2, ...obj1}
// const obj3 = {...obj2, ...obj1, a: 5, e: 9}
// console.log(obj3)

// ❗️❗️❗️ Rest

// function q(...otherArgs) {
//   console.log(otherArgs); // Масив інших аргументів
// }

// q(1, 2);
// q(1, 2, 3);
// q(1, 2, 3, 4, 5, 6, 7);

// function w(a, b, c, ...otherArgs) {

//   console.log(a);
//   console.log(b);
//   console.log(c);
//   console.log(otherArgs); // Масив інших аргументів

//   const array = [...otherArgs]
//   console.log(array)
// }
// // w(1, 2, 3);
// w(1, 2, 3, 4, 5, 6, 7);

// function isIncluded(num, ...array) {
//   console.log(array.includes(num))
//   console.log(array)
// }
// isIncluded(1, 2, 3, 5, 6, 8, 5)

// function isIncluded(...array) {
//   const newArray = array.slice(1)
//   console.log(newArray)
//   console.log(newArray.includes(array[0]))
// }
// isIncluded(1, 2, 3, 5, 6, 8, 5)

// function isIncluded(...array) {
//   console.log(array);
//   const num = array.pop();
//   console.log(array);
//   console.log(num);
//   console.log(array.includes(num));
// }
// isIncluded(5, 2, 3, 5, 6, 8, 10);

// ❗️❗️❗️ Деструктуризація

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
//   price: "3$",
//   coverImage: "bkjbkbh",
// };
// const { price, title, ...data } = book;

// console.log(book)
// console.log(price)
// console.log(data)

// const { author} = book;

// // console.log(book.author)
// // console.log(book['author'])
// // console.log(author)

// Деструктуризуємо

// const { title, author, isPublic, rating, coverImage = 'qwerty' } = book;

// console.log(coverImage)

// const { title, author, isPublic, rating: votes, coverImage, price='5$' } = book;
// console.log(rating)

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "На березі спокійних вод",
//     author: "Роберт Шеклі",
//     rating: 8.51,
//   },
// ];

// for (const book of books) {

// const {title, author, rating} = book
//   console.log(title);
//   console.log(author);
//   console.log(rating);
// }

// for (const {title, author, rating} of books) {
//   console.log(title);
//   console.log(author);
//   console.log(rating);
// }

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//     a: {
//       b: 0,
//       c: {
//         d: "bkjbkjbnlkbklj",
//       },
//     },
//   },
// };

// const {
//   name,
//   tag,
//   stats: {
//     followers,
//     views,
//     likes,
//     a: {
//       b,
//       c: { d },
//     },
//   },
// } = user;

// console.log(d);
// console.log(followers)
// console.log(likes)

// const {
//   stats: {
//     a: {
//       c: { d },
//     },
//   },
// } = user;

// console.log(d);

// const rgb = [200, 255, 100];
// const [red, green, blue] = rgb;

// console.log(green)

// let a
// let b
// a = 5
// b = 10
// console.log(a)
// console.log(b)

// let a, b
// a = 5
// b = 10
// console.log(a)
// console.log(b)

// ❗️❗️❗️ Задача

// const car1 = {
//   brand: "BMW",
//   model: "700",
//   a: "red",
//   maxSpeed: 240,
//   isNew: true,
//   dimensions: {
//     weight: 2000,
//     height: 150,
//     length: 4.2,
//   },
// };

// const car2 = {
//   brand: "BMW",
//   model: "700",
//   a: "red",
//   maxSpeed: 240,
//   isNew: true,
//   dimensions: {
//     height: 150,
//     length: 4.2,
//   },
// };

// function createMessage(car) {
//   const message = `
//   Color: ${car.a}
//   Max speed: ${car.maxSpeed}
//   Is new: ${car.isNew}
//   Weight: ${car.dimensions.weight}
//   `;
//   console.log(message);
// }

// function createMessage({
//   dimensions: {
//     weight = 'No info',
//     height = "No info",
//     length = "No info"
//   },
//   a: color = 'No info',
//   maxSpeed = "No info",
//   isNew = "No info",

// }) {
//   const message = `
//   Color: ${color}
//   Max speed: ${maxSpeed}
//   Is new: ${isNew}
//   Weight: ${weight}
//   `;
//   console.log(message);
// }

// createMessage(car2);

/**
  |==============================================================================|
  |                         MODULE 4   LESSON 1 
  |==============================================================================|
**/

// function a(onSuccess, onUnsuccess) {
//   console.log(onSuccess)
//   console.log(onUnsuccess)
//   const mark = Number(prompt('What is your mark?'))
//   if (mark >= 10) {
//    onSuccess()
//   } else {
//    onUnsuccess()
//   }
// }

// function b() {
//   alert('It is great!')
// }

// function c() {
//   alert('It is excellent mark!')
// }

// function d() {
//   alert('It is bad mark!')
// }

// a(b, d)

// a(c, d)

// const users = [
//     {
//       id: "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",
//       name: "Moore Hensley",
//       email: "moorehensley@indexia.com",
//       eyeColor: "blue",
//       friends: ["Sharron Pace"],
//       isActive: false,
//       balance: 2811,
//       skills: ["ipsum", "lorem"],
//       gender: "male",
//       age: 37,
//     },
//     {
//       id: "7a3cbd18-57a1-4534-8e12-1caad921bda1",
//       name: "Sharlene Bush",
//       email: "sharlenebush@tubesys.com",
//       eyeColor: "blue",
//       friends: ["Briana Decker", "Sharron Pace"],
//       isActive: true,
//       balance: 3821,
//       skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//       gender: "female",
//       age: 34,
//     },
//     {
//       id: "88beb2f3-e4c2-49f3-a0a0-ecf957a95af3",
//       name: "Ross Vazquez",
//       email: "rossvazquez@xinware.com",
//       eyeColor: "green",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       isActive: false,
//       balance: 3793,
//       skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//       gender: "male",
//       age: 24,
//     },
//     {
//       id: "249b6175-5c30-44c6-b154-f120923736f5",
//       name: "Elma Head",
//       email: "elmahead@omatom.com",
//       eyeColor: "green",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       isActive: true,
//       balance: 2278,
//       skills: ["adipisicing", "irure", "velit"],
//       gender: "female",
//       age: 21,
//     },
//     {
//       id: "334f8cb3-eb04-45e6-abf4-4935dd439b70",
//       name: "Carey Barr",
//       email: "careybarr@nurali.com",
//       eyeColor: "blue",
//       friends: ["Jordan Sampson", "Eddie Strong"],
//       isActive: true,
//       balance: 3951,
//       skills: ["ex", "culpa", "nostrud"],
//       gender: "male",
//       age: 27,
//     },
//     {
//       id: "150b00fb-dd82-427d-9faf-2879ea87c695",
//       name: "Blackburn Dotson",
//       email: "blackburndotson@furnigeer.com",
//       eyeColor: "brown",
//       friends: ["Jacklyn Lucas", "Linda Chapman"],
//       isActive: false,
//       balance: 1498,
//       skills: ["non", "amet", "ipsum"],
//       gender: "male",
//       age: 38,
//     },
//     {
//       id: "e1bf46ab-7168-491e-925e-f01e21394812",
//       name: "Sheree Anthony",
//       email: "shereeanthony@kog.com",
//       eyeColor: "brown",
//       friends: ["Goldie Gentry", "Briana Decker"],
//       isActive: true,
//       balance: 2764,
//       skills: ["lorem", "veniam", "culpa"],
//       gender: "female",
//       age: 39,
//     },
//   ];

//   const newUsers = []

//   users.forEach(function(user, index) {
//     // console.log('N:', index + 1)
//     // console.log(user)
//     const {name, age, ...restProps} = user;
//     // console.log(`${index + 1} - ${name} - ${age}`)
//     // console.log(restProps)
//     newUsers.push(restProps)
//   })

//   console.log(newUsers)

//   const classicAdd = function (a, b, c) {
//     console.log(arguments)
//     return a + b + c;
//   };

//   classicAdd(1, 2, 3)

//   const arrowAdd1 = (a, b, c) => {
//     console.log(arguments)
//     return a + b + c;
//   };

//   arrowAdd1(1, 2, 3)

//   const arrowAdd2 = (a, b, c) => a + b + c;

// const mathOperations = (num1, num2, callback1, callback2) => {
//   if (num1 > num2) {
//     const result = callback1(num1, num2);
//     return result;
//   } else if (num2 > num1) {
//     return callback2(num1, num2);
//   } else {
//     return "Enter another numbers";
//   }
// };

//   const add = (num1, num2) => num1 + num2;
//   const substract = (num1, num2) => num2 - num1;

//   const multiply = (num1, num2) => num1 * num2;
//   const divide = (num1, num2) => num2 / num1;

//   console.log(mathOperations(10, 20, add, substract)); // 10
//   console.log(mathOperations(100, 20, add, substract)); // 120
//   console.log(mathOperations(200, 200, add, substract)); // 'Enter another numbers'
//   console.log(mathOperations(10, 20, multiply, divide)); //2
//   console.log(mathOperations(100, 20, multiply, divide)); //2000

//   console.log(mathOperations(10, 20, (num1, num2) => num1 + num2, (num1, num2) => num2 - num1)); // 10

//   const newUsers = []

//   users.forEach((user, index) => {
//     const {name, age, ...restProps} = user
//     console.log(`${index + 1} - ${name} - ${age}`)
//     newUsers.push(restProps)
//   })

//   users.forEach(({name, age, ...restProps}, index) => {
//     console.log(`${index + 1} - ${name} - ${age}`)
//     newUsers.push(restProps)
//   })

// console.log(newUsers)

/**
  |==============================================================================|
  |                         MODULE 4   LESSON 2 
  |==============================================================================|
**/
// const planets = ["Земля", "Марс", "Венера", "Юпітер"];

// const planetsInUpperCase = planets.map(planet => planet.toUpperCase());
// console.log(planetsInUpperCase); // ['ЗЕМЛЯ', 'МАРС', 'ВЕНЕРА', 'ЮПІТЕР']

// const users = [
//   {
//     id: "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     id: "7a3cbd18-57a1-4534-8e12-1caad921bda1",
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     id: "88beb2f3-e4c2-49f3-a0a0-ecf957a95af3",
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
//   {
//     id: "249b6175-5c30-44c6-b154-f120923736f5",
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     id: "334f8cb3-eb04-45e6-abf4-4935dd439b70",
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//   {
//     id: "150b00fb-dd82-427d-9faf-2879ea87c695",
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
//   {
//     id: "e1bf46ab-7168-491e-925e-f01e21394812",
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
// ];

// const ages1 = users.map(user => user.age)
// console.log(ages1)

// const ages2 = users.map(({ age}) => age)

// console.log(ages2)

// const students = [
//   { name: "Манго", courses: ["математика", "фізика"] },
//   { name: "Полі", courses: ["інформатика", "математика"] },
//   { name: "Ківі", courses: ["фізика", "біологія"] },
// ];

// const a = students.map(({ courses }) => courses)

// const b = a.flat()

// console.log(b)
// console.log(a)

// const courses = students.flatMap(({courses}) => courses);
// console.log(courses) // ['математика', 'фізика', 'інформатика', 'математика', 'фізика', 'біологія']

// const students = [
//   { name: "Манго", courses: ["математика", "фізика", [1, 2, [7, 8, [100, 700, [5, 10]]]]] },
//   { name: "Полі", courses: ["інформатика", "математика", [3, 4, [9, 10]]] },
//   { name: "Ківі", courses: ["фізика", "біологія", [5, 6]] },
// ];

// const courses = students.flatMap(({courses}) => courses);
// console.log(courses.flat())

// const a = students.map(({ courses }) => courses)

// console.log(a.flat(Infinity))

// const users1 = users.filter(({ balance }) => balance > 3000 )
// console.log(users1)

// const students = [
//   { name: "Манго", courses: ["математика", "фізика"] },
//   { name: "Полі", courses: ["інформатика", "математика"] },
//   { name: "Ківі", courses: ["фізика", "біологія"] },
// ];

// const allCourses = students.flatMap(student => student.courses);
// // ['математика', 'фізика', 'інформатика', 'математика', 'фізика', 'біологія'];
// console.log(allCourses)

// const uniqueCourses = allCourses.filter(
//   (course, index, array) => {
//   console.log('#iteration', index + 1)
//   console.log('index', index)
//   console.log(array.indexOf(course))
//   return array.indexOf(course) === index
//   }
// );

// const uniqueCourses = allCourses.filter(
//   (course, index, array) => array.indexOf(course) === index
// );

// console.log(uniqueCourses)

// const users2 = users.filter(({ name, balance }) => balance > 3000 && name[0] === "S")
// console.log(users2)

// const userFind = users.find(({ name, balance }) => balance > 3000 && name[0] === "S")
// console.log(userFind)

// const userFind = users.find(({ balance }) => balance > 3000 )
// console.log(userFind)

// console.log(users.indexOf(userFind))

// const index = users.findIndex(({  balance }) => balance > 3000 )
// console.log(index)

// const result1 = users.every(({ balance }) => balance > 1000)
// const result2 = users.every(({age}) => age >= 20 && age <=30)

// console.log(result2)

// const result3 = users.some(({ eyeColor }) => eyeColor === 'green')
// const result4 = users.some(({friends}) => friends.length > 5)
// console.log(result4)

// const total = [2, 7, 3, 14, 6].reduce((previousValue, number) => {
//   return previousValue + number;
// }, 0);

// console.log(total); // 32

// const array = [2, 7, 3, 14, 6]
// const init = 0
// const total = array.reduce((previousValue, number, index) => {
//   console.log('Iteration:', index + 1)
//   console.log('previousValue', previousValue)
//   console.log('number', number)
//   const res = previousValue + number;
//   console.log('res', res)
//   return res;
// }, init);

// console.log(total); // 32

/**
  |==============================================================================|
  |                         MODULE 5   LESSON 1 
  |==============================================================================|
**/
// const inventory = {
//   items: ['Knife', 'Gas mask'],
//   add(itemName) {
//     console.log(`Adding ${itemName} to inventory`);

//     this.items.push(itemName);
//   },
//   remove(itemName) {
//     console.log(`Removing ${itemName} from inventory`);

//     this.items = this.items.filter(item => item !== itemName);
//   },
// };

// const invokeInventoryAction = function(itemName, action) {
//   console.log(`Invoking action on ${itemName}`);
//   action(itemName);
// };

// invokeInventoryAction('Medkit', inventory.add);
// // Invoking action on Medkit
// // Adding Medkit to inventory

// // console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']

// invokeInventoryAction('Gas mask', inventory.remove);
// // Invoking action on Gas mask
// // Removing Gas mask from inventory

// // console.log(inventory.items); // ['Knife', 'Medkit']

// ! BIND

// const inventory = {
//   items: ['Knife', 'Gas mask'],
//   add(itemName) {
//     console.log(`Adding ${itemName} to inventory`);

//     this.items.push(itemName);
//   },
//   remove(itemName) {
//     console.log(`Removing ${itemName} from inventory`);

//     this.items = this.items.filter(item => item !== itemName);
//   },
// };

// const invokeInventoryAction = function (itemName, action) {
//   console.log(`Invoking action on ${itemName}`);
//   action(itemName);
// };

// invokeInventoryAction('Medkit', inventory.add.bind(inventory));

// // Invoking action on Medkit
// // Adding Medkit to inventory

// // console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']

// invokeInventoryAction('Gas mask', inventory.remove.bind(inventory));
// // // Invoking action on Gas mask
// // // Removing Gas mask from inventory

// // // console.log(inventory.items); // ['Knife', 'Medkit']

// ! CALL

// const inventory = {
//   items: ['Knife', 'Gas mask'],
//   add(itemName) {
//     console.log(`Adding ${itemName} to inventory`);

//     this.items.push(itemName);
//   },
//   remove(itemName) {
//     console.log(`Removing ${itemName} from inventory`);

//     this.items = this.items.filter(item => item !== itemName);
//   },
// };

// const invokeInventoryAction = function (itemName, action) {
//   // console.log(this)
//   console.log(`Invoking action on ${itemName}`);
//   action.call(this, itemName);
// };

// invokeInventoryAction.call(inventory, 'Medkit', inventory.add);
// // Invoking action on Medkit
// // Adding Medkit to inventory

// // console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']

// invokeInventoryAction.call(inventory, 'Gas mask', inventory.remove);
// // Invoking action on Gas mask
// // Removing Gas mask from inventory

// // console.log(inventory.items); // ['Knife', 'Medkit']

// ! APPLY

// const inventory = {
//   items: ['Knife', 'Gas mask'],
//   add(itemName) {
//     console.log(`Adding ${itemName} to inventory`);

//     this.items.push(itemName);
//   },
//   remove(itemName) {
//     console.log(`Removing ${itemName} from inventory`);

//     this.items = this.items.filter(item => item !== itemName);
//   },
// };

// const invokeInventoryAction = function (itemName, action) {
//   console.log(this)
//   console.log(`Invoking action on ${itemName}`);
//   action.apply(this, [itemName]);
// };

// invokeInventoryAction.apply(inventory, ['Medkit', inventory.add]);
// // Invoking action on Medkit
// // Adding Medkit to inventory

// // console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']

// invokeInventoryAction.apply(inventory, ['Gas mask', inventory.remove]);
// // Invoking action on Gas mask
// // Removing Gas mask from inventory

// // console.log(inventory.items); // ['Knife', 'Medkit']

/**
  |==============================================================================|
  |                         MODULE 5   LESSON 2 
  |==============================================================================|
**/

// const student = {
//     name: 'Jhon',
//     email: 'jhon@gmail.com',
//     homeworkResults: [],
//     getName() {
//        return this.name
//     },
//     getEmail() {
//         console.log(this.email)
//     },
//     getHWResults() {
//         console.log(this.homeworkResults)
//     },
//     addHomeworkResults(topic, sucess) {
//     //   const item = {topic:topic, sucess:sucess}
//         const item = {topic, sucess}
//         this.homeworkResults.push(item)
//     }
// }

// console.log(student.getName())
// student.getEmail()
// // student.getHWResults()
// student.addHomeworkResults('HTML/CSS', true)
// student.getHWResults()
// student.addHomeworkResults('JS', true)
// student.getHWResults()

// const Student = function (name, email) {
//     const studentName = name;
//     const studentEmail = email;
//     const homeworkResults = [];

//     this.getName = function () {
//       return studentName;
//     };

//     this.getEmail = function () {
//       return studentEmail;
//     };

//     this.getHomeworkResults = function () {
//       return homeworkResults;
//     };

//     this.addHomeworkResult = function (topic, success) {
//       homeworkResults.push({ topic: topic, success: success });
//     };
//   };

// //   const student1 = new Student('Anna', 'anna@ukr.net')
//   const student2 = new Student('Oleh', 'oleh@ukr.net')
//   console.log(student2)
