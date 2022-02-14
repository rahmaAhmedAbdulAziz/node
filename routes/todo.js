const express = require ('express');
const router = express.Router()

// router.get('/todo')

router.get('/todos',(req,res,next)=>{
    const data= json.parse(fs.readFileSync('./js.json', {encoding: 'utf-8'}))
     res.json(data)
  
  });
  
  router.get('/todos/:id',(req,res,next)=> {
      const {id}= req.params;
      const data = JSON.parse(fs.readFileSync('./js.json',{
          encoding: 'utf-8'
      }));
      const todo = data.find(todo=> +todo.ID === +id)
      res.JSON(todo)
  })
  
  
  
  router.post('/todos',(req,res,next)=>{
      const {title} = req.body
      const data= json.parse(fs.readFileSync('./js.json', {encoding: 'utf-8'}))
      const todo = {title}
      data.puch(todo)
      fs.writeFileSync('./js.json',JSON.stringify(data));
      res.json(todo);
    
  }) 
  
  router.patch('/todos/:id',(req,res,next)=> {
      const {id} = req.params;
      const data = JSON.parse(fs.readFileSync('./js.json',{encoding: 'utf-8'}));
      const todo = data.find(todo => +todo.ID === +id);
      const {title} = req.body;
      todo.title = title;
      fs.writeFileSync('./data.json',JSON.stringify(data));
      res.json(todo)
  })

  module.exports = router