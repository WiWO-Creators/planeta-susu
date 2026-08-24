import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 min-h-12 px-5 font-display font-semibold text-base sm:text-lg rounded-full border-[3px] border-ink transition-transform duration-150 ease-out active:not-disabled:translate-y-[3px] active:not-disabled:shadow-chunky-sm disabled:opacity-50 disabled:pointer-events-none select-none",
  {
    variants: {
      tone: {
        yellow: "bg-yellow text-ink shadow-chunky hover:bg-yellow-deep",
        ink: "bg-ink text-yellow shadow-chunky",
        vector: "bg-vector text-cloud shadow-chunky",
        gadu: "bg-gadu text-cloud shadow-chunky",
        zizu: "bg-zizu text-ink shadow-chunky",
        margarel: "bg-margarel text-cloud shadow-chunky",
        susu: "bg-susu text-ink shadow-chunky",
        cream: "bg-cream text-ink shadow-chunky",
        ghost: "bg-transparent text-ink border-transparent shadow-none hover:bg-ink/5",
      },
      size: {
        md: "min-h-12 px-5",
        sm: "min-h-10 px-4 text-base",
        lg: "min-h-14 px-7 text-xl",
      },
    },
    defaultVariants: { tone: "yellow", size: "md" },
  },
);

type Props = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "size"> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean };

export function Button({ className, tone, size, asChild, ...props }: Props) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ tone, size }), className)} {...props} />;
}

export { buttonVariants };
