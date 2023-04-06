// function calculateEngravingPrice(message, pricePerWord) {
//   // Change code below this line

//   return pricePerWord * message.split(" ").length;

//   // Change code above this line
// }

// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
// console.log(calculateEngravingPrice("JavaScript is in my blood", 20));
// console.log(calculateEngravingPrice("Web-development is creative work", 40));
// console.log(calculateEngravingPrice("Web-development is creative work", 20));

// !!!!! ФУНКЦІЇ

// const userName = "Dmytro";

// function createUserName(name) {
//   const result = "Dmytro".toUpperCase();
//   // const result = name.toUpperCase();
//   return result;
// }

// console.log(createUserName(userName));

// ❗️❗️❗️

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";

//   if (password === ADMIN_PASSWORD) {
//     return "Welcome!";
//   }

//   return "Access denied, wrong password!";
// }
// console.log(checkPassword("jqueryismyjam"));

// ❗️❗️❗️

// const age = 20;
// const gender = "male";
// const userName = "Dmytro";

// function sayHello(name, age, gender) {
//   alert("hello, dear " + name);
//   if (age < 18) {
//     alert("You are too young!");
//   }
//   if (gender === "male") {
//     alert("Welcome to the club");
//   }
// }
// sayHello(userName, age, gender);

// ❗️❗️❗️

// function multiply(a, b, c) {
//   console.log(`result is ${a * b * c}`);
// }
// multiply(2, 3, 5);

// ❗️❗️❗️

// const userName = "Dmytro";

// function createUserName(name) {
//   return name.toUpperCase();
// }

// console.log(createUserName(userName));
// ❗️❗️❗️

function calculateTotal(number) {
  let total = 0;

  for (let i = 1; i <= number; i += 1) {
    total += i;
  }

  return total;
}
console.log(calculateTotal(2));
// !!! СТРІЛКОВІ ФУНКЦІЇ

// function sayHelloToPerson(name) {
//   console.log("hello, " + name);
// }
// sayHelloToPerson("Dmytro");

// //
// const sayHelloToPerson2 = (name) => {
//   console.log("hello 2, " + name);
// };
// sayHelloToPerson2("Dmytro");

// //Basic
// function summ(a, b) {
//   return a + b;
// }
// console.log(summ(10, 5));
// //Arrow function
// const summ2 = (a, b) => {
//   return a + b;
// };
// console.log(summ2(10, 8));

// //Short

// const summ3 = (a, b) => a + b;
// console.log(summ3(10, 10));

// !!!!! МАСИВИ

// const userArr = [
//   { name: "user1", age: 20, profession: "programmer" },
//   { name: "user2", age: 30, profession: "footballer" },
// ];
// console.log(userArr[0]);

//❗️❗️❗️

// const subscribers = [
//   { name: "user1", age: 20, profession: "programmer" },
//   { name: "user2", age: 30, profession: "footballer" },
//   { name: "user3", age: 18, profession: "teacher" },
// ];
// console.log(subscribers.length);

// const haveYouJustGotNewSubscriber = true;

// if (haveYouJustGotNewSubscriber) {
//   subscribers.splice(1, 1, "NEW");
// }

// //❗️❗️❗️

// function congratsIfMoreThen100(arr) {
//   if (arr.length > 100) {
//     alert("Congrats!");
//   } else {
//     alert("Not enough");
//     // alert(arr.length);
//   }
// }

// congratsIfMoreThen100(subscribers);

// !!! КРАЙНІ ЕЛЕМЕНТИ МАСИВУ
// function getExtremeElements(array) {
//   return [array[0], array[array.length - 1]];
// }

// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// console.log(getExtremeElements(["E", "M", "V"]));
// console.log(getExtremeElements(["apple", "peach", "pear", "banana"]));
// Напиши функцію getExtremeElements(array), яка приймає один параметр
// array - масив елементів довільної довжини.Функція повинна повертати
// масив з двох елементів - першого і останнього елемента параметра array.

