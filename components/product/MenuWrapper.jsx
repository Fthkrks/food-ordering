import { useState } from "react";
import Title from "../UI/Title";
import MenuItem from "./MenuItem";

const MenuWrapper = ({ categoryList }) => {
  const [active, setActive] = useState(0)
  return (
    <div className=" container mx-auto mb-10 ">
      <div className="flex flex-col items-center mb-24 w-full">
        <Title classname="text-[40px]">Our Menu</Title>
        <div className="mt-10">
          {categoryList.map((category, index) => (
            <button
              key={category._id}
              className={`px-6 py-2 rounded-3xl ${index === active && "text-white bg-secondary"}`}
              onClick={ () =>setActive(index)}
            >
              {category.title}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-8 grid  gap-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </div>
  );
};

export default MenuWrapper;
