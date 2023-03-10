const Chicken = require("../models/chicken.model");
const Farmyard = require("../models/farmyard.model")

exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    // Create a Chicken
    const chicken = new Chicken({
        name: req.body.name,
        birthday: req.body.birthday,
        weight: req.body.weight,
        steps: req.body.steps,
        isRunning: req.body.is_running,
        farmyard: req.body.fk_farmyard_id,
    });

    // Save Chicken in the database
    Chicken.create(chicken, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Chicken."
            });
        else res.send(data);
    });
};

// Retrieve all Chickens from the database.
exports.findAll = (req, res) => {

    Chicken.getAll((err, data) => {

        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving chickens."
            });
        else res.send(data);
    });
};

exports.run = (req, res) => {

    Chicken.run(req.params.id, (err, data) => {
        console.log(res)
    });

    Chicken.findById(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Chicken with id ${req.params.id}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving Chicken with id " + req.params.id
                });
            }
        } else res.send(data);
    });
};

exports.firstChickenRun = (req, res) => {
    Chicken.run(1, (err, data) => {
        console.log(res)
    });

    Chicken.findById(1, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Chicken with id ${req.params.id}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving Chicken with id " + req.params.id
                });
            }
        } else res.send(data);
    });
}

exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    console.log(req.params.id);

    Chicken.updateById(req.params.id, new Chicken(req.body), (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Not found Chicken with id ${req.params.id}.`
                    });
                } else {
                    res.status(500).send({
                        message: "Error updating Chicken with id " + req.params.id
                    });
                }
            } else res.send(data);
        }
    );
};
