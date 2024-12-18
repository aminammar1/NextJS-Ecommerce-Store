import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Banner() {
  return (
    <>
      <div className="container mx-auto">
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              <div className="Banner1 p-10">
                <div className="grid grid-cols-2 items-center">
                  <div className="row-span-1 ">
                    <Badge variant="custom1" className="text-sm font-semibold">
                      Sale up to 20% OFF
                    </Badge>
                    <h1 className="text-6xl font-bold py-6 leading-tight">
                      Get the Best Deals at
                      <span className="bg-orange-500 text-gray-50 rounded-md ml-3 px-2">
                        Amine Store
                      </span>
                    </h1>
                    <p className="mt-2 text-lg text-gray-700">
                      Shop Now, Save More!
                    </p>
                    <Button className="mt-5 bg-green-700 text-white hover:bg-green-900 px-6 py-3">
                      Buy Product
                    </Button>
                  </div>

                  <div className="row-span-1">
                    <Image
                      src="/assets/banner5.png"
                      width={1000}
                      height={600}
                      alt="banner"
                    />
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="Banner2 p-10">
                <div className="grid grid-cols-2 items-center">
                  <div className="row-span-1">
                    <Badge variant="custom2" className="text-sm">
                      Up to 20% OFF
                    </Badge>
                    <h1 className="text-6xl font-bold py-6 leading-tight">
                      Get the Best Deals at
                      <span className="bg-blue-500 text-gray-50 rounded-md ml-3 px-2">
                        Amine Store
                      </span>
                    </h1>
                    <p className="mt-2 text-lg text-gray-700">
                      Shop Now, Save More!
                    </p>
                    <Button className="mt-5 bg-green-700 text-white hover:bg-green-900 px-6 py-3">
                      Buy Product
                    </Button>
                  </div>

                  <div className="row-span-1">
                    <Image
                      src="/assets/banner1.png"
                      width={1200}
                      height={600}
                      alt="banner"
                    />
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="Banner1 p-10">
                <div className="grid grid-cols-2 items-center">
                  <div className="row-span-1 ">
                    <Badge variant="custom3" className="text-sm ">
                      Sale up to 20% OFF
                    </Badge>
                    <h1 className="text-6xl font-bold py-6 leading-tight">
                      Get the Best Deals at
                      <span className="bg-red-500 text-gray-50 rounded-md ml-3 px-2">
                        Amine Store
                      </span>
                    </h1>
                    <p className="mt-2 text-lg text-gray-700">
                      Shop Now, Save More!
                    </p>
                    <Button className="mt-5 bg-green-700 text-white hover:bg-green-900 px-6 py-3">
                      Buy Product
                    </Button>
                  </div>

                  <div className="row-span-1">
                    <Image
                      src="/assets/shop.png"
                      width={1000}
                      height={600}
                      alt="banner"
                    />
                  </div>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
}
