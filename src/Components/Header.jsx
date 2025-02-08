import { LuChefHat } from "react-icons/lu";

const Header = () => {
  return (
    <div className="flex bg-white w-full h-22 shadow-xl justify-center items-center">
      <LuChefHat className="size-10 mr-3" />
      <span className="font-inter text-3xl font-normal text-zinc-900 -tracking-wider">
        Chef Claude
      </span>
    </div>
  );
};

export default Header;
