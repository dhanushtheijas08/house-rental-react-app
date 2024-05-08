import { useMutation } from "@tanstack/react-query";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { houseSchema } from "./schema/house-schema";
import AppFormField from "@/components/AppFormField";
// import FileUpload from "./FileUpload";
import { createNewHouse } from "@/service/apiHouse";
import { useState } from "react";

const CreateNewHouseForm = () => {
  const [houseImages, setHouseImages] = useState([]);
  const { mutate, isPending } = useMutation({
    mutationFn: (newHouseData, houseImages) =>
      createNewHouse(newHouseData, houseImages),
    onSuccess: () => {
      console.log("New house added successfully");
    },
  });

  const form = useForm({
    resolver: zodResolver(houseSchema),
    defaultValues: {
      username: "",
    },
  });
  function onSubmit(values) {
    mutate(values, houseImages);
  }
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
      name: "houseDesc",
      type: "textarea",
      label: "House Description",
      placeholder: "Enter your House Description here....",
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
  return (
    <Form {...form}>
      {/* <FileUpload setHouseImages={setHouseImages} /> */}
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 my-6 gap-y-2"
      >
        {formData.map((data) => (
          <AppFormField
            key={data.name}
            name={data.name}
            type={data.type}
            placeholder={data.placeholder}
            label={data.label}
            form={form}
            isPending={isPending}
          />
        ))}

        <Button type="submit" className="mt-10" disabled={isPending}>
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default CreateNewHouseForm;
