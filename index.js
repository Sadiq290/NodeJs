const express = require('express')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')
//should be after declare app
app.use(cors())
app.use(bodyParser.json())
// get dynamic
const name = ['Mahdin', 'Hasin', 'Fardin', 'Benjir', 'Sabit', 'Sadiq']
app.get('/users/:id', (req, res) => {
    const user = req.params.id
    const student = name[user]
    res.send({ Id: `${user}`, Player: `${student}` })
    // res.send({user,student})
    console.log(user)
})
app.get('/name', (req, res) => {
    const user = {
        Name: 'Mahdin',
        Class: '09',
        Age: '16',
    }
    res.send({ user })
})
app.get('/fruit/banana', (req, res) => {
    res.send({ fruit: 'Banana', quantity: '12', price: '170' })
})
// post 
app.post('/addUser', (req, res) => {
   console.log('Post request send')
   console.log('Data -' , req.body)
   const user = req.body
   user.id = 09;
   res.send(user)
})
app.listen(3000, () => console.log("Hello World"))
