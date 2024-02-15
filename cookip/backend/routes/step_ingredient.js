const express = require("express");
const cc = require("kleur");
const db = require("../database/dbConnection");
const router = express.Router();

router.use((req, res, next) => {
  console.log(cc.yellow("Request made to /user Route"));
  next();
});

router.get("/:recipe_id/:step", async (req, res) => {
    try {
      const recipe_id = req.params.recipe_id;
      const step = req.params.step;
      // db.query 메소드가 제대로 정의되어 있는지 확인
      if (db && typeof db.query === 'function') {
        let sql = `SELECT * FROM step_ingredient where recipe_id = ${recipe_id} and step = ${step}` ;
        db.query(sql, (err, results) => {
          if (err) throw err.message;
          res.json({
            ingredient_id: results,
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
