const express = require('express');
const basic_obj = require('./controller/BasicController');
const human_obj = require('./controller/HumanController');
const abc_obj = require('./controller/AbcController');
const router = express.Router();

router.get('/', (req, res) => {
    basic_obj.Hello_Message(req, res);
})

router.get('/sum_of_two_numbers', (req, res) => {
    basic_obj.Two_Nb_Sum(req, res);
})

router.get('/subtract', (req, res) => {
    basic_obj.Substraction(req, res);
})

router.post('/Multiply', (req, res) => {
    basic_obj.Multiplication(req, res);
})

router.get('/fetch_records', (req, res) => {
    human_obj.All_Human_Record(req, res);
})

router.post('/store_data', (req, res) => {
    human_obj.Store_Record(req, res);
})

router.get('/fetch_emp', (req, res) => {
    abc_obj.Display_Emp(req, res);
})

router.use((req, res, next) => {
    res.status(404).json({message : "This Api Url is not Exists in Endpoint"});
})


module.exports = router;