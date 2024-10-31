import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ProductItem from "../../components/ProductItem";
import { ProductI } from "../../types";
import Button from "../../components/Button";

export default function Products() {
  const navigate = useNavigate();
  const [products, setProducts] = useState<ProductI[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const handleProductDelete = (id: number) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id)
    );
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}products`,
          {
            withCredentials: true,
          }
        );

        setProducts(response.data);
      } catch (error) {
        setError(
          error instanceof Error ? error.message : "Something went wrong"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold  mb-4">Products</h1>
        <Button onClick={() => navigate("/products/new")} className="max-w-36">
          <p className="font-bold">New product</p>
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-10">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            onDelete={handleProductDelete}
          />
        ))}
      </div>
    </div>
  );
}
