const express=require('express');
const app = express();

const path= require('path');
const port= 9000;

// //Builtin Middlewares

// console.log(__dirname);  //path of dir that you working on
const staicPath = path.join(__dirname ,"../public");

//express.static(path)
app.use(express.static(staicPath));

//Express app
//get means to get data from the server
app.get('/testing', (req,res)=>{
    res.send("Welcome to the home page");
});

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './public', 'index.html'));
  });

//for the listening the server
app.listen(port,( )=>{
    console.log(`The express is listening the port no ${port}`);
})
