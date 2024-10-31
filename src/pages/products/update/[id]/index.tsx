import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import { ProductI } from "../../../../types";
import ProductForm from "../../../../components/ProductForm";

export default function ProductUpdate() {
  const location = useLocation();
  const { product } = location.state || {};

  if (!product) {
    return <div>No product data available.</div>;
  }

  const navigate = useNavigate();

  const handleSubmit = async (data: ProductI) => {
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_API_BASE_URL}products/${data.id}`,
        data
      );
      toast.success("Successfully updated a product!");
      navigate("/products");
      console.log("Product added successfully:", response.status);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };
  return (
    <div className="h-full flex justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-10">
        <h1 className="font-extrabold text-4xl">Update product</h1>
        <ProductForm product={product} onSubmit={handleSubmit} />
      </div>
    </div>
  );
}
