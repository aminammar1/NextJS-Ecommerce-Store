import Header from "./_components_/Header";
import Banner from "./_components_/Banner";
import Category from "./_components_/category/Category";
import Product from "./product/page";
import Testmonials from "./_components_/testimonials/Testmonials";
import Service from "./_components_/_services_/Service";
import NewsLetter from "./_components_/newsletter/NewsLetter";
import Footer from "./_components_/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Service />
      <Category />
      <div className="container mx-auto py-10">
        <h1 className="text-3xl font-semibold py-5"> Popular Products</h1>
        <Product />
      </div>
      <Testmonials />
      <NewsLetter />
      <Footer />
    </>
    
  );
}
