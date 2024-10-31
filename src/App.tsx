import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Products from "./pages/products";
import MainLayout from "./components/MainLayout";
import ProductNew from "./pages/products/new";
import ProductUpdate from "./pages/products/update/[id]";

export default function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Navigate to="/products" replace />} />

          <Route path="/products" element={<Products />} />
          <Route path="/products/new" element={<ProductNew />} />
          <Route path="/products/update/:id" element={<ProductUpdate />} />
        </Routes>
      </MainLayout>
      <Toaster position="top-center" reverseOrder={false} />
    </BrowserRouter>
  );
}
