import { Input } from "@/components/ui/input";

const FormInputField = ({
  fieldName,
  type = "text",
  placeholder = "",
  method,
}: FormInputFieldProps) => {
  return (
    <label className="grid grid-cols-3 items-center">
      {fieldName}
      <Input
        className="col-span-2"
        type={type}
        placeholder={placeholder}
        onChange={(e) => method(e.target.value)}
      />
    </label>
  );
};

export default FormInputField;