// Оголошена функція getExtremeElements(array)
// Виклик getExtremeElements([1, 2, 3, 4, 5]) повертає [1, 5]
// Виклик getExtremeElements(["Earth", "Mars", "Venus"]) повертає ["Earth", "Venus"]
// Виклик getExtremeElements(["apple", "peach", "pear", "banana"]) повертає ["apple", "banana"]

// !!!!!   ЦИКЛИ   !!!!!

// ! For

// function findLongestWord(string) {
//   let words = string.split(" "); // розділяємо рядок на слова
//   let longestWord = ""; // змінна для зберігання найбільшого слова

//   for (let i = 0; i < words.length; i++) {
//     if (words[i].length > longestWord.length) {
//       longestWord = words[i];
//     }
//   }

//   return longestWord;
// }
// console.log(findLongestWord("Google do a roll"));
// console.log(findLongestWord("May the force be with you"));

// ❗️❗️❗️
// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > value) {
//       filteredNumbers.push(numbers[i]);
//     }
//   }
//   return filteredNumbers;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));

// ❗️❗️❗️

// function filterArray(numbers, value) {
//   const filteredNumbers = [];

//   for (let i = 0; i < numbers.length; i += 1) {
//     const number = numbers[i];

//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));
// !!!!

// Ця функція приймає два параметри: numbers - масив чисел та value - число.
// Функція створює новий масив filteredNumbers, який буде містити ті числа
// з масиву numbers, які є більшими за value.

//   Далі, функція проходить через масив numbers за допомогою
// циклу for та перевіряє кожне число number в масиві.Якщо число number
// більше за value, то це число додається до масиву filteredNumbers за
// допомогою методу push.

// На останок, функція повертає масив filteredNumbers,
//   який містить числа більші за value.
// !!!!

// function filterArray(numbers, value) {
//   const filteredNumbers = [];

//   for (const number of numbers) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));

// !!!!
// Функція filterArray отримує два аргументи: numbers - масив чисел,
//   та value - число, порівняння з яким використовується для фільтрації
//   чисел у масиві.Функція повертає новий масив, що містить тільки ті числа
//   з numbers, які більше за value.

// У рефакторингованій версії функції замість циклу for використовується
// цикл for...of, який дозволяє ітерувати по елементах масиву без потреби
// створення індексів.Також було видалено зайву змінну number та змінено
// умову для додавання чисел до filteredNumbers.

// !!!

// Напиши функцію getEvenNumbers(start, end), яка повертає масив
// усіх парних чисел від start до end.Парним вважається число, яке
//  ділиться на 2 без остачі(10 % 2 === 0).

function getEvenNumbers(start, end) {
  const evenNumbers = [];

  for (let i = start; i <= end; i += 1) {
    if (i % 2 === 0) {
      evenNumbers.push(i);
    }
  }

  return evenNumbers;
}

// Приклад використання:
console.log(getEvenNumbers(2, 5)); // [2, 4]
console.log(getEvenNumbers(3, 11)); // [4, 6, 8, 10]
console.log(getEvenNumbers(6, 12)); // [6, 8, 10, 12]
console.log(getEvenNumbers(8, 8)); // [8]
console.log(getEvenNumbers(7, 7)); // []

// Зауваження: функція працює для додатних цілих чисел.

// В даній функції i - це змінна-лічильник, яка використовується для
// ітерації(перебору) чисел від start до end.На кожній ітерації змінна
// i отримує наступне число від start до end.В тілі циклу for за
// допомогою умови перевіряється, чи є i парним числом, і якщо так,
//   то воно додається до масиву evenNumbers.

// !!!
// Доповни код таким чином, щоб у змінну number записувалося
//  перше число від start до end, яке ділиться на 5 без остачі.

// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }
// console.log(number);
// // 10

