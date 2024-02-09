import Image from "next/image";
import React from "react";
import OutsideClickHandler from "react-outside-click-handler";
import Title from "../UI/Title";
import { IoIosCloseCircle } from "react-icons/io";

const AddProduct = ({ isProductModal, setIsProductModal }) => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen   flex justify-center items-center z-50 ">
      <div className=" absolute w-full h-full bg-white opacity-50"></div>
      <OutsideClickHandler
        onOutsideClick={() => setIsProductModal(!isProductModal)}
      >
        <div className="w-full h-full ">
          <div className="relative  md:w-[600px] w-[370px] border-2 p-10 bg-white  rounded-3xl">
            <Title classname="text-[40px] text-center">Add a New Product</Title>
            <div className="flex flex-col text-sm mt-6">
              <span className="font-semibold mb-1">Choose an image</span>
              <input type="file" />
            </div>
            <div className="flex flex-col text-sm mt-4">
              <span className="font-semibold mb-[2px]">Title</span>
              <input
                type="text"
                className="border-2 p-1 h-8 text-sm px-1 outline-none"
                placeholder="Write a title..."
              />
            </div>
            <div className="flex flex-col text-sm mt-4">
              <span className="font-semibold mb-[2px]">Desc</span>
              <textarea
                className="border-2 p-1 h-14 text-sm px-1 outline-none"
                placeholder="Write a description..."
              />
            </div>
            <div className="flex flex-col text-sm mt-4">
              <span className="font-semibold mb-[2px]">Select Category</span>
              <select
                className="border-2 p-1 h-8 text-sm px-2 outline-none"
                placeholder="Write a title..."
              >
                <option value="1">Category 1</option>
                <option value="1">Category 1</option>
                <option value="1">Category 1</option>
                <option value="1">Category 1</option>
                <option value="1">Category 1</option>
              </select>
            </div>
            <div className="flex flex-col text-sm mt-4">
              <span className="font-semibold mb-[2px]">Prices</span>
              <div className="flex justify-between  flex-wrap">
                <input
                  type="number"
                  className="border-b-2 p-1 pb-0 pl-0 h-8 text-sm px-1 outline-none"
                  placeholder="small"
                />
                <input
                  type="number"
                  className="border-b-2 p-1 pb-0 pl-0 h-8 text-sm px-1 outline-none"
                  placeholder="medium"
                />
                <input
                  type="number"
                  className="border-b-2 p-1 pb-0 pl-0 h-8 text-sm px-1 outline-none"
                  placeholder="large"
                />
              </div>
              
            </div>
            <div className="flex flex-col text-sm mt-4">
              <span className="font-semibold mb-[2px]">Extra</span>
              <div className="flex justify-between items-center gap-6 flex-wrap">
                <input
                  type="text"
                  className="border-b-2 p-1 pb-0 pl-0 h-8 text-sm px-1 outline-none"
                  placeholder="item"
                />
                <input
                  type="number"
                  className="border-b-2 p-1 pb-0 pl-0 h-8 text-sm px-1 outline-none"
                  placeholder="price"
                />
                <button className="btn-primary">Add</button>
              </div>
              <div className="mt-2">
                <span className="inline-block border-orange-500 text-orange-500 border p-1 rounded-xl">Ketçap</span>
              </div>
              
            </div>
            <div className="w-full text-end">
                <button className="btn-primary !bg-green-500">Create</button>
            </div>
            <div>
              <div>
                <button className="absolute top-4 right-4">
                  <IoIosCloseCircle
                    size={30}
                    className="hover:text-primary"
                    onClick={() => setIsProductModal(!isProductModal)}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default AddProduct;
