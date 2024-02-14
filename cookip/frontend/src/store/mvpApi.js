
import axios from "axios";
//여기 사이트에 json 데이터 파일 있음
const urlRecipe = "http://localhost:5000/recipe";
const urlrecipe_ingredient = "http://localhost:5000/recipe_ingredient";
const urlstep = "http://localhost:5000/step";
const urlingredient = "http://localhost:5000/ingredient";
const urlingredient_availble = "http://localhost:5000/ingredient_availble";
const urlsetpofstep = "http://localhost:5000/stepofstep";
const urlcategory = "http://localhost:5000/category";
const urluser = "http://localhost:5000/user";
const urlscore = "http://localhost:5000/score";
const urlfavorite_category = "http://localhost:5000/favorite_category";
const urlfavorite_ingredient = "http://localhost:5000/favorite_ingredient";
const urlfavorite_recipe = "http://localhost:5000/favorite_recipe";
const urlallergy = "http://localhost:5000/allergy";
const urlfollow = "http://localhost:5000/follow";

class accountService {

  static getUserRecipe() {
    return axios.get(urlRecipe)
      .then((res) => {
        const data = res.data;
        return data.Recipe.map((guild_owner) => ({ ...guild_owner }));
      })
      .catch((error) => {
        throw new Error(`사용자 데이터를 가져오는 데 실패했습니다: ${error.message}`);
      });
  }

  static getLogin(id, password) {
    const url = `http://localhost:5000/user/${id}/${password}`;
    return axios.get(url)
    .then((res) => {
      const data = res.data;
      return data.User.map((guild_owner) => ({ ...guild_owner }));
    })
    .catch((error) => {
      throw new Error(`사용자 데이터를 가져오는 데 실패했습니다: ${error.message}`);
    });
  } 

  static getstepingredient(recipe_id, step) {
    const url = `http://localhost:5000/step_ingredient/${recipe_id}/${step}`;
    return axios.get(url)
      .then((res) => {
        const data = res.data;
        return data.step_recipeid_stepid.map((guild_owner) => ({ ...guild_owner }));
      })
      .catch((error) => {
        throw new Error(`사용자 데이터를 가져오는 데 실패했습니다: ${error.message}`);
      });
  }
  
  static getUserProfile(id) {
    const url = `http://localhost:5000/profile/${id}`;
    return axios.get(url)
      .then((res) => {
        const data = res.data;
        return data
      })
      .catch((error) => {
        throw new Error(`사용자 데이터를 가져오는 데 실패했습니다: ${error.message}`);
      });
  }

  static getUserRecipe_RecipeId(id) {
    const url = `http://localhost:5000/recipe/${id}`;
    return axios.get(url)
      .then((res) => {
        const data = res.data;
        return data.Recipe_one.map((guild_owner) => ({ ...guild_owner }));
      })
      .catch((error) => {
        throw new Error(`사용자 데이터를 가져오는 데 실패했습니다: ${error.message}`);
      });
  }

  static getUserRecipe_CategoryId(id) {
    const url = `http://localhost:5000/recipe/category/${id}`;
    return axios.get(url)
      .then((res) => {
        const data = res.data;
        return data.recipe_category.map((guild_owner) => ({ ...guild_owner }));
      })
      .catch((error) => {
        throw new Error(`사용자 데이터를 가져오는 데 실패했습니다: ${error.message}`);
      });
  }

  static getUserStep() {
    return axios.get(urlstep)
      .then((res) => {
        const data = res.data;// 여기 아래 subTitle은 백엔드server파일에서 result앞에 저장한 값이여야함
        return data.step.map((guild_owner) => ({ ...guild_owner }));
      })
      .catch((error) => {
        throw new Error(`사용자 데이터를 가져오는 데 실패했습니다: ${error.message}`);
      });
  }


  static getUserStep_recipeId(id) {
    const url = `http://localhost:5000/step/${id}`;
    return axios.get(url)
      .then((res) => {
        const data = res.data;
        return data.step_recipeid.map((guild_owner) => ({ ...guild_owner }));
      })
      .catch((error) => {
        throw new Error(`사용자 데이터를 가져오는 데 실패했습니다: ${error.message}`);
      });
  }

  static getUserStep_recipeId_stepId(id,id2) {
    const url = `http://localhost:5000/step/${id}/${id2}`;
    return axios.get(url)
      .then((res) => {
        const data = res.data;
        return data.step_recipeid_stepid.map((guild_owner) => ({ ...guild_owner }));
      })
      .catch((error) => {
        throw new Error(`사용자 데이터를 가져오는 데 실패했습니다: ${error.message}`);
      });
  }

