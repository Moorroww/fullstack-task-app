import SelectField from "@/components/SelectField";
import SubtaskCheckbox from "@/components/SubtaskCheckbox";
import TextField from "@/components/TextField";

export default function Home() {
  return (
    <div className="">
      <SubtaskCheckbox taskID="asdasmdas8d7" taskName="Task sdasd" />
      <TextField isValid={false} />
      <SelectField />
    </div>
  );
}
