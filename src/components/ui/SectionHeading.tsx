import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  ...props
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className
      )}
      {...props}
    >
      {eyebrow && (
        <span className="text-sm font-semibold tracking-wider text-[var(--color-accent)] uppercase">
          {eyebrow}
        </span>
      )}
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-[var(--color-text)]">
        {title}
      </h2>
      {description && (
        <p className="max-w-[700px] text-base md:text-lg text-[var(--color-muted)] text-balance">
          {description}
        </p>
      )}
    </div>
  );
}
