const mysql = require('mysql');


//Данные
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'registration',
    password: 'root'

    //oamNBnLe

    // host: 'localhost',
    // user: 'Qugor',
    // database: 'registration',
    // password: 'oamNBnLe'
});

//Подключение и отлавливание ошибок
connection.connect(error => {
    if (error) {
        console.log(error);
        return error;
    } else {
        console.log('Database ---------> OK')
    }
})

//Вид запроса вывести всё
let query = "SELECT * FROM users";

//Получение информации и вывод в консоль
connection.query(query, (error, result, field) => {
   if (error) {
       console.error('Error retrieving data',error);
       return error;
   }

   const  data = result;
   console.log('Retrieved data:', data);
});



//Отключение от сервера
    connection.end(error => {
        if (error) {
            console.log(error);
            return error;
        } else {
            console.log('Database ---------> CLOSE')
        }
    })








