const express = require('express');
const users =require('./db.json');
const app = express();

const port = process.env.PORT || 3000;

app.get('/api/users',(req,res) => {
    res.json(users);
});

app.get("/", (req, res) => { res.send("Hello! Node.js"); 

});

app.get("/pleng", (req, res) => { res.send("Hello! Rinrada");  

});

app.get('/api/users/:id', (req, res) => {
   res.json(users.find(user => user.id === Number(req.params.id)))

})




app.listen(port, () => {
    console.log("Starting node.js at http://127.0.0.1:" + port);//post เช็คผ่านเว็บไซต์ไม่ได้,get เช็คผ่านเว็บไซต์ได้
    console.log("Starting node.js at http://127.0.0.1:" + port+'/api/users');
});