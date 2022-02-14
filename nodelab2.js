const fs = require ('fs')
const express = require('express');
const { json } = require('express');
const app = express();

app.use(express.json())

app.get('/todos',(req,res,next)=>{
    const data= json.parse(fs.readFileSync('./js.json', {encoding: 'utf-8'}))
     res.json(data)
  });
  
  app.get('/todos/:id',(req,res,next)=> {
      const {id}= req.params;
      const data = JSON.parse(fs.readFileSync('./js.json',{
          encoding: 'utf-8'
      }));
      var ID = {id:1}
      const todo = data.find(todo=> +todo.ID === +id)
      res.JSON(todo)
  });

  app.post('/todos',(req,res,next)=>{
    const {title} = req.body
    const data= json.parse(fs.readFileSync('./js.json', {encoding: 'utf-8'}))
    const todo = {title}
    data.puch(todo)
    fs.writeFileSync('./js.json',JSON.stringify(data));
    res.json(todo)}) ;

    app.patch('/todos/:id',(req,res,next)=> {
        const {id} = req.params;
        const data = JSON.parse(fs.readFileSync('./js.json',{encoding: 'utf-8'}));
        const todo = data.find(todo => +todo.ID === +id);
        const {titleid} = req.body;
        todo.title = titleid;
        fs.writeFileSync('./data.json',JSON.stringify(data));
        app.use(express.static('./qq.jpg')); 

        res.json(todo)
    })

    app.delete()
    var con = mysql.createConnection({
        Id: "2",
        user: "name",
        password: "password"
      });
      
      con.connect(function(dele) {
        if (dele) throw dele;
        var de = "DELETE FROM customers WHERE address = 'Mountain 21'";
        con.query(de, function (dele, result) {
          if (dele) throw dele;
          console.log("Number of records deleted: " + result.affectedRows);
        });
      });

      