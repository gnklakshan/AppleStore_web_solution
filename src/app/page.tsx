"use client";
import Nav_bar from "./compoments/nav_bar";
import Banner_main from "./compoments/banner_main";
import Sales_item_banner from "./compoments/sales_item_banner";
import Product_list from "./compoments/product_list";
import SideBar from "./compoments/SideBar";
import { useState } from "react";
import Footer from "./compoments/footer";
import RecentProducts from "./compoments/recentProducts";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <SideBar isOpen={isOpen} toggleCart={toggleCart} />
      <Nav_bar toggleCart={toggleCart} />
      <Banner_main />
      <Product_list />
      <Sales_item_banner />
      <RecentProducts />
      <Footer />
    </div>
  );
}
