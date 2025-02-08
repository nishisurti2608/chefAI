const Main = () => {
  return (
    <div className="flex justify-center mt-16">
      <input
        className=" bg-white w-96 h-10 rounded-lg border-1 border-gray-300 placeholder:font-normal font-inter text-lg pl-3.5 "
        placeholder="e.g. oregano"
        type="text"
        name="search"
      />
      <button className="bg-zinc-900 rounded-lg px-6 ml-4 text-white font-inter font-medium">
        + Add Ingredient
      </button>
    </div>
  );
};

export default Main;
