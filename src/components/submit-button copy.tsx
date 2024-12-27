import { Button } from "@/src/components/ui/button";
import { type ComponentProps } from "react";
import { useFormStatus } from "react-dom"; // Import statement corrected

type Props = ComponentProps<typeof Button> & {
  pendingText?: string;
};

export function SubmitButton({
  children,
  pendingText = "Submitting...",
  ...props
}: Props) {
  const { pending } = useFormStatus(); // Corrected the import statement

  return (
    <Button type="submit" aria-disabled={pending} {...props}>
      {pending ? pendingText : children}
    </Button>
  );
}