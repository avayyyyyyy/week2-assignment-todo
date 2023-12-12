const express = require("express");
const { todo } = require("node:test");
const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

const todos = [
  {
    id: 0,
    task: "Take Breakfast",
  },
];

app.post("/todos", function (req, res) {
  console.log(req.body);
  const data = {
    id: todos.length,
    task: req.body.task,
  };
  todos.push(data);
  console.log(todos);
  res.send(todos);
});

app.get("/todos", function (req, res) {
  res.json(todos);
});

app.listen(port);
