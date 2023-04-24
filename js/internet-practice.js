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

// function calculateTotal(number) {
//   let total = 0;

//   for (let i = 1; i <= number; i += 1) {
//     total += i;
//   }

//   return total;
// }
// console.log(calculateTotal(2));
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

// !!! МЕТОДИ МАСИВІВ

// const users = [
//   {
//     name: "Vitaly",
//     age: 26,
//     sex: "male",
//   },
//   {
//     name: "Jessica",
//     age: 17,
//     sex: "female",
//   },
//   {
//     name: "Robert",
//     age: 16,
//     sex: "male",
//   },
//   {
//     name: "Sarah",
//     age: 20,
//     sex: "female",
//   },
//   {
//     name: "Rob",
//     age: 34,
//     sex: "male",
//   },
// ];

// !!! forEach

const values = ["a", "b", "c"];
values.forEach((value) => console.log(value));

const obj = { name: "John", age: 30 };
console.log(obj);

function add(a, b) {
  alert(`Adding ${a} and ${b}`); // Виводить повідомлення перед виконанням операції
  return a + b;
}

console.log(add(2, 3));

// ! for

// for (let i = 0; i < users.length; i++);

// ! for of
//   for (let item of users) {
//     console.log(item);
//   }

// users.forEach(function (item) {
//   console.log(item);
// });

// users.forEach(function (element, index) {
//   console.log(element);
//   console.log(index);
// });

// ! хочемо порахувати чоловіків та жінок /
// створюємо об'єкт

// const count = {
//   men: 0,
//   women: 0,
// };
// users.forEach(function (element, index) {
//   if (element.sex === "male") {
//     count.men++;
//   } else {
//     count.women++;
//   }
// });
// ! переводимо в тернарний оператор

// users.forEach(function (element, index) {
//   element.sex === "male" ? count.men++ : count.women++;
// });
// console.log(count);

// ! МЕТОД filter
// // скільки старше 18 років

// const adultUsers = users.filter(function (item) {
//   return item.age >= 18;
// });
// console.log(adultUsers);
// console.log(users);

// ! МЕТОД Map

// const correctNames = users.map(function (item) {
//   return item.sex === "male" ? "Mr. " + item.name : "Mrs. " + item.name;
// });

// console.log(correctNames);
// console.log(users);

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

// function getEvenNumbers(start, end) {
//   const evenNumbers = [];

//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       evenNumbers.push(i);
//     }
//   }

//   return evenNumbers;
// }

// // Приклад використання:
// console.log(getEvenNumbers(2, 5)); // [2, 4]
// console.log(getEvenNumbers(3, 11)); // [4, 6, 8, 10]
// console.log(getEvenNumbers(6, 12)); // [6, 8, 10, 12]
// console.log(getEvenNumbers(8, 8)); // [8]
// console.log(getEvenNumbers(7, 7)); // []

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

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

// console.log(keys);
// console.log(values);
// // У цьому випадку, ми використовуємо метод Object.keys() для отримання масиву ключів властивостей
// // об'єкта apartment і зберігаємо його в змінній keys. Також, ми використовуємо метод Object.values()
// // для отримання масиву значень властивостей об'єкта apartment і зберігаємо його в змінній values.

// function countTotalSalary(salaries) {
//   let totalSalary = 0;

//   for (const key in salaries) {
//     if (salaries.hasOwnProperty(key)) {
//       totalSalary += salaries[key];
//     }
//   }

//   return totalSalary;
// }

// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));

// !!!!!!!

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }

// console.log(hexColors);
// console.log(rgbColors);

// !!!!!!

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };

// const {
//   yesterday,
//   today,
//   tomorrow,
//   icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// } = highTemperatures;

// const meanTemperature = (yesterday + today + tomorrow) / 3;

// console.log(icon);
// console.log(highTemperatures);

// !!!!!!!!!!

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
// ];

// // for (const book of books) {
// //   console.log(book.title);
// // console.log(book.author);
// // console.log(book.rating);
// // }

// for (const book of books) {
//   const { title, author, rating } = book;

//   console.log(title);
//   console.log(author);
//   console.log(rating);
// }
// !!!!!

//

// !!!!!  SCOPE / Області видимості

const people = [
  {
    name: "Vitaly",
    age: 26,
    sex: "male",
  },
  {
    name: "Jessica",
    age: 17,
    sex: "female",
  },
  {
    name: "Robert",
    age: 16,
    sex: "male",
  },
  {
    name: "Sarah",
    age: 20,
    sex: "female",
  },
  {
    name: "Rob",
    age: 34,
    sex: "male",
  },
];

// function addNiceAjective(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].sex === "male") {
//       arr[i].name += " handsome";
//     } else {
//       arr[i].name += " beautiful";
//     }
//   }
//   return arr;
// }
// ! Можна трохи спростити запис

// function addNiceAjective(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     if (element.sex === "male") {
//       element.name += " handsome";
//     } else {
//       element.name += " beautiful";
//     }
//   }
//   return arr;
// }

// тернарний оператор

// function addNiceAjective(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     element.sex === "male"
//       ? (element.name += " handsome")
//       : (element.name += " beautiful");
//   }
//   return arr;
// }

// !а можна так

function addNiceAjective(arr) {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    element.name += element.sex === "male" ? " handsome" : " beautiful";
  }
  return arr;
}

console.log(addNiceAjective(people));

// !!! THIS
