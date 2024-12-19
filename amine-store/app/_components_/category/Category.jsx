import React from "react";
import Image from "next/image";

export default function Category() {
  return (
    <div className="container px-0 py-10 mx-auto">
      <div className="text-3xl font-semibold py-5"> Explore Categories </div>
      <div className="grid grid-cols-7 items-center gap-10">
        <div className="">
          <Image
            src="/assets/category1.png"
            width={1000}
            height={50}
            alt="category"
            className=" hover:scale-110 hover:border-green-400 border-2 border-gray-2 border-transparent hover:border-2  hover:transition-transform cursor-pointer"
          />
        </div>
        <div className="">
          <Image
            src="/assets/category2.png"
            width={1000}
            height={50}
            alt="category"
            className=" hover:scale-110 hover:border-green-400 border-2 border-gray-2 border-transparent hover:border-2  hover:transition-transform cursor-pointer"
          />
        </div>
        <div className="">
          <Image
            src="/assets/category3.png"
            width={1000}
            height={50}
            alt="category"
            className="hover:scale-110 hover:border-green-400 border-2 border-gray-2 hover:border-2 border-transparent hover:transition-transform cursor-pointer"
          />
        </div>
        <div className="">
          <Image
            src="/assets/category4.png"
            width={1000}
            height={50}
            alt="category"
            className=" hover:scale-110 hover:border-green-400 border-2 border-gray-2 hover:border-2 border-transparent hover:transition-transform cursor-pointer"
          />
        </div>
        <div className="">
          <Image
            src="/assets/category5.png"
            width={1000}
            height={50}
            alt="category"
            className=" hover:scale-110 hover:border-green-400 border-2 border-gray-2 hover:border-2 border-transparent hover:transition-transform cursor-pointer"
          />
        </div>
        <div className="">
          <Image
            src="/assets/category6.png"
            width={1000}
            height={50}
            alt="category"
            className=" hover:scale-110 hover:border-green-400 border-2 border-gray-2 hover:border-2 border-transparent  hover:transition-transform cursor-pointer"
          />
        </div>
        <div className="">
          <Image
            src="/assets/category7.png"
            width={1000}
            height={50}
            alt="category"
            className="hover:scale-110 hover:border-green-400 border-2 border-gray-2 hover:border-2 border-transparent  hover:transition-transform cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
