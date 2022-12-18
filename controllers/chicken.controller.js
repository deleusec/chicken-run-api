const Chicken = require("../models/chicken.model");

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
        birthday : req.body.birthday,
        weight : req.body.weight,
        steps : req.body.steps,
        isRunning : req.body.is_running,
        farmyard : req.body.fk_farmyard_id,
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

    Chicken.getAll( (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving chickens."
            });
        else res.send(data);
    });
};
