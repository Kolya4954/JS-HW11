// Створіть об'єкт "bankAccount" з властивостями "ownerName", "accountNumber", "balance". Додайте до об'єкту метод "deposit", який дозволяє додавати гроші на рахунок, та метод "withdraw", який дозволяє знімати гроші з рахунку. Використайте cofirm() щоб поповнити рахунок або отримати готівку та prompt() щоб дізнатися сумму. Після проведення операції виводити повідомлення про залишок на рахунку. 

console.log("task 1");


const bankAccount = {
    ownerName: "Kolya",
    accountNumber: 10,
    balance: 1000,

    deposit(){
      const sumaDepositu = Number(prompt("Введіть суму").trim());
      const perevirka = confirm(`"ви точно хочите поставити ${sumaDepositu} на ваш рахунок?"`)
      if(perevirka === true){
        this.balance += sumaDepositu
      }
    },

    withdraw(){
     const semaDepositu = Number(prompt("Введіть суму").trim());
     const perevirka = confirm(`"ви точно хочите поставити ${sumaDepositu} на ваш рахунок?"`)
     if(perevirka === true){
        this.balance += sumaDepositu
     }
    },
}


bankAccount.deposit()
console.log(bankAccount.balance);

  
  

  console.log("task 2");


  const weather = {
    temperature: 0,
    humidity: 10,
    windSpeed: "50km/h",

    check(){
    const question = Number(prompt("Введіть температуру"))
        const result = question < this.temperature

        if(result === true){
       alert("температура нижче 0 градусів Цельсія")
        } else {
          alert("температура вища 0 градусів Цельсія")
        }
    },

    



  }
 
  weather.check()
  
  

  
  
  console.log("task 3");



  const user = {
    name: "kolya",
    email: "kolakusickij@gmail.com",
    password: "wowkrytoi",


    login(){
     const asking = prompt("Введіть ел-пошту")
     const finalAsking = prompt("Введіть пароль")
     const finalResult = asking === this.email && finalAsking === this.password

     if(finalResult === true){
      alert("Вітаю, ви ввійшли")
     } else{
      alert("упс, ви не ввійшли")
     }
    }
  }
  
  user.login()



  console.log("task 4");


  const movie = {
    title: "five night's at freddy's",
    director: "Scot Cawton",
    year: 2025,
    rating: 10,

    method(){
      if (this.rating >= 8) {
            alert("Рейтинг фільму більше 8");
            return this.rating;
        }
        else if(this.rating < 8){
            alert("Рейтинг фільму занадто низький");
            return this.rating;
        }
    }
  }

  movie.method()
  
  