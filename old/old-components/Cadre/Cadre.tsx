import { cva, type VariantProps } from "class-variance-authority"

import { twMerge } from "tailwind-merge"

const cadre = cva(
  [
    "justify-center",
    "inline-flex",
    "items-center",
    "rounded-xl",
    "text-center",
    "border-2",
    "border-blue-900",
    "transition-colors",
    "delay-50",
  ],
  {
    variants: {
      intent: {
        primary: ["bg-gradient-to-bl","bg-blue-300","bg-blend-color-burn", "text-white", "hover:enabled:bg-blue-400", "bg-opacity-50"],
        secondary: ["bg-transparent", "text-blue-400", "hover:enabled:bg-blue-400", "hover:enabled:text-white"],
      },
      size: {
        sm: ["min-w-20", "h-full", "min-h-10", "text-sm", "py-1.5", "px-4"],
        lg: ["min-w-32", "h-full", "min-h-12", "text-lg", "py-2.5", "px-6"],
      },
      underline: { true: ["underline"], false: [] },
    },
    defaultVariants: {
      intent: "primary",
      size: "sm",
    },
  }
)

export function Cadre({ className, intent, size, underline, ...props } : any) {
  return (
    <span className={twMerge(cadre({ intent, size, className, underline }))} {...props}>
          {props.children}
    </span>
  )
}
