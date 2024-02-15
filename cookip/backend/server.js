const express = require("express");
const cors = require("cors");


const app = express();


var bodyParser = require('body-parser') // req를 받기위한 api 선언
app.use(bodyParser.urlencoded({ extended: false })) // req를 받기위한 api 선언(세팅) 2


// Middle ware dependencies
app.use(express.json());
app.use(cors());



const content = require('./routes/content');
app.use('/content', content);
 
const recipe = require("./routes/recipe");
app.use("/recipe", recipe);

const recipe_ingredient = require("./routes/recipe_ingredient");
app.use("/recipe_ingredient", recipe_ingredient);

const step = require("./routes/step");
app.use("/step", step);  //이거는 json파일 이 저장되는 url

const ingredient = require("./routes/ingredient");
app.use("/ingredient", ingredient);  //이거는 json파일 이 저장되는 url

const ingredient_availble = require("./routes/ingredient_availble");
app.use("/ingredient_availble", ingredient_availble);  //이거는 json파일 이 저장되는 url

const stepofstep = require("./routes/stepofstep");
app.use("/stepofstep", stepofstep);  //이거는 json파일 이 저장되는 url

const category = require("./routes/category");
app.use("/category", category);  //이거는 json파일 이 저장되는 url

const user = require("./routes/user");
app.use("/user", user);  //이거는 json파일 이 저장되는 url

const score = require("./routes/score");
app.use("/score", score);  //이거는 json파일 이 저장되는 url

const favorite_category = require("./routes/favorite_category");
app.use("/favorite_category", favorite_category);  //이거는 json파일 이 저장되는 url

const favorite_ingredient = require("./routes/favorite_ingredient");
app.use("/favorite_ingredient", favorite_ingredient);  //이거는 json파일 이 저장되는 url

const favorite_recipe = require("./routes/favorite_recipe");
app.use("/favorite_recipe", favorite_recipe);  //이거는 json파일 이 저장되는 url

const allergy = require("./routes/allergy");
app.use("/allergy", allergy);  //이거는 json파일 이 저장되는 url

const follow = require("./routes/follow");
app.use("/follow", follow);  //이거는 json파일 이 저장되는 url

const profile = require("./routes/profile");
app.use("/profile", profile);
// Port

const step_ingredient = require("./routes/step_ingredient");
app.use("/step_ingredient", step_ingredient);

const port = process.env.PORT || 3002;

app.listen(port, () => console.log(`Server started on port ${port}`));
