import { z } from "zod";

export const productSchema = z.object({
  id: z.number().nonnegative(),
  name: z.string().min(1, "Name is required"),
  price: z.string().regex(/^\d+(\.\d{1,2})?$/, "Invalid price format"),
  description: z.string().min(1, "Description is required"),
  discountPrice: z
    .string()
    .regex(/^\d+(\.\d{1,2})?$/, "Invalid discount price format"),
});

export type ProductFormValues = z.infer<typeof productSchema>;
