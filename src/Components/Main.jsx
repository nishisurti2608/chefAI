import { useState } from "react";
import ClaudeRecipe from "./CloudeRecipe.jsx";
import IngredientsList from "./IngredientsList";
import { getRecipeFromMistral } from "../../ai.js";


const Main = () => {
  const [ingredient, setIngrdient] = useState([]);
  const [recipe, setRecipe] = useState("");

  async function getRecipe() {
    const generatedRecipe = await getRecipeFromMistral(ingredient);
    setRecipe(generatedRecipe);
  }
  const ingredientsListItems =
    ingredient && ingredient.length > 0
      ? ingredient.map((item) => <li key={item}>{item}</li>)
      : [];

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    if (!newIngredient) return;
    setIngrdient((prevIngredient) => {
      const updatedIngredients = [...prevIngredient, newIngredient];

      return updatedIngredients;
    });
  }
  return (
    <main className="ml-25">
      <form action={addIngredient} className="flex justify-center mt-16">
        <input
          className=" bg-white w-96 h-10 rounded-lg border-1 border-gray-300 placeholder:font-normal font-inter text-lg pl-3.5 "
          placeholder="e.g. oregano"
          type="text"
          name="ingredient"
        />
        <button className="bg-zinc-900 rounded-lg px-6 ml-4 text-white font-inter font-medium">
          + Add Ingredient
        </button>
      </form>
      {ingredientsListItems.length > 0 && (
        <>
          <IngredientsList
            list={ingredientsListItems}
            handleClick={getRecipe}
          />
        </>
      )}

      {recipe && <ClaudeRecipe recipe={recipe} />}
    </main>
  );
};

export default Main;
