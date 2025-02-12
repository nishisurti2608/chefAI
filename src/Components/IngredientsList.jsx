const IngredientsList = (props) => {
  return (
    <div>
      <h1 className="text-zinc-900 text-3xl mt-8 mb-8 font-inter font-semibold ">
        Ingredients on hand:
      </h1>

      <ul>
        {props.list.map((ingredient) => (
          <li key={ingredient.key}>{ingredient}</li>
        ))}
      </ul>
      {props.list.length > 3 ? (
        <div className="bg-[#F0EFEB] flex justify-center rounded-lg  h-28 w-3xl  items-start mx-auto my-auto">
          <span className="font-inter font-medium text-zinc-900 my-auto">
            Ready for a recipe?
            <p className="text-gray-400 font-normal font-inter">
              Generate a recipe from your list of ingredients
            </p>
          </span>

          <button
            onClick={props.handleClick}
            className=" bg-[#D17557] ml-5 cursor-pointer rounded-lg px-4 py-2 text-white my-auto"
          >
            Get a recipe
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default IngredientsList;
