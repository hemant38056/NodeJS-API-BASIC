const mongo_model = require('../mongodb_database');

class Abc{
    emp_model = null;
    constructor(){
        this.emp_model = mongo_model.model('emp_store', new mongo_model.Schema({}, {strict:false}), 'Employee')
    }

    async Display_Emp(req, res){
        const data = await this.emp_model.find({});
        res.json(data);
        res.end();
    }
}

const abc_obj = new Abc();
module.exports = abc_obj;