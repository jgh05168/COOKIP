const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken')
const app = express();

// Middle ware dependencies
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json())
const jwtKey = "abc1234567";

const recipe = require("./routes/recipe");
app.use("/recipe", recipe);

const recipe_ingredient = require("./routes/recipe_ingredient");
app.use("/recipe_ingredient", recipe_ingredient);

const step = require("./routes/step");
app.use("/step", step);  //이거는 json파일 이 저장되는 url

const ingredient = require("./routes/ingredient");
app.use("/ingredient", ingredient);  //이거는 json파일 이 저장되는 url

const stepofstep = require("./routes/stepofstep");
app.use("/stepofstep", stepofstep);  //이거는 json파일 이 저장되는 url

const category = require("./routes/category");
app.use("/category", category);  //이거는 json파일 이 저장되는 url

const ingredient_availble = require("./routes/ingredient_availble");
app.use("/ingredient_availble", ingredient_availble); 

const user = require("./routes/user");
app.use("/user", user);
 
// Port
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
