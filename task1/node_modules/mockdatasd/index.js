function getRandomName() {
  const names = [
    "Игорь",
    "Олег",
    "Глеб",
    "Инна",
    "Елизавета",
    "Полина",
    "Иван",
    "Семен",
    "Евгения",
    "Наталья",
    "Николай",
  ];
  return names[Math.ceil(Math.random() * 10)];
}
function getRandomAdress() {
  const adress = [
    "Калинина 22",
    "Машезерская 15Б",
    "Ленина 17",
    "Пушкинская 1",
    "Луначарксого 79",
    "Ригачина 23",
    "Древлянка 54",
    "Ульянова 2",
    "Мурманка 44",
    "Андропова 68",
    "Мерецкова 10",
  ];
  return adress[Math.ceil(Math.random() * 10)];
}

function getRandomDate() {
  const date = [
    "22.01.1967",
    "15.05.1986",
    "22.10.2001",
    "04.11.1999",
    "18.11.1999",
    "31.12.2009",
    "05.06.2012",
    "06.07.1990",
    "30.09.2020",
    "20.04.1998",
    "23.10.2003",
  ];
  return date[Math.ceil(Math.random() * 10)];
}

function getRandomNumber() {
  return Math.ceil(Math.random() * 100);
}

module.exports = {getRandomAdress , getRandomDate, getRandomName, getRandomNumber}