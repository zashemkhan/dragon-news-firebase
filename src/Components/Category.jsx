import React, { use } from "react";
import { NavLink } from "react-router";

const CategoriesPromise = fetch("/categories.json").then((res) => res.json());

const Category = () => {
  const categories = use(CategoriesPromise);


  
  return (
    <div>
      <h2 className="font-bold">All Categories {categories.length}</h2>

      <div className="grid grid-cols-1 gap-3 mt-4">
        {categories.map((category) => (
          <NavLink
            to={`/category/${category.id}`}
            key={category.id}
            className="btn bg-base-100 border-0 hover:bg-base-200 text-accent font-semibold "
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Category;
