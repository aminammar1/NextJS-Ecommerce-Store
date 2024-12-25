import React from "react";
import Image from "next/image";

const categories = [
  { src: "/assets/category1.png", title: "Category 1" },
  { src: "/assets/category2.png", title: "Category 2" },
  { src: "/assets/category3.png", title: "Category 3" },
  { src: "/assets/category4.png", title: "Category 4" },
  { src: "/assets/category5.png", title: "Category 5" },
  { src: "/assets/category6.png", title: "Category 6" },
  { src: "/assets/category7.png", title: "Category 7" },
];

export default function Category() {
  return (
    <div className="container py-10 mx-auto">
      <div className="text-3xl font-semibold py-5">Explore Categories</div>
      <div className="grid grid-cols-7 items-start gap-10 justify-center pt-4">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-gray-100 p-4 flex flex-col items-center justify-center cursor-default hover:bg-gray-300"
          >
            <Image
              src={category.src}
              className=" object-cover hover:scale-110 hover:transition-transform cursor-pointer"
              width={600}
              height={600}
              alt={`category-${index + 1}`}
            />
            <p className="pt-5">{category.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
