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

        console.log("Add a new chicken : ", {id: res.insertId, ...req});
        result(null, {id: res.insertId, ...req});
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

Chicken.findById = (id, result) => {
    sql.query(`SELECT * FROM chicken WHERE id = ${id}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found chicken: ", res[0]);
            result(null, res[0]);
            return;
        }

        // not found Chicken with the id
        result({kind: "not_found"}, null);
    });
};

Chicken.run = (id, result) => {
    sql.query(`UPDATE chicken SET steps = steps + 1 WHERE id = ${id}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
    });

};

Chicken.updateById = (id, chicken, result) => {
    sql.query("UPDATE chicken SET name = ?, birthday = ?, weight = ?, steps=?,fk_farmyard_id=?  WHERE id = ?",
        [chicken.name, chicken.birthday, chicken.weight,chicken.steps,chicken.fk_farmyard_id, id],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }

            if (res.affectedRows === 0) {
                // not found Chicken with the id
                result({kind: "not_found"}, null);
                return;
            }

            console.log("updated chicken: ", {id: id, ...chicken});
            result(null, {id: id, ...chicken});
        }
    );
};

module.exports = Chicken;
