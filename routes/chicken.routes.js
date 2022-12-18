const chickens = require("../controllers/chicken.controller");
module.exports = app => {
    const chickens = require("../controllers/chicken.controller");

    const router = require("express").Router();

    // Create a new Chicken
    router.post("/", chickens.create);

    // Retrieve all Chickens
    router.get("/", chickens.findAll);

    // Making a Chicken run
    router.get("/:id/run", chickens.run);

    // Making a Chicken run on Chicken 1
    router.get("/run", chickens.firstChickenRun);

    // Update a Chicken with id
    router.put("/:id", chickens.update);

    app.use('/api/chickens', router);
}
