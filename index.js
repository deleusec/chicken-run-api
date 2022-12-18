const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({extended: true}));

app.use(cors())

app.get("/", (req, res) => {
    res.json({message: "Welcome"});
});

require("./routes/chicken.routes")(app);

app.listen(port, () => {
    console.log(`App listening on port http://localhost:${port}/`)
})
