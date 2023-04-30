require('dotenv').config()

const express = require('express');
const mongodb = require('./connection');
const app = express()
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/professional', async (req, res) => {
    const database = await mongodb.client.db("week2_team");
    const collection = await database.collection('user');
    const data = await collection.find({});
    const array = await data.toArray();
    console.log(array);
    res.set('Access-Control-Allow-Origin', 'http://localhost:5500');
    res.json(array[0]);
  })
 
console.log(mongodb)
// console.log(process.env.MONGODB_CONNECTION)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`) 
})
