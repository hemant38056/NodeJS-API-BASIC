const connect = require('../Database');

class Human{
    All_Human_Record(req, res){
        connect.getConnection((err, myConnection) => {
            if(err){
                res.json({Database : "Server off" + err});
                res.end();
            }
            else{
                const q = "select * from Human";
                myConnection.query(q, (err, data) => {
                    if(err){
                        res.json({err});
                        res.end();
                    }
                    else{
                        res.json(data);
                        res.end();
                    }
                })

            }
        })
        
    }

    Store_Record(req, res){
        connect.getConnection((err, myConnection) =>{
            if(err){
                res.status(500).json(err);
                res.end();
            }
            else{
                const q = `insert into human(name, aadharcard, address) values ('${req.body.name}', '${req.body.aadharcard}', '${req.body.address}')`;
                myConnection.query(q, (err) => {
                    if(err){
                        res.status(500).json({message: err.message});
                        res.end();
                    }
                    else{
                        res.status(200).json(req.body.name + " Record Inserted Successfully")
                        res.end();
                    }
                })
            }
        })
    }
}

const human_obj = new Human();
module.exports = human_obj;