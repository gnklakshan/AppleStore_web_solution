// "use client";

// import React, { useState, useEffect } from "react";
// import Image from "next/image";

// import { useCart } from "@/app/backend_functions/cart_and_buy_functions";
// import { useSearchParams } from "next/navigation";
// import Nav_bar from "@/app/compoments/nav_bar";
// import SideBar from "@/app/compoments/SideBar";

// const ProductView = () => {
//   const searchParams = useSearchParams();
//   const [isOpen, setIsOpen] = useState(false);
//   const [quantity, setQuantity] = useState(1);
//   const { addProductToCart } = useCart();
//   const [product, setProduct] = useState({
//     id: 0,
//     name: "",
//     price: 0,
//     image: "",
//     isNew: false,
//     details: "",
//     color: "",
//     storage: "",
//     camera: "",
//     battery: "",
//   });

//   const toggleCart = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleAddToCart = () => {
//     addProductToCart(
//       {
//         id: product.id,
//         name: product.name,
//         price: product.price,
//         quantity: quantity,
//       },
//       quantity
//     );

//     window.location.reload();
//     setIsOpen(true);
//   };

//   useEffect(() => {
//     const id = parseInt(searchParams.get("id") || "0", 10);
//     const name = searchParams.get("name") || "";
//     const price = parseInt(searchParams.get("price") || "0", 10);
//     const image = searchParams.get("image") || "";
//     const isNew = searchParams.get("isNew") === "true";
//     const details = searchParams.get("details") || "";
//     const color = searchParams.get("color") || "";
//     const storage = searchParams.get("storage") || "";
//     const camera = searchParams.get("camera") || "";
//     const battery = searchParams.get("battery") || "";

//     setProduct({
//       id,
//       name,
//       price,
//       image,
//       isNew,
//       details,
//       color,
//       storage,
//       camera,
//       battery,
//     });
//   }, [searchParams]);

//   return (
//     <div>
//       <SideBar isOpen={isOpen} toggleCart={toggleCart} />
//       <Nav_bar toggleCart={toggleCart} />
//       <div className="my-10 mx-4 lg:mx-16">
//         <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0">
//           {/* Image Section */}
//           <div className="flex flex-col items-center lg:items-start lg:w-1/3">
//             <div className="flex h-72 w-72 lg:h-96 lg:w-96 rounded-xl bg-[#e8e7e7] shadow-xl justify-center items-center hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105">
//               <Image
//                 className="rounded-xl p-3 object-contain"
//                 src={product.image}
//                 width={300}
//                 height={300}
//                 alt={product.name}
//               />
//             </div>
//           </div>

//           {/* Product Details Section */}
//           <div className="flex flex-col justify-start items-start space-y-4 lg:w-2/3 mt-10 lg:mt-0">
//             <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
//               {product.name}
//             </h2>

//             <div className="space-y-4 text-gray-800">
//               <p className="text-2xl font-semibold text-green-600">
//                 Price:{" "}
//                 <span className="text-gray-800">Rs. {product.price}</span>
//               </p>
//               <p className="text-lg text-gray-700">{product.details}</p>

//               <div className="space-y-2 text-sm">
//                 <p className="flex items-center space-x-2 text-gray-700 border-b pb-2">
//                   <span className="font-medium text-gray-900">Color:</span>
//                   <span>{product.color}</span>
//                 </p>
//                 <p className="flex items-center space-x-2 text-gray-700 border-b pb-2">
//                   <span className="font-medium text-gray-900">Storage:</span>
//                   <span>{product.storage}</span>
//                 </p>
//                 <p className="flex items-center space-x-2 text-gray-700 border-b pb-2">
//                   <span className="font-medium text-gray-900">Camera:</span>
//                   <span>{product.camera}</span>
//                 </p>
//                 <p className="flex items-center space-x-2 text-gray-700 border-b pb-2">
//                   <span className="font-medium text-gray-900">Battery:</span>
//                   <span>{product.battery}</span>
//                 </p>
//               </div>
//             </div>

//             {/* Quantity Section */}
//             <div className="mt-4 flex items-center space-x-2">
//               <button
//                 onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
//                 disabled={quantity === 1}
//                 className="bg-gray-200 text-gray-600 px-4 py-2 rounded-full hover:bg-gray-300 transition duration-300 ease-in-out"
//               >
//                 -
//               </button>
//               <span className="px-4 text-lg font-semibold text-gray-800">
//                 {quantity}
//               </span>
//               <button
//                 onClick={() => setQuantity((prev) => prev + 1)}
//                 className="bg-gray-200 text-gray-600 px-4 py-2 rounded-full hover:bg-gray-300 transition duration-300 ease-in-out"
//               >
//                 +
//               </button>
//             </div>

