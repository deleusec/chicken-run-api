const Chicken = require("../models/chicken.model");

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
