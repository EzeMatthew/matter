// let email = "myEmail@email.com";

// function maskEmail(email) {
//   const atindex = email.indexOf("@");
//   const localp = email.slice(0, atindex);
//   const mas =
//     localp[0] + "*".repeat(localp.length - 2) + localp[localp.length - 1];
//   return mas + email.slice(atindex);
// }
// console.log(maskEmail(email));
// console.log(maskEmail("ezebongmatthew5@gmail.com"));

// const minIncomeForDuplex = 60000;
// const minCreditScoreForDuplex = 700;

// const minIncomeForCondo = 45000;
// const minCreditScoreForCondo = 680;

// const minIncomeForCar = 30000;
// const minCreditScoreForCar = 650;

// function getLoanMessage(annualIncome, creditScore) {
//   if (
//     creditScore >= minCreditScoreForDuplex &&
//     annualIncome >= minIncomeForDuplex
//   ) {
//     return "You qualify for a duplex, condo, and car loan.";
//   } else if (
//     annualIncome >= minIncomeForCondo &&
//     creditScore >= minCreditScoreForCondo
//   ) {
//     return "You qualify for a condo and car loan.";
//   } else if (
//     annualIncome >= minIncomeForCar &&
//     creditScore >= minCreditScoreForCar
//   ) {
//     return "You qualify for a car loan.";
//   } else {
//     return "You don't qualify for any loans.";
//   }
// }

// let duplexLoanMsg = getLoanMessage(85000, 850);
// let condoLoanMsg = getLoanMessage(65000, 690);
// let carLoanMsg = getLoanMessage(45000, 660);
// let noLoanMsg = getLoanMessage(25000, 550);
// console.log(duplexLoanMsg);
// console.log(condoLoanMsg);
// console.log(carLoanMsg);
// console.log(noLoanMsg);
// console.log(2024 / 4);

// function isLeapYear(number) {
//   if (number / 4) {
//     return `${number} is a leap year`;
//   } else if (number % 4 !== 0) {
//     return `${number} is not a leap year`;
//   } else if (number / 400) {
//     return `${number} is a leap year`;
//   }
// }

// let year = 2024;
// console.log(isLeapYear(1900));
// function greet() {
//   console.log("Hello there!");
// }

// greet();

// const sum = (num1, num2) => num1 + num2;
// console.log(sum(0, 0) + num2);

// const exampleFunction = (param1, param2) => param1 + param2;
// console.log(exampleFunction(3, "Something"));
// let chessboard = [
//   ["R", "N", "B", "Q", "K", "B", "N", "R"],
//   ["P", "P", "P", "P", "P", "P", "P", "P"],
//   [" ", " ", " ", " ", " ", " ", " ", " "],
//   [" ", " ", " ", " ", " ", " ", " ", " "],
//   [" ", " ", " ", " ", " ", " ", " ", " "],
//   [" ", " ", " ", " ", " ", " ", " ", " "],
//   ["p", "p", "p", "p", "p", "p", "p", "p"],
//   ["r", "n", "b", "q", "k", "b", "n", "r"],
// ];

// const lunches = [];
// function addLunchToEnd(array, string) {
//   console.log(`${string} added to the end of the lunch menu.`);
//   array.push(string);
//   return array;
// }
// addLunchToEnd(lunches, "Tacos");
// addLunchToEnd(["Pizza", "Tacos"], "Burger");
// function addLunchToStart(array1, string1) {
//   console.log(`${string1} added to the start of the lunch menu.`);
//   array1.unshift(string1);
//   return array1;
// }
// addLunchToStart(lunches, "Sushi");
// addLunchToStart(["Burger", "Sushi"], "Pizza");

// function removeLastLunch(arr) {
//   if (arr.length === 0) {
//     console.log("No lunches to remove.");
//     return;
//   }

//   let removedItem = arr.pop(); // Remove last item

//   console.log(`${removedItem} removed from the end of the lunch menu.`);
//   return arr;
// }

// function showLunchMenu(show) {
//   if (show.length === 0) {
//     console.log("The menu is empty.");
//     return;
//   }

//   console.log(`Menu items: ${show.join(", ")} `);
// }

// showLunchMenu(["Greens", "Corns", "Beans"]);

// showLunchMenu(["Pizza", "Burger", "Fries", "Salad"]);

// // Example usage: // Expected output: ["Sushi", "Pizza"]

// removeLastLunch(["Stew", "Soup", "Toast"]);
// removeLastLunch(["Sushi", "Pizza", "Noodles"]);

// const arr = ["Ezebong", "MAtthew", "Ogbo", "MAtthew"];
// const indexs = arr.slice(1, 2);
// console.log(indexs);
// console.log(arr);

