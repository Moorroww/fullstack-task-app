import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";

const FormInputField = ({
  fieldName,
  type = "text",
  placeholder = "",
  method,
  additionalClass = "",
  value = "",
}: FormInputFieldProps) => {
  return (
    <label className="grid grid-cols-3 items-center">
      {fieldName}
      <Input
        className={cn("col-span-2", additionalClass)}
        type={type}
        placeholder={placeholder}
        onChange={(e) => method(e.target.value)}
        value={value}
      />
    </label>
  );
};

export default FormInputField;
