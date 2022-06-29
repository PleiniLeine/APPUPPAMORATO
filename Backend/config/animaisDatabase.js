import mysql from "mysql2";

const db_animais = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'animais'
  });

  export default db_animais;