// const email = "ezebongMatthew@gmail.com";
// const atindex = email.indexOf("@");
// const localp = email.slice(0, atindex);
// const mas =
//   localp[0] + "*".repeat(localp.length - 2) + localp[localp.length - 1];
// const adds = mas + email.slice(atindex);

// console.log(atindex);
// console.log(localp);
// console.log(mas);
// console.log(adds);
// const a = [];
// console.log(a.shift());

// const person = {
//   name: "Alice",
//   age: 30,
// };
// console.log(person.name); // "Alice"
// console.log(person.job); // undefined
// // console.log(person.address.street);

// const user = {
//   name: "John",
//   profile: {
//     email: "john@example.com",
//     address: {
//       street: "123 Main St",
//       city: "Somewhere",
//     },
//   },
// };

// console.log(user.profile?.phone?.number);
// console.log(user.profile?.phone?.number);

// const recipes = [];

// const recipe1 = {
//   name: "Spaghetti Carbonara",
//   ingredients: ["spaghetti", "Parmesan cheese", "pancetta", "black pepper"],
//   cookingTime: 22,
//   totalIngredients: null,
//   difficultyLevel: "",
//   ratings: [4, 5, 4, 5],
//   averageRating: null,
// };

// const recipe2 = {
//   name: "Chicken Curry",
//   ingredients: [
//     "chicken breast",
//     "coconut milk",
//     "curry powder",
//     "onion",
//     "garlic",
//   ],
//   cookingTime: 42,
//   totalIngredients: null,
//   difficultyLevel: "",
//   ratings: [4, 5, 5, 5],
//   averageRating: null,
// };

// const recipe3 = {
//   name: "Vegetable Stir Fry",
//   ingredients: ["broccoli", "carrot", "bell pepper"],
//   cookingTime: 15,
//   totalIngredients: null,
//   difficultyLevel: "",
//   ratings: [4, 3, 4, 5],
//   averageRating: null,
// };

// recipes.push(recipe1, recipe2, recipe3);

// function getAverageRating(ratings) {
//   const total = ratings[0] + ratings[1] + ratings[2] + ratings[3];
//   return total / ratings.length;
// }

// function getTotalIngredients(ingredients) {
//   return ingredients.length;
// }

// function getDifficultyLevel(cookingTime) {
//   if (cookingTime <= 30) {
//     return "easy";
//   } else if (cookingTime <= 60) {
//     return "medium";
//   } else {
//     return "hard";
//   }
// }

// // const recipe1AverageRating = getAverageRating(recipe1.ratings);
// // console.log(recipe1AverageRating);

// // const recipe1TotalIngredients = getTotalIngredients(recipe1.ingredients);
// // console.log(recipe1TotalIngredients);

// // const recipe1DifficultyLevel = getDifficultyLevel(recipe1.cookingTime);
// // console.log(recipe1DifficultyLevel);

// recipe1.averageRating = getAverageRating(recipe1.ratings);
// recipe1.totalIngredients = getTotalIngredients(recipe1.ingredients);
// recipe1.difficultyLevel = getDifficultyLevel(recipe1.cookingTime);

// recipe2.averageRating = getAverageRating(recipe2.ratings);
// recipe2.totalIngredients = getTotalIngredients(recipe2.ingredients);
// recipe2.difficultyLevel = getDifficultyLevel(recipe2.cookingTime);

// recipe3.averageRating = getAverageRating(recipe3.ratings);
// recipe3.totalIngredients = getTotalIngredients(recipe3.ingredients);
// recipe3.difficultyLevel = getDifficultyLevel(recipe3.cookingTime);

// console.log(recipes);

// const questions = [
//   {
//     category: "History",
//     question: "Who was the first President of the United States?",
//     choices: ["George Washington", "Thomas Jefferson", "Abraham Lincoln"],
//     answer: "George Washington",
//   },
//   {
//     category: "Science",
//     question: "What is the largest planet in our solar system?",
//     choices: ["Earth", "Saturn", "Jupiter"],
//     answer: "Jupiter",
//   },
//   {
//     category: "Music",
//     question: "Which British rock band wrote the song 'Yesterday'?",
//     choices: ["The Rolling Stones", "The Beatles", "Queen"],
//     answer: "The Beatles",
//   },
//   {
//     category: "Literature",
//     question: "Who wrote the novel 'To Kill a Mockingbird'?",
//     choices: ["F. Scott Fitzgerald", "Harper Lee", "Jane Austen"],
//     answer: "Harper Lee",
//   },
//   {
//     category: "Geography",
//     question: "What is the capital of France?",
//     choices: ["Berlin", "Paris", "London"],
//     answer: "Paris",
//   },
// ];

// for (const props of questions) {
//   // console.log(props);
// }

