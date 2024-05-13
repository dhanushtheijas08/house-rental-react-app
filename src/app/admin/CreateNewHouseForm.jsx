import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import FileUpload from "./FileUpload";
import { houseSchema } from "./schema/house-schema";
import AppFormField from "@/components/AppFormField";
import { Textarea } from "@/components/ui/textarea";
import { useMutation } from "@tanstack/react-query";
import { createNewHouse } from "@/service/apiHouse";
import { useNavigate } from "react-router-dom";

const formData = [
  {
    name: "houseName",
    type: "text",
    placeholder: "Simple House",
    label: "House Name",
  },
  {
    name: "address",
    type: "text",
    label: "Address",
    placeholder: "Paris, France",
  },
  {
    name: "rentalOfferPrice",
    type: "number",
    label: "Rental Offer Price",
    placeholder: "2,000",
  },
  {
    name: "rentalOrginalPrice",
    type: "number",
    label: "Rental Orginal Price",
    placeholder: "2,500",
  },
  {
    name: "sellerName",
    type: "text",
    label: "Seller Name",
    placeholder: "Ram Kumar",
  },

  {
    name: "feature1",
    type: "number",
    label: "No. of Bedrooms",
    placeholder: "Ram Kumar",
  },
  {
    name: "feature2",
    type: "number",
    label: "Bathrooms",
    placeholder: "2",
  },
  {
    name: "feature3",
    type: "number",
    label: "House Area",
    placeholder: "5.2 m sq.",
  },
];

const CreateNewHouseForm = () => {
  const [houseImages, setHouseImages] = useState([]);

  const form = useForm({
    resolver: zodResolver(houseSchema),
    defaultValues: {
      username: "sample",
      houseName: "Simple House",
      sellerName: "Ram Kumar",
      rentalOrginalPrice: 2500,
      rentalOfferPrice: 2000,
      address: "Paris, France",
      feature1: 2,
      feature2: 2,
      feature3: 5.2,
    },
  });

  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationKey: "createHouse",
    mutationFn: (values) => createNewHouse(values, houseImages),
    onSuccess: () => {
      navigate("/admin/dashboard");
    },
  });

  const onSubmit = (values) => mutate(values);

  return (
    <Form {...form}>
      <FileUpload setHouseImages={setHouseImages} />
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-2 gap-x-8 my-6"
      >
        {formData.map((data) => (
          <AppFormField
            key={data.name}
            form={form}
            name={data.name}
            label={data.label}
            inputType={data.type}
            inputPlaceholder={data.placeholder}
            isPending={isPending}
          />
        ))}
        <div className="col-span-3">
          <FormField
            control={form.control}
            name="houseDesc"
            render={({ field }) => (
              <FormItem>
                <FormLabel>House Description</FormLabel>
                <FormControl>
                  <Textarea
                    disabled={isPending}
                    placeholder="Type your message here."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" className="mt-2" disabled={isPending}>
          Create House
        </Button>
      </form>
    </Form>
  );
};

export default CreateNewHouseForm;
