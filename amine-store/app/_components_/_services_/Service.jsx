import React from "react";
import { Rocket, CreditCard, Shield, HeadphonesIcon } from "lucide-react";

export default function Service() {
  return (
    <div className="container mx-auto py-14 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Service 1 */}
        <div className="grid grid-cols-3 items-center bg-green-100 py-6 px-4 rounded-xl ">
          <div className="flex justify-center">
            <Rocket
              size={50}
              className="bg-green-500 text-white p-3 rounded-lg"
            />
          </div>
          <div className="col-span-2">
            <h2 className="font-semibold text-lg">Free Shipping</h2>
            <p className="text-gray-600">Enjoy free shipping on all orders.</p>
          </div>
        </div>
        {/* Service 2 */}
        <div className="grid grid-cols-3 items-center bg-green-100 py-6 px-4 rounded-xl ">
          <div className="flex justify-center">
            <CreditCard
              size={50}
              className="bg-green-500 text-white p-3 rounded-lg"
            />
          </div>
          <div className="col-span-2">
            <h2 className="font-semibold text-lg">Secure Payments</h2>
            <p className="text-gray-600">Your transactions are 100% safe.</p>
          </div>
        </div>
        {/* Service 3 */}
        <div className="grid grid-cols-3 items-center bg-green-100 py-6 px-4 rounded-xl ">
          <div className="flex justify-center">
            <Shield
              size={50}
              className="bg-green-500 text-white p-3 rounded-lg"
            />
          </div>
          <div className="col-span-2">
            <h2 className="font-semibold text-lg">Privacy Guarantee</h2>
            <p className="text-gray-600">We protect your personal data.</p>
          </div>
        </div>
        {/* Service 4 */}
        <div className="grid grid-cols-3 items-center bg-green-100 py-6 px-4 rounded-xl ">
          <div className="flex justify-center">
            <HeadphonesIcon
              size={50}
              className="bg-green-500 text-white p-3 rounded-lg"
            />
          </div>
          <div className="col-span-2">
            <h2 className="font-semibold text-lg">24 Hour Support</h2>
            <p className="text-gray-600">We are here to help you 24/7.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
