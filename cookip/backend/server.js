const express = require("express");
const cors = require("cors");
const multer = require("multer");

const app = express();

const fileFilter = function(req, file, cb) {
    const allowedTypes = ["image/jpeg", "image/png", "image/gif"];

    if (!allowedTypes.includes(file.mimetype)) {
        const error = new Error("Wrong file type");
        error.code = "LIMIT_FILE_TYPES";
        return cb(error, false);
    }

    cb(null, true);
};

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname); // Use the original name as the filename
    },
});

const upload = multer({
    storage: storage,
    fileFilter,
});

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

app.post('/upload', upload.single('file'), (req, res) => {
    res.json({ file: req.file });
})

app.use(function(err, req, res, next) {
    if(err.code === "LIMIT_FILE_TYPES") {
        res.status(422).json({error: "Only images are allowed"})
        return
    }
})
const port = 3001;

app.listen(port, () => console.log(`Server started on port ${port}`));
