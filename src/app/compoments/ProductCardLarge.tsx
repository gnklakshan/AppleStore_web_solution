import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { useRouter } from "next/navigation";

interface Product {
  image: string;
  name: string;
  price: number;
  isNew: boolean;
  details?: string;
  color?: string;
  storage?: string;
  camera?: string;
  battery?: string;
}

interface ProductCardLargeProps {
  product: Product;
}

const ProductCardLarge: React.FC<ProductCardLargeProps> = ({ product }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(
      `/contents/ProductView?image=${product.image}&name=${
        product.name
      }&price=${product.price}&isNew=${
        product.isNew ? "true" : "false"
      }&details=${product.details}&color=${product.color}&storage=${
        product.storage
      }&camera=${product.camera}&battery=${product.battery}`
    );
  };

  return (
    <div
      onClick={handleClick}
      className="hover:scale-105 transform transition duration-500 ease-in-out cursor-pointer p-4 bg-white rounded-2xl shadow-lg max-w-sm"
    >
      <div className="bg-[#F5F5F5] rounded-2xl shadow-sm p-4 flex justify-center items-center">
        <Image
          className="rounded-xl"
          src={product.image}
          width={250}
          height={250}
          alt={product.name}
        />
      </div>
      <div className="mt-4 text-center">
        {product.isNew && (
          <h1 className="text-sm font-semibold text-red-400 uppercase">New</h1>
        )}
        <h1 className="text-2xl font-bold text-gray-800 mt-1">
          {product.name}
        </h1>
        <h1 className="text-lg font-medium text-gray-700 mt-1">
          Rs {product.price}
        </h1>
      </div>
      <div className="mt-3 flex justify-center">
        <button className="flex items-center bg-black text-white px-6 py-2 rounded-full hover:bg-gray-700 transition duration-300 ease-in-out">
          More Details <IoIosArrowForward className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default ProductCardLarge;
