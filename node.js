const fs = require("fs");
const fileName = "node.json";
var command = process.argv[2];
if(command === "add"){
    var todoString = process.argv[3];
    var dataString = fs.readFileSync(fileName, { encoding: "utf-8"});
    
    var array = JSON.parse(dataString);
    var todoId = array.length + 1;
    var object = {
        todo: todoString,
        id : todoId
    }
    array.push(object);
    fs.writeFileSync(fileName, JSON.stringify(array));

}
 else if(command === "list"){
  var todoString = process.argv[3];
  const data = JSON.parse(fs.readFileSync(fileName, { encoding: 'utf-8'
  }));
  console.log(data);
}
 else if(command === "edit"){
  var todoString = process.argv[3];
  var dataString = fs.readFileSync(fileName, { encoding: "utf-8"});
   var array = JSON.parse(dataString);
  var object = {
      id : todoId
  }
  find(element => element = id);
  // var editElem = 
  // array.find(id)     
  // if (!editElem) {
    // console.log("Element not found")

// else {
//     editElem.Id = newId;
  fs.writeFileSync(fileName, JSON.stringify(array));
}

else if(command === "delete"){
  const data = JSON.parse(fs.readFileSync('./node.json', {encoding: 'utf-8'
      }));
      var todoString = process.argv[3];
const newData = data.filter((elem)=>elem.id != todoString)
fs.writeFileSync(fileName, JSON.stringify(newData));
    }
// const fs = require("fs")
// const fileName = "node.json";
// const [, , command] = process.argv;
// if (command === "create") {
//   const [, , , ToDo] = process.argv;
//   const data = JSON.parse(fs.readFileSync('./node.json', {
//     encoding: 'utf-8'
//   }));
//   if (data.length == 0) {
//     fs.writeFileSync('./node.json', JSON.stringify([{
//       ToDo,
//       id: 1
//     }]));
//   } else {
//     const NewId = data[data.length - 1].id + 1
//     data.push({
//       study,
//       id:NewId
//     })
//     fs.writeFileSync('./node.json', JSON.stringify(data));
//  }
// }
// else if (command==='list'){
//   const [, , , ToDo] = process.argv;
//   const data = JSON.parse(fs.readFileSync('./node.json', { encoding: 'utf-8'
//   }));
//   console.log(data);
// }
// else if (command==='edite'){
//   const [, , , ToDo] = process.argv;
 
//   const data = JSON.parse(fs.readFileSync('./node.json', { encoding: 'utf-8'
//   }));
//   let Elem = data.find(((i) => i.id == id))
//   if (!Elem) {
//     console.log("not found")
// }
// else {
//     Elem.Id = 231;
//     fs.writeFileSync('./data.json', JSON.stringify(data));

// }
 
//   // fs.writeFileSync('./node.json', JSON.stringify(newValue));
      
//       // console.log('newValue');
// }

// else if (command==='delete'){
//   const data = JSON.parse(fs.readFileSync('./node.json', {
//     encoding: 'utf-8'
//   }));
//   const [, , , ToDo] = process.argv;
// const newData = data.filter((elem)=>elem.Id !== Id)
// fs.writeFileSync('./node.json', JSON.stringify(newData));}
