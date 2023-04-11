const connection = require('./dbconexao');
const mysql = require('mysql2');
const express = require('express');
const cors = require('cors');
const app = express();
const multer  = require('multer')
const upload = multer();


const port = 3004;

app.use(express.json());
app.use(cors());


app.get('/cliente/buscar/email/:email', function (req, res) {

  let email = 
req.params.email


  execSQLQuery('select nome, telefone, email, logradouro, numero, complemento, bairro, cidade, uf, cep, tipos  from clientes join tipo_cliente on clientes.id = tipo_cliente.id where clientes.email = ' + '"' + email + '"' , res )});

  
app.listen(port);
console.log('API funcionando!');


function execSQLQuery(sqlQry, res){
    const connection = mysql.createConnection({
      host     : 'mysqlnx',
    port     : 3306,
    user     : 'claudia',
    password : 'clau123',
    database : 'bd'
    });
   
    connection.query(sqlQry, (error, results, fields) => {
        if(error)
          res.json(error);
        else
          res.json(results);
        connection.end();
        console.log('executou!');
    });
  } 