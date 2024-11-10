import { GrClearOption } from "react-icons/gr";
import { HiShoppingCart } from "react-icons/hi2";
import { SlArrowRight } from "react-icons/sl";
import { useCart } from "@/app/backend_functions/cart_and_buy_functions";
import { checkoutCredits } from "@/lib/actions/checkout.actions";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface SideBarProps {
  isOpen: boolean;
  toggleCart: () => void;
}

const SideBar: React.FC<SideBarProps> = ({ isOpen, toggleCart }) => {
  const { cart, clearCart } = useCart();

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  useEffect(() => {
    loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
  }, []);

  const onCheckout = async () => {
    await checkoutCredits(calculateTotal());
  };

  return (
    <div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-[#00000079] z-20"
          onClick={toggleCart}
        ></div>
      )}
      <div
        className={`fixed top-0 right-0 h-full bg-white w-2/3 lg:w-2/5 transition-transform duration-500 ease-in-out z-30 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="relative mt-3 p-4">
          <div className="flex">
            <button onClick={toggleCart} className="flex items-center">
              <SlArrowRight className="mr-2 h-8 w-8 text-gray-600 hover:bg-gray-200 rounded-full p-2 transition duration-300 ease-in-out" />
            </button>
            <h1 className="text-2xl font-semibold text-gray-800">Your Cart</h1>

            <button onClick={clearCart} className="ml-auto flex items-center">
              <GrClearOption className="h-10 w-10 text-gray-600 hover:bg-gray-200 rounded-full p-2 transition duration-300 ease-in-out" />
            </button>
          </div>

          {cart.length > 0 ? (
            <div className="mt-6">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between py-4 border-b"
                >
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800">
                      {item.name}
                    </h2>
                    <p className="text-gray-600">
                      Price: Rs. {item.price.toFixed(2)}
                    </p>
                    <p className="text-gray-600">Quantity: {item.quantity}</p>
                  </div>
                  <p className="text-lg font-bold text-gray-800">
                    Rs. {(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}
              <div className="flex justify-between mt-6 text-xl font-semibold">
                <span>Total:</span>
                <span>Rs. {calculateTotal().toFixed(2)}</span>
              </div>
              <button
                onClick={onCheckout}
                className="mt-6 w-full px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition duration-300 ease-in-out"
              >
                Proceed to Checkout
              </button>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center mt-16">
              <HiShoppingCart className="h-20 w-20 text-gray-500 mb-4" />
              <h2 className="text-2xl font-semibold text-gray-600">
                Your cart is empty.
              </h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SideBar;

// import { GrClearOption } from "react-icons/gr";
// import { HiShoppingCart } from "react-icons/hi2";
// import { SlArrowRight } from "react-icons/sl";
// import { useCart } from "@/app/backend_functions/cart_and_buy_functions";
// import { loadStripe } from "@stripe/stripe-js";
// import axios from "axios";
// import { useState } from "react";
// import { useStripe, useElements } from "@stripe/react-stripe-js";
// import router from "next/router";

// interface Product {
//   id: number;
//   name: string;
//   price: number;
//   quantity: number;
// }

// interface SideBarProps {
//   isOpen: boolean;
//   toggleCart: () => void;
// }

// const SideBar: React.FC<SideBarProps> = ({ isOpen, toggleCart }) => {
//   const { cart, clearCart } = useCart();
//   const [loading, setLoading] = useState(false);

//   const calculateTotal = () => {
//     return cart.reduce((total, item) => total + item.price * item.quantity, 0);
//   };

//   const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
//   const stripePromise = publishableKey ? loadStripe(publishableKey) : null;

//   const handleCheckout = () => {
//     toggleCart();
//     router.push("/contents/payment_page");
//   };

//   return (
//     <div>
//       {isOpen && (
//         <div
//           className="fixed inset-0 bg-[#00000079] z-20"
//           onClick={toggleCart}
//         ></div>
//       )}
//       <div
//         className={`fixed top-0 right-0 h-full bg-white w-2/3 lg:w-2/5 transition-transform duration-500 ease-in-out z-30 ${
//           isOpen ? "translate-x-0" : "translate-x-full"
//         }`}
//       >
//         <div className="relative mt-3 p-4">
//           <div className="flex">
//             <button onClick={toggleCart} className="flex items-center">
//               <SlArrowRight className="mr-2 h-8 w-8 text-gray-600 hover:bg-gray-200 rounded-full p-2 transition duration-300 ease-in-out" />
//             </button>
//             <h1 className="text-2xl font-semibold text-gray-800">Your Cart</h1>

//             <button onClick={clearCart} className="ml-auto flex items-center">
//               <GrClearOption className="h-10 w-10 text-gray-600 hover:bg-gray-200 rounded-full p-2 transition duration-300 ease-in-out" />
//             </button>
//           </div>

//           {cart.length > 0 ? (
//             <div className="mt-6">
//               {cart.map((item) => (
//                 <div
//                   key={item.id}
//                   className="flex items-center justify-between py-4 border-b"
//                 >
//                   <div>
//                     <h2 className="text-lg font-semibold text-gray-800">
//                       {item.name}
//                     </h2>
//                     <p className="text-gray-600">
//                       Price: Rs. {item.price.toFixed(2)}
//                     </p>
//                     <p className="text-gray-600">Quantity: {item.quantity}</p>
//                   </div>
//                   <p className="text-lg font-bold text-gray-800">
//                     Rs. {(item.price * item.quantity).toFixed(2)}
//                   </p>
//                 </div>
//               ))}
//               <div className="flex justify-between mt-6 text-xl font-semibold">
//                 <span>Total:</span>
//                 <span>Rs. {calculateTotal().toFixed(2)}</span>
//               </div>
//               <button
//                 onClick={handleCheckout}
//                 className="mt-6 w-full px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition duration-300 ease-in-out"
//                 disabled={loading}
//               >
//                 {loading ? "Processing..." : "Proceed to Checkout"}
//               </button>
//             </div>
//           ) : (
//             <div className="flex flex-col items-center justify-center mt-16">
//               <HiShoppingCart className="h-20 w-20 text-gray-500 mb-4" />
//               <h2 className="text-2xl font-semibold text-gray-600">
//                 Your cart is empty.
//               </h2>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SideBar;
