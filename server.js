const express = require("express");
const app = express();

const port = 5000;

/*
*	Routes
*/
app.get("/", (req, res) => {
    res.send("Hello Dev!");
});


/*
    Add Requests
*/


/*
*	Middleware
*/
const startHandler = () => {
	console.log(`Express listening on port ${port}`)
}


app.listen(port, startHandler);