const fs = require ('fs')
const cors = require('cors')
const express = require('express');
const mongoose = require ('mongoose')
// const { json } = require('express');
mongoose.connect('mongodb://localhost:27017/test');
const todosRoutes = require('./routes/todos');

const app = express();

app.use(express.json())
// app.use((req, res, next)=> {
//     console.log(req.body);
//     next();
// })
app.use(cors()); 
app.use('/todos',todosRoutes)
app.use('/teacher',todosRoutes)


app.get('/teacher/:id',(req,res,next)=> {
    res.JSON([1,2,3])
})
app.get('/teacher/:id',(req,res,next)=> {
    res.JSON({user: req.params.id})
})

app.get('/todos',(req,res,next)=>{
  const data= json.parse(fs.readFileSync('./js.json', {encoding: 'utf-8'}))
   res.json(data)
  // res.send('rahma')
    // res.json({rahma})

});

app.get('/todos/:id',(req,res,next)=> {
    const {id}= req.params;
    const data = JSON.parse(fs.readFileSync('./js.json',{
        encoding: 'utf-8'
    }));
    const todo = data.find(todo=> +todo.ID === +id)
    res.JSON(todo)
})



app.post('/todos',(req,res,next)=>{
    const {title} = req.body
    const data= json.parse(fs.readFileSync('./js.json', {encoding: 'utf-8'}))
    const todo = {title}
    data.puch(todo)
    fs.writeFileSync('./js.json',JSON.stringify(data));
    res.json(todo);
    // ماينفعش احط حاجة بعدها لكن كده هي هلصت خلاص
    // next()
    // بنستخدم نكست علشان نطلع منريكوست لتاني
}) 

app.patch('/todos/:id',(req,res,next)=> {
    const {id} = req.params;
    const data = JSON.parse(fs.readFileSync('./js.json',{encoding: 'utf-8'}));
    const todo = data.find(todo => +todo.ID === +id);
    const {title} = req.body;
    todo.title = title;
    fs.writeFileSync('./data.json',JSON.stringify(data));
    res.json(todo)
})

app.listen(3000,() => {
    console.log('App is running on: localhost:3000');
})


// get / todos?userID=1
// Get / user? limit=10&offset=10
// get / user / :id /todos
// app.use(express.static('./filename')); to hnsert vid or image