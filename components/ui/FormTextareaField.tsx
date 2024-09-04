import { Textarea } from "./textarea";

const FormTextareaField = ({
  fieldName,
  placeholder = "",
  method,
  value = "",
}: FormInputFieldProps) => {
  return (
    <label className="grid items-center">
      {fieldName}
      <Textarea
        value={value}
        placeholder={placeholder}
        onChange={(e) => method(e.target.value)}
      />
    </label>
  );
};

export default FormTextareaField;
