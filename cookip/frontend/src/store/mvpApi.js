import axios from "axios";
//여기 사이트에 json 데이터 파일 있음
const urlRecipe = "http://localhost:5000/recipe";
const urlrecipe_ingredient = "http://localhost:5000/recipe_ingredient";
const urlstep = "http://localhost:5000/step";
const urlingredient = "http://localhost:5000/ingredient";
const urlcategory = "http://localhost:5000/category";
const urlstepofstep = "http://localhost:5000/stepofstep"

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

  static getUsersubTitle() {
    return axios.get(urlstep)
      .then((res) => {
        const data = res.data;// 여기 아래 subTitle은 백엔드server파일에서 result앞에 저장한 값이여야함
        return data.step.map((guild_owner) => ({ ...guild_owner }));
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

  static getUserstepofstep() {
    return axios.get(urlstepofstep)
      .then((res) => {
        const data = res.data;// 여기 아래 subTitle은 백엔드server파일에서 result앞에 저장한 값이여야함
        return data.stepofstep.map((guild_owner) => ({ ...guild_owner }));
      })
      .catch((error) => {
        throw new Error(`사용자 데이터를 가져오는 데 실패했습니다: ${error.message}`);
      });
  }


  static getUserstepofstepById(id) {
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

  static getUsercategory() {
    return axios.get(urlcategory)
      .then((res) => {
        const data = res.data;
        return data.category.map((guild_owner) => ({ ...guild_owner }));
      })
      .catch((error) => {
        throw new Error(`사용자 데이터를 가져오는 데 실패했습니다: ${error.message}`);
      });
  }


}

export default accountService;
