module.exports = app => {
    const chickens = require("../controllers/chicken.controller");

    const router = require("express").Router();

    // Retrieve all Chickens
    router.get("/", chickens.findAll);

    app.use('/api/chickens', router);
}
