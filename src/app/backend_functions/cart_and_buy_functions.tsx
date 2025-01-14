// import { useState, useEffect } from "react";

// interface Product {
//   id: number;
//   name: string;
//   price: number;
//   quantity: number;
// }

// const useCart = () => {
//   const [cart, setCart] = useState<Product[]>(() => {
//     // Retrieve cart from local storage on load
//     const savedCart = localStorage.getItem("cart");
//     return savedCart ? JSON.parse(savedCart) : [];
//   });

//   useEffect(() => {
//     // Save cart to local storage whenever it changes
//     localStorage.setItem("cart", JSON.stringify(cart));
//   }, [cart]);

//   const addProductToCart = (product: Product, quantity: number) => {
//     setCart((prevCart) => [...prevCart, { ...product, quantity }]);
//   };

//   const removeProductFromCart = (productId: number) => {
//     setCart(cart.filter((item) => item.id !== productId));
//   };

//   const calculateTotal = () => {
//     return cart.reduce((total, item) => total + item.price * item.quantity, 0);
//   };

//   const clearCart = () => {
//     setCart([]);
//     window.location.reload();
//   };

//   return {
//     cart,
//     addProductToCart,
//     removeProductFromCart,
//     calculateTotal,
//     clearCart,
//   };
// };

// export { useCart };

import { useState, useEffect } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const useCart = () => {
  const [cart, setCart] = useState<Product[]>(() => {
    // Check if window is defined (client-side)
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("cart");
      return savedCart ? JSON.parse(savedCart) : [];
    }
    return [];
  });

  useEffect(() => {
    // Only run if window is defined (client-side)
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  const addProductToCart = (product: Product, quantity: number) => {
    setCart((prevCart) => [...prevCart, { ...product, quantity }]);
  };

  const removeProductFromCart = (productId: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const clearCart = () => {
    setCart([]);
    if (typeof window !== "undefined") {
      localStorage.removeItem("cart");
    }
    window.location.reload();
  };

  return {
    cart,
    addProductToCart,
    removeProductFromCart,
    calculateTotal,
    clearCart,
  };
};

export { useCart };
