var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var pessoasRouter = require("./routes/pessoas");
var camposRouter = require("./routes/campos");
var adminRouter = require("./routes/admin");
var semanaRouter = require("./routes/semana");
var monitorRouter = require("./routes/monitor");



var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/api/pessoas", pessoasRouter);
app.use("/api/campos", camposRouter);
app.use("/api/admin", adminRouter);
app.use("/api/semana", semanaRouter);
app.use("/api/monitor", monitorRouter);


module.exports = app;
