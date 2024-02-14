const express = require("express");
const cc = require("kleur");
const db = require("../database/dbConnection");
const router = express.Router();

router.use((req, res, next) => {
  console.log(cc.yellow("Request made to /recipe Route"));
  next();
});

router.get("/", async (req, res) => {
  try {
    // db.query 메소드가 제대로 정의되어 있는지 확인
    if (db && typeof db.query === 'function') {
      let sql = "SELECT * FROM Profile_Favorite_Recipe";
      db.query(sql, (err, results) => {
        if (err) throw err.message;
        res.json({
          favorite_recipe: results,
        });
        console.log(cc.green("recipe retrieved!"));
      });
    } else {
      throw new Error("db.query is not a function");
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/:user_id/:profile_id", async (req, res) => {
  try {
    const userNum = req.params.user_id;
    const profileNum = req.params.profile_id;
    // db.query 메소드가 제대로 정의되어 있는지 확인
    if (db && typeof db.query === 'function') {
      let sql = `SELECT recipe_id FROM Profile_Favorite_Recipe where user_id = ${userNum} and profile_id = ${profileNum}`;
      db.query(sql, (err, results) => {
        if (err) throw err.message;
        res.json({
          User_profile_Favorite_Recipe: results,//이거가 allget 에 변수로감
        });
        console.log(cc.green("Users retrieved!"));
      });
    } else {
      throw new Error("db.query is not a function");
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
