import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { ProductI } from "../../../types";
import ProductForm from "../../../components/ProductForm";

export default function ProductNew() {
  const navigate = useNavigate();

  const handleSubmit = async (data: ProductI) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}products`,
        data
      );
      toast.success("Successfully added a product!");
      navigate("/products");
      console.log("Product added successfully:", response.status);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };
  return (
    <div className="h-full flex justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-10">
        <h1 className="font-extrabold text-4xl">Add a new product</h1>
        <ProductForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
}