//             {/* Add to Cart Button */}
//             <button
//               onClick={handleAddToCart}
//               className="mt-6 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition duration-300 ease-in-out transform hover:scale-105"
//             >
//               Add to Cart
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductView;

"use client";

import React, { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import { useCart } from "@/app/backend_functions/cart_and_buy_functions";
import { useSearchParams } from "next/navigation";
import Nav_bar from "@/app/compoments/nav_bar";
import SideBar from "@/app/compoments/SideBar";

interface ProductDetailsProps {
  toggleCart: () => void;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({
  toggleCart,
  isOpen,
  setIsOpen,
}) => {
  const searchParams = useSearchParams();
  const [quantity, setQuantity] = useState(1);
  const { addProductToCart } = useCart();
  const [product, setProduct] = useState({
    id: 0,
    name: "",
    price: 0,
    image: "",
    isNew: false,
    details: "",
    color: "",
    storage: "",
    camera: "",
    battery: "",
  });

  const handleAddToCart = () => {
    addProductToCart(
      {
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: quantity,
      },
      quantity
    );
    window.location.reload();
    setIsOpen(true);
  };

  useEffect(() => {
    const id = parseInt(searchParams.get("id") || "0", 10);
    const name = searchParams.get("name") || "";
    const price = parseInt(searchParams.get("price") || "0", 10);
    const image = searchParams.get("image") || "";
    const isNew = searchParams.get("isNew") === "true";
    const details = searchParams.get("details") || "";
    const color = searchParams.get("color") || "";
    const storage = searchParams.get("storage") || "";
    const camera = searchParams.get("camera") || "";
    const battery = searchParams.get("battery") || "";

    setProduct({
      id,
      name,
      price,
      image,
      isNew,
      details,
      color,
      storage,
      camera,
      battery,
    });
  }, [searchParams]);

  return (
    <div className="my-10 mx-4 lg:mx-16">
      <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0">
        {/* Image Section */}
        <div className="flex flex-col items-center lg:items-start lg:w-1/3">
          <div className="flex h-72 w-72 lg:h-96 lg:w-96 rounded-xl bg-[#e8e7e7] shadow-xl justify-center items-center hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105">
            <Image
              className="rounded-xl p-3 object-contain"
              src={product.image}
              width={300}
              height={300}
              alt={product.name}
            />
          </div>
        </div>

        {/* Product Details Section */}
        <div className="flex flex-col justify-start items-start space-y-4 lg:w-2/3 mt-10 lg:mt-0">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            {product.name}
          </h2>

          <div className="space-y-4 text-gray-800">
            <p className="text-2xl font-semibold text-green-600">
              Price: <span className="text-gray-800">Rs. {product.price}</span>
            </p>
            <p className="text-lg text-gray-700">{product.details}</p>

            <div className="space-y-2 text-sm">
              <p className="flex items-center space-x-2 text-gray-700 border-b pb-2">
                <span className="font-medium text-gray-900">Color:</span>
                <span>{product.color}</span>
              </p>
              <p className="flex items-center space-x-2 text-gray-700 border-b pb-2">
                <span className="font-medium text-gray-900">Storage:</span>
                <span>{product.storage}</span>
              </p>
              <p className="flex items-center space-x-2 text-gray-700 border-b pb-2">
                <span className="font-medium text-gray-900">Camera:</span>
                <span>{product.camera}</span>
              </p>
              <p className="flex items-center space-x-2 text-gray-700 border-b pb-2">
                <span className="font-medium text-gray-900">Battery:</span>
                <span>{product.battery}</span>
              </p>
            </div>
          </div>

          {/* Quantity Section */}
          <div className="mt-4 flex items-center space-x-2">
            <button
              onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
              disabled={quantity === 1}
              className="bg-gray-200 text-gray-600 px-4 py-2 rounded-full hover:bg-gray-300 transition duration-300 ease-in-out"
            >
              -
            </button>
            <span className="px-4 text-lg font-semibold text-gray-800">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity((prev) => prev + 1)}
              className="bg-gray-200 text-gray-600 px-4 py-2 rounded-full hover:bg-gray-300 transition duration-300 ease-in-out"
            >
              +
            </button>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="mt-6 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

const ProductView = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleCart = () => setIsOpen(!isOpen);

  return (
    <div>
      <SideBar isOpen={isOpen} toggleCart={toggleCart} />
      <Nav_bar toggleCart={toggleCart} />
      <Suspense fallback={<div>Loading...</div>}>
        <ProductDetails
          toggleCart={toggleCart}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      </Suspense>
    </div>
  );
};

export default ProductView;
