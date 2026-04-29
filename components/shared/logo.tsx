import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "dark" | "light";
  className?: string;
}

export function Logo({ variant = "dark", className }: LogoProps) {
  return (
    <Image
      src="/logo-full.svg"
      alt="Customs Clearance PTY"
      width={180}
      height={32}
      className={cn(
        "h-14 w-auto",
        variant === "light" && "brightness-0 invert",
        className
      )}
      priority
    />
  );
}
