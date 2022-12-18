const sql = require('./db')

const Chicken = function (chicken) {
    this.name = chicken.name;
    this.birthday = chicken.birthday;
    this.weight = chicken.weight;
    this.steps = chicken.steps;
    this.is_running = chicken.is_running;
    this.fk_farmyard_id = chicken.fk_farmyard_id;
}

Chicken.create = (req, result) => {
    sql.query("INSERT INTO chicken SET ?", req, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("Add a new chicken : ", { id: res.insertId, ...req });
        result(null, { id: res.insertId, ...req });
    });
};

Chicken.getAll = (result) => {
    sql.query("SELECT * FROM chicken", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("chickens: ", res);
        result(null, res);
    });
};



module.exports = Chicken;
