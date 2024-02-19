// Шестое задание

let user = prompt("Введите сумму ваших долларов:");

let userOne = prompt(
  "Введите в какую валюту вы хотите перевести: eur , uan , azn:"
);

const exchangeRates = {
  eur: 0.93,
  uan: 38.08,
  azn: 1.7,
};

if (!isNaN(user) && exchangeRates.hasOwnProperty(userOne)) {
  let convertedAmount = user * exchangeRates[userOne];

  alert(`${user} долларов равно ${convertedAmount} ${userOne}`);
} else alert("Введите корректные данные:");

// Седьмое задание

let num = prompt("Введите сумму покупки");
if (num < 200) {
  alert((num = num * 1));
} else if (num >= 200 || num < 300) {
  alert(num - (num / 100) * 3);
} else if (num >= 300 || num < 500) {
  alert(num - (num / 100) * 5);
} else if (num >= 500) {
  alert(num - (num / 100) * 7);
} else if (num < 200) {
  alert((num = num * 1));
}

// Девятое задание

let userRuslan = prompt(
  "Выберите правильный ответ (По цифрам):  Какой сейчас год?\n 1 - 2024 \n 2 - 2023 \n 3 - 2025"
);
switch (userRuslan) {
  case "1":
    alert("Поздравляем вы набрали 2 балла !!");
    break;
  default:
    if (userRuslan === "1") {
      score += 2;
    }
}

let userSecond = prompt(
  "Выберите правильный ответ (По цифрам): Какая форма у земли?\n 1- Плоская \n 2 - Банановая \n 3 - Шарообразная"
);
switch (userSecond) {
  case "3":
    alert("Поздравляем вы набрали 2 балла !!");
    break;
  default:
    if (userSecond === "3") {
      score += 2;
    }
}

let userThird = prompt(
  "Выберите правильный ответ (По цифрам): Столица Норвегии?\n 1 - Хельсинки \n 2 - Вроцлав \n 3 - Осло"
);
switch (userThird) {
  case "3":
    alert("Поздравляем вы набрали 2 балла !!");
    break;
  default:
    if (userThird === "3") {
      score += 2;
    }
    alert(`Вы набрали ${score} баллов.`);
}

//Десятое задание

let userInput = prompt("Введите символ:");

let isEnglishLetter = /^[a-zA-Z]$/.test(userInput);

if (isEnglishLetter) {
  alert("Введенный символ английский алфавит.");
} else {
  alert("Введенный символ не английский алфавит.");
}
