/*This File is Created by 
Nauman Akram Sp17-bcs-145-A 
on Saturday 2:03am*/

var express = require('express');
var app = express();

app.use(express.json());  //use to enable JASON

var cars = [
{
 name:'Mehran' , color:'Red' , price: 100000
},
{
  name:'Cultus' , color:'White' , price : 300000
},
 {
  name:'Corrola' , color:'Black' , price : 1500000
}
];

//Answer to point 1
app.get('/getlist/:name', (req, res) => {
  var car = cars.find(c => c.name === (req.params.name));
  if (!car) res.status(404).send('The car with given name doesnot Exist');
  else {
    res.send("The price of " + car.name + " is " + car.price);
  }
});

//Answer to point 2
app.get('/getlist', (req, res) => {
  res.send(cars);
});

//Answer to point 3
app.get('/getlistbyprice/:price', (req, res) => {
  var car = cars.filter(c => c.price > parseInt(req.params.price));
  if (!car) res.status(404).send('No Car Found!');
  res.send(car);
});

//Answer to point 4
app.put('/cars/update/:name/:price', (req, res) => {
  var car = cars.find(c => c.name === req.params.name);
  if (!car) res.status(404).send('There is no such car');
  else {
    car.price = parseInt(req.params.price);
    res.send(car);
  }
});

//Answer to point 5
app.delete('/cars/delete/:name', (req, res) => {
  var car = cars.find(c => c.name == req.params.name);
  if (!car) res.status(404).send('No car found');
  var carIndex = cars.indexOf(car);
  cars.splice(carIndex, 1);
  res.send(cars);
    });
  
//Answer to point 6
app.post('/cars/add', (req, res) => {
  var car = {
    name: req.body.name,
    color: req.body.color,
    price: req.body.price
  };
  cars.push(car);
  res.send(cars);
});



app.listen(8080,()=>{console.log("listning at 8080")});