// const res = {
//   category: "Geography",
//   question: "What is the capital of France?",
//   choices: ["Berlin", "Paris", "London"],
//   answer: "Paris",
//   address: {
//     street: "123 Main St",
//     city: "Anytown",
//     state: "CA",
//   },
// };
// // for(let recipes in res){
// //   console.log(`${recipes}: ${res[recipes]}`);
// //   for(let nested in res[recipes]){
// //     console.log(res[recipes][nested]);
// //   }

// // }
// // function getRandomQuestion(array){
// //   const randomQuestion = Math.floor(Math.random() * array.length )
// //   return array[randomQuestion]
// // }
// // console.log(getRandomQuestion(questions));

// // const str = 'freeCodeCamp';

// // for (let char of str) {
// //   const slic = char.indexOf('p')
// //   console.log(slic);
// // }
// console.log(isNaN("1"));

// outerLoop: for (let i = 0; i < 3; i++) {
//   innerLoop: for (let j = 0; j < 3; j++) {
//     if (i === 1 && j === 1) {
//       break outerLoop;
//     }
//     console.log(`i: ${i}, j: ${j}`);
//   }
// }

// function getVowelCount(sentence) {
//   let count = 0;
//   let sec = "";

//   for (const char of sentence) {
//     if (sec.includes(char)) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(getVowelCount("Matthew   "));
// function getConsonantCount(sentence) {
//   const vowels = "aeiou";
//   let count = 0;

//   for (const char of sentence) {
//     if (!vowels.includes(char)) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(getConsonantCount("Coding is fun"));

// function getWordCount(sentence) {
//   if (sentence.trim() === "") {
//     return 0;
//   }

//   const words = sentence.trim().split(/\s+/);
//   return words.length;
// }
// console.log(getWordCount("mamammama shhshshhs fhfhhhfhf hhshshshs ddddddd"));
// let str = "Matthew   dd ";
// console.log(str.split(/\s+/));
// console.log(3 * 3 - 1);

// const fruits = ["Mango", "Pineapple", "Oranges"];
// for (const fruit of fruits) {
//   console.log(fruit);
// }
// const ofs = { name: "matthew" };
// for(let n in ofs){
//   console.log(n);
// }
// for (let i = 1; i < 6; i++) {
//   if (i === 4) break;
//   console.log(i);
// // }
// for (let i = 2; i <= 13; i++) {
//   if (i % 2 === 0) continue;
//   console.log(i);
// }
// console.log(true || false);
// console.log(true && false);

function getAverage(score) {
  return score.reduce((a, b) => a + b, 0) / score.length;
}

function getGrade(score) {
  if (score === 100) {
    return "A+";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

function hasPassingGrade(score) {
  console.log(getGrade(score) !== "F");
  return getGrade(score) !== "F";
}
// console.log(hasPassingGrade(100));

function studentMsg(score, getAverages) {
  const checkAverage = getAverage(score);
  const isGradePass = hasPassingGrade(getAverages);

  const getGrades = getGrade(getAverages);

  if (!isGradePass) {
    return `Class average: ${checkAverage}. Your grade: ${getGrades}. You failed the course.`;
  } else {
    return `Class average: ${checkAverage}. Your grade: ${getGrades}. You passed the course.`;
  }
}
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 100));

console.log(studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 99));

const inventory = ["Matthew", ""];
// function getInventory (productName){
//   productName = productName.toLowerCase()
//   console.log(productName);
//   for(let i = 0;i< productName.length; i++){
//     console.log(i);
//     console.log(productName[i]);
//   }
// }
// getInventory(inventory)

function generatePassword(passWord) {
  const char =
    "BCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  let password = "";
  for (let i = 0; i < passWord; i++) {
    password += char.charAt(Math.floor(Math.random() * char.length));
    console.log(i);
    console.log("heloo");
  }
  console.log(password);
}

console.log(generatePassword(1));
function operateOnArray(arr, operation) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    console.log(arr);
    result.push(operation(arr[i]));
  }
  return result;
}

function double(x) {
  return x * 2;
}

let numbers = [1, 2, 3, 4, 5];
let doubledNumbers = operateOnArray(numbers, double);
console.log(doubledNumbers); // Outputs: [2, 4, 6, 8, 10]