// ❗️❗️❗️
// const subscribers = [
//   { name: "Andrew", isClosedFriend: true },
//   { name: "Sashko", isClosedFriend: false },
//   { name: "Peter", isClosedFriend: false },
//   { name: "Vitaly", isClosedFriend: false },
//   { name: "Sarah", isClosedFriend: true },
//   { name: "Jessica", isClosedFriend: false },
//   { name: "Gunter", isClosedFriend: false },
//   { name: "Brad", isClosedFriend: true },
// ];

// !!!

// for (let i = 0; i < subscribers.length; i++) {
//   //  i === 0
//   // 0 < 8 === true
//   // console.log(subscribers[0])
//   // i + 1
//   // i === 1
//   // 1 < 8 === true
//   // console.log(subscribers[1])
//   // і так далі до 8 (subscribers.length) до проходження довжини всіх елементів!
//   // Цикл завершуєтсья (обережно аби не було вічного циклу (i < subscribers.length))

//   console.log(subscribers[i]);
// }
// ! For of

// for (const item of subscribers) {
//   console.log(item);
// }

// ! For in

// const obj = {
//   name: "Dmytro",
//   age: 18,
//   sex: "male",
//   nationality: "Ukrainian",
//   hobby: "football",
// };

// for (const key in obj) {
//   console.log(key);
//   // так достукуємось до ключів name,sex,age)
// }

// for (const key in obj) {
//   console.log(obj[key]);
//   // виводяться значення обє'кта  а не його ключі
// }

// for (const key in obj) {
//   // console.log(obj["name"]);
//   // console.log(obj.name);

// }

// ! While

// let i = 0;
// while (i < subscribers.length) {
//   console.log(subscribers[i]);
//   i++;
// }

// ! Do While

// do {
//   console.log(subscribers[i]);
//   i++;
// } while (10 > 100);

// ! Домашка
// // написати функцію, яка приймає масив чисел
// //  підносить до квадрату кожне з них

// function squareArr(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] *= arr[i];
//   }
//   return arr;
// }
// const numbers = [1, 2, 3, 4, 5, 6];

// console.log(squareArr(numbers));

// !!!!!!!!!! ОПЕРАЦІЇ ЗА МОДУЛЕМ

// // Операція за модулем може використовуватись для визначення,
// //   чи є число парним або непарним:

// let num = 10;
// if (num % 2 === 0) {
//   console.log(num + " is even");
// } else {
//   console.log(num + " is odd");
// }

// // Операція за модулем може використовуватись для перевірки,
// // чи є число кратним певному числу:

// let num2 = 15;
// let divisor = 5;
// if (num2 % divisor === 0) {
//   console.log(num2 + " is divisible by " + divisor);
// } else {
//   console.log(num2 + " is not divisible by " + divisor);
// }
// // Операція за модулем може використовуватись для
// // перетворення годин в 12 - годинний формат:

// let hours = 17;
// let hours12 = hours % 12;
// console.log("The time is " + hours12 + " PM");

// // Операція за модулем може використовуватись для перевірки,
// // чи є рік високосним:

// let year = 2022;
// if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//   console.log(year + " is a leap year");
// } else {
//   console.log(year + " is not a leap year");
// }

// !!!!!!  ОБ'ЄКТИ  !!!!!

/**
  |==============================================================================|
  |                         MODULE 1  LESSON 1
  |==============================================================================|
**/

// ❗️❗️❗️ Оголошення змінних

// const a = "variable"; // ініціалізуємо завжди зі значенням
// a = "new variable"; // отримаємо в консолі TypeError, адже переприсвоювати значення змінним, оголошеним через const, не можна. Важливо: якщо цей рядок не закоментувати, скрипт запнеться на помилці і далі не виконуватиметься.
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

/**
  |==============================================================================|
  |                         MODULE 3   LESSON 2 
  |==============================================================================|
**/

/**
  |==============================================================================|
  |                         MODULE 4   LESSON 1 
  |==============================================================================|
**/

/**
  |==============================================================================|
  |                         MODULE 4   LESSON 2 
  |==============================================================================|
**/
