import Header from "./_components_/Header";
import Banner from "./_components_/Banner";
import Category from "./_components_/category/Category";
import Product from "./product/page";
import Testmonials from "./_components_/testimonials/Testmonials";
export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Category />
      <div className="container mx-auto py-10">
        <h1 className="text-3xl font-semibold py-5"> Popular Products</h1>
        <Product />
      </div>
      <Testmonials />
    </>
    
  );
}
