import SubtaskCheckbox from "@/components/SubtaskCheckbox";
import TextField from "@/components/TextField";

export default function Home() {
  return (
    <div>
      <SubtaskCheckbox taskID="asdasmdas8d7" taskName="Task sdasd" />
      <TextField isValid={false} />
    </div>
  );
}
