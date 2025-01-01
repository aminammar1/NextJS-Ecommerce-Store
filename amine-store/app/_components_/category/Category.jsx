import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const categories = [
  { src: "/assets/category1.png", title: "Category 1" },
  { src: "/assets/category2.png", title: "Category 2" },
  { src: "/assets/category3.png", title: "Category 3" },
  { src: "/assets/category4.png", title: "Category 4" },
  { src: "/assets/category5.png", title: "Category 5" },
  { src: "/assets/category6.png", title: "Category 6" },
  { src: "/assets/category7.png", title: "Category 7" },
  { src: "/assets/category1.png", title: "Category 1" },
  { src: "/assets/category2.png", title: "Category 2" },
  { src: "/assets/category3.png", title: "Category 3" },
  { src: "/assets/category4.png", title: "Category 4" },
  { src: "/assets/category5.png", title: "Category 5" },
  { src: "/assets/category6.png", title: "Category 6" },
  { src: "/assets/category7.png", title: "Category 7" },
];

export default function Category() {
  const ListCategories = [];
  for (let i = 0; i < categories.length; i += 7) {
    ListCategories.push(categories.slice(i, i + 7));
  }

  return (
    <div className="container py-10 mx-auto">
      <div className="text-3xl font-semibold py-5"> Explore Categories </div>
      <Carousel>
        <CarouselContent>
          {ListCategories.map((ListCategories, index) => (
            <CarouselItem key={index}>
              <div className="grid grid-cols-7 gap-4 ">
                {ListCategories.map((category, idx) => (
                  <div
                    key={idx}
                    className="relative bg-gray-100 rounded-lg p-4 flex flex-col items-center justify-center cursor-default hover:bg-gray-200"
                  >
                    <Image
                      src={category.src}
                      width={200}
                      height={200}
                      alt={`category-${idx + 1}`}
                      className="hover:scale-110 hover:transition-transform cursor-pointer"
                    />
                  </div>
                ))}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
