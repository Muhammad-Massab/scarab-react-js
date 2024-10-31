import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { productSchema, ProductFormValues } from "../schemas/productSchema";
import InputField from "./InputField";
import Button from "./Button";
import { ProductI } from "../types";

interface ProductFormProps {
  product?: ProductI;
  onSubmit: (data: ProductI) => void;
}

export default function ProductForm({ product, onSubmit }: ProductFormProps) {
  const methods = useForm<ProductFormValues>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      id: product?.id || 0,
      name: product?.name || "",
      price: product?.price || "",
      description: product?.description || "",
      discountPrice: product?.discountPrice || "",
    },
  });

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="p-4 max-w-md mx-auto bg-white border rounded-md shadow"
      >
        <InputField name="name" label="Name" placeholder="Enter product name" />
        <InputField
          name="price"
          label="Price"
          type="text"
          placeholder="Enter price"
        />
        <InputField
          name="description"
          label="Description"
          placeholder="Enter product description"
        />
        <InputField
          name="discountPrice"
          label="Discount Price"
          type="text"
          placeholder="Enter discount price"
        />
        <Button type="submit">
          <p className="font-bold">{product ? "Update" : "Submit"}</p>
        </Button>
      </form>
    </FormProvider>
  );
}
