const sql = require('./db')

const Chicken = function (chicken) {
    this.name = chicken.name;
    this.birthday = chicken.birthday;
    this.weight = chicken.weight;
    this.steps = chicken.steps;
    this.is_running = chicken.is_running;
    this.fk_farmyard_id = chicken.fk_farmyard_id;
}

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
