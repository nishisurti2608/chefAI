import { useState } from "react";

const Main = () => {
  const [ingredient, setIngrdient] = useState([]);
  const [recipeShown, setRecipeShown] = useState(false);

  function showRecipe() {
    setRecipeShown(true);
  }
  const ingredientsListItems = ingredient.map((item) => (
    <li key={item}>{item}</li>
  ));

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    setIngrdient((prevIngredient) => [...prevIngredient, newIngredient]);
    console.log(ingredient);
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
      {ingredientsListItems.length > 0 ? (
        <>
          <h1 className="text-zinc-900 text-3xl mt-8 mb-8 font-inter font-semibold ">
            Ingredients on hand:
          </h1>
          <ul>{ingredientsListItems}</ul>
        </>
      ) : null}

      {ingredientsListItems.length > 3 ? (
        <div className="bg-[#F0EFEB] flex justify-center rounded-lg  h-28 w-3xl  items-start mx-auto my-auto">
          <span className="font-inter font-medium text-zinc-900 my-auto">
            Ready for a recipe?
            <p className="text-gray-400 font-normal font-inter">
              Generate a recipe from your list of ingredients
            </p>
          </span>

          <button
            onClick={showRecipe}
            className=" bg-[#D17557] ml-5 cursor-pointer rounded-lg px-4 py-2 text-white my-auto"
          >
            Get a recipe
          </button>
        </div>
      ) : null}
      {recipeShown ? (
        <section>
          <h2>Chef Claude Recommends:</h2>
          <article className="suggested-recipe-container" aria-live="polite">
            <p>
              Based on the ingredients you have available, I would recommend
              making a simple a delicious <strong>Beef Bolognese Pasta</strong>.
              Here is the recipe:
            </p>
            <h3>Beef Bolognese Pasta</h3>
            <strong>Ingredients:</strong>
            <ul>
              <li>1 lb. ground beef</li>
              <li>1 onion, diced</li>
              <li>3 cloves garlic, minced</li>
              <li>2 tablespoons tomato paste</li>
              <li>1 (28 oz) can crushed tomatoes</li>
              <li>1 cup beef broth</li>
              <li>1 teaspoon dried oregano</li>
              <li>1 teaspoon dried basil</li>
              <li>Salt and pepper to taste</li>
              <li>
                8 oz pasta of your choice (e.g., spaghetti, penne, or linguine)
              </li>
            </ul>
            <strong>Instructions:</strong>
            <ol>
              <li>
                Bring a large pot of salted water to a boil for the pasta.
              </li>
              <li>
                In a large skillet or Dutch oven, cook the ground beef over
                medium-high heat, breaking it up with a wooden spoon, until
                browned and cooked through, about 5-7 minutes.
              </li>
              <li>
                Add the diced onion and minced garlic to the skillet and cook
                for 2-3 minutes, until the onion is translucent.
              </li>
              <li>Stir in the tomato paste and cook for 1 minute.</li>
              <li>
                Add the crushed tomatoes, beef broth, oregano, and basil. Season
                with salt and pepper to taste.
              </li>
              <li>
                Reduce the heat to low and let the sauce simmer for 15-20
                minutes, stirring occasionally, to allow the flavors to meld.
              </li>
              <li>
                While the sauce is simmering, cook the pasta according to the
                package instructions. Drain the pasta and return it to the pot.
              </li>
              <li>
                Add the Bolognese sauce to the cooked pasta and toss to combine.
              </li>
              <li>
                Serve hot, garnished with additional fresh basil or grated
                Parmesan cheese if desired.
              </li>
            </ol>
          </article>
        </section>
      ) : null}
    </main>
  );
};

export default Main;
