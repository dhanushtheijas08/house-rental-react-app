import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const AppFormField = ({
  form,
  name,
  label,
  inputType,
  inputPlaceholder,
  isPending = false,
}) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            {inputType === "textarea" ? (
              <Textarea
                placeholder={inputPlaceholder}
                type={inputType}
                {...field}
              />
            ) : (
              <Input
                placeholder={inputPlaceholder}
                type={inputType}
                {...field}
                disabled={isPending}
                className=""
              />
            )}
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default AppFormField;
