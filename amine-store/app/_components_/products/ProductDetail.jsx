import React, { useState } from "react";

export default function ProductDetail() {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("black");

  const handleQuantityChange = (type) => {
    setQuantity((prev) =>
      type === "increase" ? prev + 1 : Math.max(1, prev - 1)
    );
  };

  const colors = [
    { name: "Black", colorCode: "bg-black" },
    { name: "Red", colorCode: "bg-red-500" },
    { name: "Blue", colorCode: "bg-blue-500" },
    { name: "Yellow", colorCode: "bg-yellow-500" },
  ];

  return (
    <div className="p-6 rounded-lg max-w-5xl mx-auto my-8 ">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Product Image */}
        <div className="md:w-1/2 relative group">
          <img
            src="/assets/hrisa.png"
            alt="Bunnys Snacks"
            className="w-full h-auto rounded-lg group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Product Details */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            Bunnys Munchers Snacks Lemon & Chilli Nimko
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            Price: <span className="font-bold text-gray-900">$4</span>
          </p>

          {/* Color Selection */}
          <div className="mb-6">
            <span className="font-medium text-lg">Select Color:</span>
            <div className="flex gap-2 mt-2">
              {colors.map((color, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedColor(color.name)}
                  className={`w-8 h-8 rounded-full cursor-pointer ${
                    color.colorCode
                  } ${
                    selectedColor === color.name
                      ? "ring-2 ring-offset-2 ring-gray-800"
                      : ""
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="flex items-center gap-4 mb-6">
            <button
              onClick={() => handleQuantityChange("decrease")}
              className="w-10 h-10 text-xl border rounded-md flex items-center justify-center hover:bg-gray-100 transition"
            >
              −
            </button>
            <span className="text-xl font-medium">{quantity}</span>
            <button
              onClick={() => handleQuantityChange("increase")}
              className="w-10 h-10 text-xl border rounded-md flex items-center justify-center hover:bg-gray-100 transition"
            >
              +
            </button>
            <span className="text-xl font-bold ml-4">
              ${(4 * quantity).toFixed(2)}
            </span>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-6">
            <span className="text-yellow-500 text-2xl">★</span>
            <span className="text-lg font-medium">4.4</span>
            <span className="text-sm text-gray-500">(120 reviews)</span>
          </div>

          {/* Description */}
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Bunnys Munchers Snacks Lemon & Chilli Nimko offers a zesty and spicy
            snack experience. Enjoy this crunchy treat anytime for a burst of
            bold flavors.
          </p>

          {/* Add to Cart Button */}
          <button className="w-full bg-green-600 text-white py-3 rounded-md text-lg font-semibold hover:bg-green-700 transition">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}