  static getUseringredient() {
    return axios.get(urlingredient)
      .then((res) => {
        const data = res.data;// 여기 아래 subTitle은 백엔드server파일에서 result앞에 저장한 값이여야함
        return data.ingredient.map((guild_owner) => ({ ...guild_owner }));
      })
      .catch((error) => {
        throw new Error(`사용자 데이터를 가져오는 데 실패했습니다: ${error.message}`);
      });
  }

  static getUseringredient_IngredientId(id) {
    const url = `http://localhost:5000/ingredient/${id}`;
    return axios.get(url)
      .then((res) => {
        const data = res.data;
        return data.ingredient_one.map((guild_owner) => ({ ...guild_owner }));
      })
      .catch((error) => {
        throw new Error(`사용자 데이터를 가져오는 데 실패했습니다: ${error.message}`);
      });
  }

  static getUserigredient_availble() {
    return axios.get(urlingredient_availble)
      .then((res) => {
        const data = res.data;// 여기 아래 subTitle은 백엔드server파일에서 result앞에 저장한 값이여야함
        return data.ingredient_availble.map((guild_owner) => ({ ...guild_owner }));
      })
      .catch((error) => {
        throw new Error(`사용자 데이터를 가져오는 데 실패했습니다: ${error.message}`);
      });
  }

  static getUserrecipe_ingredient() {
    return axios.get(urlrecipe_ingredient)
      .then((res) => {
        const data = res.data;// 여기 아래 subTitle은 백엔드server파일에서 result앞에 저장한 값이여야함
        return data.recipe_ingredientunit.map((guild_owner) => ({ ...guild_owner }));
      })
      .catch((error) => {
        throw new Error(`사용자 데이터를 가져오는 데 실패했습니다: ${error.message}`);
      });
  }


  static getUserrecipe_ingredient_RecipeId(id) {
    const url = `http://localhost:5000/recipe_ingredient/${id}`;
    return axios.get(url)
      .then((res) => {
        const data = res.data;
        return data.recipe_ingredientunit_recipe_id.map((guild_owner) => ({ ...guild_owner }));
      })
      .catch((error) => {
        throw new Error(`사용자 데이터를 가져오는 데 실패했습니다: ${error.message}`);
      });
  }

  static getUserrecipe_ingredient_UseRecipe_IngredientId(id) {
    const url = `http://localhost:5000/recipe_ingredient/UseRecipe/${id}`;
    return axios.get(url)
      .then((res) => {
        const data = res.data;
        return data.recipe_ingredientunit_useRecipe.map((guild_owner) => ({ ...guild_owner }));
      })
      .catch((error) => {
        throw new Error(`사용자 데이터를 가져오는 데 실패했습니다: ${error.message}`);
      });
  }


  static getUserstepofstep() {
    return axios.get(urlsetpofstep)
      .then((res) => {
        const data = res.data;// 여기 아래 subTitle은 백엔드server파일에서 result앞에 저장한 값이여야함
        return data.stepofstep.map((guild_owner) => ({ ...guild_owner }));
      })
      .catch((error) => {
        throw new Error(`사용자 데이터를 가져오는 데 실패했습니다: ${error.message}`);
      });
  }


  static getUserstepofstep_RecipeId(id) {
    const url = `http://localhost:5000/stepofstep/${id}`;
    return axios.get(url)
      .then((res) => {
        const data = res.data;
        return data.stepofstep_recipeId.map((guild_owner) => ({ ...guild_owner }));
      })
      .catch((error) => {
        throw new Error(`사용자 데이터를 가져오는 데 실패했습니다: ${error.message}`);
      });
  }

  static getUserstepofstep_RecipeId_StepId(id,id2) {
    const url = `http://localhost:5000/stepofstep/${id}/${id2}`;
    return axios.get(url)
      .then((res) => {
        const data = res.data;
        return data.stepofstep_recipeid_recipestep.map((guild_owner) => ({ ...guild_owner }));
      })
      .catch((error) => {
        throw new Error(`사용자 데이터를 가져오는 데 실패했습니다: ${error.message}`);
      });
  }

  static getUserstepofstep_RecipeId_StepId_StepOfStepId(id,id2,id3) {
    const url = `http://localhost:5000/stepofstep/${id}/${id2}/${id3}`;
    return axios.get(url)
      .then((res) => {
        const data = res.data;
        return data.recipe_step_stepofstep.map((guild_owner) => ({ ...guild_owner }));
      })
      .catch((error) => {
        throw new Error(`사용자 데이터를 가져오는 데 실패했습니다: ${error.message}`);
      });
  }


