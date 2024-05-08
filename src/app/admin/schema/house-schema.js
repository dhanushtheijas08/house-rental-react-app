import { z } from "zod";

const houseSchema = z.object({
  houseName: z.string().min(2).max(50),
  address: z.string().min(2).max(50),
  rentalOfferPrice: z.coerce.number().positive(),
  rentalOrginalPrice: z.coerce.number().positive(),
  sellerName: z.string().min(2).max(50),
  houseDesc: z.string().min(10).max(5000),
  feature1: z.coerce.number().min(1).max(10),
  feature2: z.coerce.number().min(1).max(10),
  feature3: z.coerce.number().min(1).max(10),
});

export { houseSchema };
