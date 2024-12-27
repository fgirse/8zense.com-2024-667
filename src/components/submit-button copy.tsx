import { Button } from "@/src/components/ui/button";
import { type ComponentProps } from "react";
import { useState } from "react";

type Props = ComponentProps<typeof Button> & {
  pendingText?: string;
};

export function SubmitButton({
  children,
  pendingText = "Submitting...",
  ...props
}: Props) {
  const [pending, setPending] = useState(false);

  return (
    <Button type="submit" aria-disabled={pending} {...props}>
      {pending ? pendingText : children}
    </Button>
  );
}