  static getUsercategory() {
    return axios.get(urlcategory)
      .then((res) => {
        const data = res.data;// 여기 아래 subTitle은 백엔드server파일에서 result앞에 저장한 값이여야함
        return data.category.map((guild_owner) => ({ ...guild_owner }));
      })
      .catch((error) => {
        throw new Error(`사용자 데이터를 가져오는 데 실패했습니다: ${error.message}`);
      });
  }


  static getUsercategory_CategoryId(id) {
    const url = `http://localhost:5000/category/${id}`;
    return axios.get(url)
      .then((res) => {
        const data = res.data;
        return data.category_id.map((guild_owner) => ({ ...guild_owner }));
      })
      .catch((error) => {
        throw new Error(`사용자 데이터를 가져오는 데 실패했습니다: ${error.message}`);
      });
  }

  static getUser() {
    return axios.get(urluser)
      .then((res) => {
        const data = res.data;// 여기 아래 subTitle은 백엔드server파일에서 result앞에 저장한 값이여야함
        return data.user.map((guild_owner) => ({ ...guild_owner }));
      })
      .catch((error) => {
        throw new Error(`사용자 데이터를 가져오는 데 실패했습니다: ${error.message}`);
      });
  }

  static getUserprofile(id) {
    const url = `http://localhost:5000/profile/${id}`;
    return axios.get(url)
      .then((res) => {
        const data = res.data;
        return data.category_id.map((guild_owner) => ({ ...guild_owner }));
      })
      .catch((error) => {
        throw new Error(`사용자 데이터를 가져오는 데 실패했습니다: ${error.message}`);
      });
  }

  static getScore() {
    return axios.get(urlscore)
      .then((res) => {
        const data = res.data;// 여기 아래 subTitle은 백엔드server파일에서 result앞에 저장한 값이여야함
        return data.score.map((guild_owner) => ({ ...guild_owner }));
      })
      .catch((error) => {
        throw new Error(`사용자 데이터를 가져오는 데 실패했습니다: ${error.message}`);
      });
  }

  static getAllergy() {
    return axios.get(urlallergy)
      .then((res) => {
        const data = res.data;// 여기 아래 subTitle은 백엔드server파일에서 result앞에 저장한 값이여야함
        return data.allergy.map((guild_owner) => ({ ...guild_owner }));
      })
      .catch((error) => {
        throw new Error(`사용자 데이터를 가져오는 데 실패했습니다: ${error.message}`);
      });
  }

  static getFollow() {
    return axios.get(urlfollow)
      .then((res) => {
        const data = res.data;// 여기 아래 subTitle은 백엔드server파일에서 result앞에 저장한 값이여야함
        return data.follow.map((guild_owner) => ({ ...guild_owner }));
      })
      .catch((error) => {
        throw new Error(`사용자 데이터를 가져오는 데 실패했습니다: ${error.message}`);
      });
  }

  static getFavorite_category() {
    return axios.get(urlfavorite_category)
      .then((res) => {
        const data = res.data;// 여기 아래 subTitle은 백엔드server파일에서 result앞에 저장한 값이여야함
        return data.favorite_category.map((guild_owner) => ({ ...guild_owner }));
      })
      .catch((error) => {
        throw new Error(`사용자 데이터를 가져오는 데 실패했습니다: ${error.message}`);
      });
  }

  static getFavorite_ingredient() {
    return axios.get(urlfavorite_ingredient)
      .then((res) => {
        const data = res.data;// 여기 아래 subTitle은 백엔드server파일에서 result앞에 저장한 값이여야함
        return data.favorite_ingredient.map((guild_owner) => ({ ...guild_owner }));
      })
      .catch((error) => {
        throw new Error(`사용자 데이터를 가져오는 데 실패했습니다: ${error.message}`);
      });
  }

  static getFavorite_recipe() {
    return axios.get(urlfavorite_recipe)
      .then((res) => {
        const data = res.data;// 여기 아래 subTitle은 백엔드server파일에서 result앞에 저장한 값이여야함
        return data.favorite_recipe.map((guild_owner) => ({ ...guild_owner }));
      })
      .catch((error) => {
        throw new Error(`사용자 데이터를 가져오는 데 실패했습니다: ${error.message}`);
      });
  }

  static getFavorite_recipe_userid(userid) {
    const url = `http://localhost:5000/favorite_recipe/${userid}`;
    return axios.get(url)
      .then((res) => {
        const data = res.data;
        return data.favorite_recipe_userid.map((guild_owner) => ({ ...guild_owner }));
      })
      .catch((error) => {
        throw new Error(`사용자 데이터를 가져오는 데 실패했습니다: ${error.message}`);
      });
  }




}

export default accountService;
