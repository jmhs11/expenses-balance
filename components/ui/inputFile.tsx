import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface InputFileProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

export function InputFile({ label, name, ...props }: InputFileProps) {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor={name}>{label}</Label>
      <Input id={name} type="file" {...props} />
    </div>
  );
}
