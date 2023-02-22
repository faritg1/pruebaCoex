const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'farit',
    password: '',
    database: 'pruebacoexbd'
});

con.connect((err)=>{
    if(err) throw err
    console.log('La conexión funciona')
});

con.query('SELECT * FROM tblClientes', (err,rows) => {
    if(err) throw err
    console.log('Los datos de la tabla son estos');
    console.log(rows);
    console.log('la cantidad de resultado son:');
    console.log(rows.length);
});


con.end();