class Basic{
    Hello_Message(rew, res){
        const info = {message : "Welcome to Node JS"};
        res.json(info);
        res.end();
    }

    Two_Nb_Sum(req, res){
        let a = 11, b = 4, c;
        c = a + b;
        res.json({Sum : 'Addition is ' + c});
        res.end();
    }

    Substraction(req, res){
        let a = req.body.ist;
        let b = req.body.iind;
        let c = a - b;
        res.json({Ans : 'Substraction is ' + c});
        res.end();
    }

    Multiplication(req, res){
        let a = req.body.ist;
        let b = req.body.iind;
        let c= a * b;
        res.json({Ans : "Multiplication is " + c});
        res.end();
    }

}

const basic_obj = new Basic();
module.exports = basic_obj;