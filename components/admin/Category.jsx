import React, { useState } from "react";
import Title from "../UI/Title";
import Input from "../form/Input";
import { useEffect } from "react";
import axios from "axios";

const Category = () => {
  const [inputText, setInputText] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/categories`
        );
        setCategories(res?.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCategories();
  });

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/categories`,
        { title: inputText }
      );
      setCategories([...categories, res.data]);
      setInputText("");
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      if(confirm("Are you want to delete this category ? ")){
        await axios.delete(
            `${process.env.NEXT_PUBLIC_API_URL}/categories/${id}`,
          );
          setCategories(categories.filter((cat) => cat._id !== id));
      }

    } catch (error) {
      console.log(error);
    }
  };
 
  return (
    <div className="lg:p-8 flex-1 lg:mt-0 mt-5">
      <Title classname="text-[40px]">Category</Title>
      <div className="mt-5 ">
        <div className="flex gap-x-2 items-center">
          <Input
            placeholder="Add a New Category..."
            onChange={(e) => setInputText(e.target.value)}
            value={inputText}
          />
          <button className="btn-primary " onClick={handleCreate}>
            Add
          </button>
        </div>
        <div className="mt-4  max-h-[250px] overflow-auto ">
          {categories?.map((category) => (
            <div className="flex justify-between mt-10 " key={category._id}>
              <b className="text-xl">{category.title}</b>
              <button
                className="btn-primary !bg-red-600"
                onClick={() => {
                  handleDelete(category._id)
                }}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
