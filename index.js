const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();
app.use(express.json());
require("dotenv").config();
const port = process.env.port;
const mongoDB_URL = process.env.mongoDB_URL;

app.set('view engine', 'ejs');
const dummy = [
    {
        name: "Daniel",
        age: 33,
        email: "wkwkm@ms.ek",
        phone: "0803-123-4567",
        city: "Lagos",
        occupation: "Developer",
        status: "active"
    },
    {
        name: "ade",
        email: "ddmo@ddk.cm",
        age: 33,
        phone: "0812-555-0198",
        city: "Ibadan",
        occupation: "Designer",
        status: "active"
    },
    {
        name: "ade",
        email: "ddmo@ddk.cm",
        age: 33,
        phone: "0706-222-8844",
        city: "Abuja",
        occupation: "Teacher",
        status: "inactive"
    },
    {
        name: "Michael",
        age: 28,
        email: "michael@example.com",
        phone: "0901-444-7788",
        city: "Enugu",
        occupation: "Accountant",
        status: "active"
    },
    {
        name: "Fatima",
        age: 31,
        email: "fatima@example.com",
        phone: "0806-987-1122",
        city: "Kano",
        occupation: "Nurse",
        status: "active"
    },
    {
        name: "Chinedu",
        age: 25,
        email: "chinedu@example.com",
        phone: "0814-333-6655",
        city: "Port Harcourt",
        occupation: "Photographer",
        status: "pending"
    }
]

app.get('/dummy', (req, res) =>{
    res.json(dummy)
})



app.listen(port, () => {
    console.log(`E dey work on port ${port}`);

})