const library = [
  {
    title: "Your Next Five Moves: Master the Art of Business Strategy",
    author: "Patrick Bet-David and Greg Dinkin",
    about: "A book on how to plan ahead",
    pages: 320,
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    about:
      "A practical book about discarding bad habits and building good ones",
    pages: 320,
  },
  {
    title:
      "Choose Your Enemies Wisely: Business Planning for the Audacious Few",
    author: "Patrick Bet-David",
    about:
      "A book that emphasizes the importance of identifying and understanding one's adversaries to succeed in the business world",
    pages: 304,
  },
  {
    title: "The Embedded Entrepreneur",
    author: "Arvid Kahl",
    about: "A book focusing on how to build an audience-driven business",
    pages: 308,
  },
  {
    title:
      "How to Be a Coffee Bean: 111 Life-Changing Ways to Create Positive Change",
    author: "Jon Gordon",
    about: "A book about effective ways to lead a coffee bean lifestyle",
    pages: 256,
  },
  {
    title:
      "The Creative Mindset: Mastering the Six Skills That Empower Innovation",
    author: "Jeff DeGraff and Staney DeGraff",
    about: "A book on how to develop creativity and  innovation skills",
    pages: 168,
  },
  {
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki and Sharon Lechter",
    about:
      "A book about financial literacy, financial independence, and building wealth. ",
    pages: 336,
  },
  {
    title: "Zero to Sold",
    author: "Arvid Kahl",
    about: "A book on how to bootstrap a business",
    pages: 500,
  },
];

function displayBooks(catalog) {
  let output = "Books in the Library:\n";

  catalog.forEach((book) => {
    output += `- ${book.title} by ${book.author} (${book.pages} pages)\n`;
  });

  return output;
}

function getBookSummaries(catalog) {
  return catalog.map((book) => book.about);
}

function getBooksByAuthor(catalog, author) {
  return catalog.filter((book) => book.author === author);
}

function getTotalPages(catalog) {
  return catalog.reduce((acc, book) => acc + book.pages, 0);
}

const libraryBooks = displayBooks(library);
const bookSummaries = getBookSummaries(library);
const booksByArvidKahl = getBooksByAuthor(library, "Arvid Kahl");
const totalPagesOfBooksInLibrary = getTotalPages(library);

console.log(libraryBooks);
console.log(bookSummaries);
console.log(booksByArvidKahl);
console.log(totalPagesOfBooksInLibrary);

const books = [
  {
    title:
      "How to Be a Coffee Bean: 111 Life-Changing Ways to Create Positive Change",
    authorName: "Matthew",
    releaseYear: 2002,
  },
  {
    title:
      "The Creative Mindset: Mastering the Six Skills That Empower Innovation",
    authorName: "Lydia",
    releaseYear: 2004,
  },
  {
    title: "Rich Dad Poor Dad",
    authorName: "Okputu",
    releaseYear: 2000,
  },
];
const filteredBooks = [];
function sortByYear(book1, book2) {
  if (book1.releaseYear < book2.releaseYear) {
    return -1;
  } else if (book1.releaseYear > book2.releaseYear) {
    return 1;
  } else {
    return 0;
  }
}
filteredBooks.push(sortByYear);

filteredBooks.sort(sortByYear);

let numberss = [2, 4, 8, 10];

numberss.forEach(function (number) {
  console.log(number % 2);
});

const container = document.querySelector(".container  ul");
console.log(container);
const newItem = document.createElement("li");

newItem.textContent = "Matthew";

const pareEl = document.querySelector(".Para");

pareEl.setAttribute("data1", "some");
console.log(pareEl);

// const set1 = setInterval(() =>{
//   console.log("hi matthew");
// },1000)

// setTimeout(() => {
//   console.log("hello");
//   clearInterval(set1)
// }, 2000);

const set2 = setTimeout(() => {
  console.log("Hekko");
}, 2000);
clearTimeout(set2);

// reference the rectangle
const rect = document.getElementById("rect");

// start with a position of 0
let position = 0;

function update() {
  // Move the rectangle 2px to the right
  rect.style.left = position + "px";
  position += 2;

  // Reset the position when the rectangle reaches
  // the right side of the screen
  if (position > window.innerWidth) {
    // Move the rectangle just outside the left side of the screen
    position = -rect.offsetWidth;
    console.log(-rect.offsetWidth);
  }
}

function animate() {
  // Update the position
  update();

  //request the next frame
  requestAnimationFrame(animate);
}

// Start the animation
requestAnimationFrame(animate);
// console.log(window.innerWidth);

const square = document.querySelector("#square");
const playBtn = document.querySelector("#playBtn");
const pauseBtn = document.querySelector("#pauseBtn");

const animation = square.animate(
  [{ transform: "translateX(0px)" }, { transform: "translateX(200px)" }],
  {
    duration: 5000, // Animation lasts 5 seconds
    // iterations: Infinity, // Loops indefinitely
    direction: "alternate", // Moves back and forth
    easing: "ease-in-out", // Smooth easing function
  }
);

// Set the onfinish property to log a message when the animation ends
animation.onfinish = () => {
  console.log("Animation finished!");
};

// Play the animation when the "Play" button is clicked
playBtn.addEventListener("click", () => {
  animation.play();
  console.log("You start the animation");
});

// Pause the animation when the "Pause" button is clicked
pauseBtn.addEventListener("click", () => {
  animation.pause();
  console.log("You pause the animation");
});
