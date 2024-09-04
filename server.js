const express = require("express");

// initialization
const app = express();

// application will now use json format for data
app.use(express.json());

const port = 8081;

const toDoList = ["Complete Node Byte", "Play Cricket"];

// http://localhost:8081/todos
// get method
app.get("/todos", (req, res) => {
    // callback
    res.status(200).send(toDoList);
});

// http://localhost:8081/todos
// post method
app.post("/todos", (req, res) => {
    let newtodoitem = req.body.item;
    toDoList.push(newtodoitem);
    res.status(201).send({
        message: "task added succesfully"
    });
});

// http://localhost:8081/todos
// delete method
app.delete("/todos", (req, res) => {
    // callback
    const itemtodelete = req.body.item;

    toDoList.find((element, index) => {
        if (element === itemtodelete) {
            toDoList.splice(index, 1);
        }
        res.status(202).send({
            message: `deleted item${req.body.item}`
        });
    });

});

// all the other methords on a particular route
app.all("/todos", (req, res) => {
    res.status(501).send();
});

// all the other routes
app.all('*', (req, res) => {
    res.status(404).send();
});

app.listen(port, () => {
    // callback
    console.log(`nodejs server started on port ${port}`);
});
