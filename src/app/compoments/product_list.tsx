"use client";
import React, { useEffect, useState } from "react";
import ProductCardLarge from "./ProductCardLarge";
import { motion } from "framer-motion";

interface Product {
  id: number;
  image: string;
  name: string;
  price: number;
  isNew: boolean;
}

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/products.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data: Product[] = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error loading products:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const cardVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: (index: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: index * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full"
    >
      <div className="py-6 space-y-1 text-center ">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold text-black">
          Best Selling Products
        </h1>
        <h2 className="text-slate-700 text-lg">Latest Collection</h2>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
        </div>
      ) : (
        <div className="flex flex-wrap justify-center gap-6 mb-32">
          {products.map((product, index) => (
            <motion.div
              key={product.id || index}
              variants={cardVariants}
              custom={index}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.05 }}
              className="w-full sm:w-auto"
            >
              <ProductCardLarge product={product} />
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default ProductList;
