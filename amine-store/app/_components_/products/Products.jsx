import React from "react";
import Image from "next/image";
import { HeartIcon, ShoppingBasket } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Product() {
  return (
    <div className="container py-10 px-2">
      <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-8 md:gap-16">
        <div className="Product_col outline p-4 outline-slate-100 rounded-lg cursor-pointer shadow-md transition ease-in-out delay-200 hover:translate-y-3">
          {/* Product Image */}
          <div className="bg-gray-100 mb-4 p-4">
            <Image
              src="/assets/hrisa.png"
              width={500}
              height={200}
              alt="Product"
              className=" cursor-pointer hover:scale-110 hover:transition-transform"
            />
          </div>
          {/* Rating */}
          <div className="flex items-center py-2">
            {[...Array(4)].map((_, index) => (
              <svg
                key={index}
                className="w-6 h-6 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            ))}
            {/* Half Star */}
            <svg
              className="w-6 h-6 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
              4.4
            </span>
          </div>
          {/* Product Name and Price */}
          <h3>Product</h3>
          <div className="flex gap-4 py-3">
            <h1 className="text-lg font-semibold text-gray-800">$20.00</h1>
          </div>
          {/* Add to Cart Button */}
          <div className="grid grid-cols-2 items-center py-2 px-0">
            <Button className="bg-green-600 text-white hover:bg-green-900 flex items-center">
              Add to Cart
              <ShoppingBasket size={24} className="ml-2" />
            </Button>
            <a className="flex justify-end">
              <HeartIcon
                width={30}
                className="hover:text-red-600 cursor-pointer"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
