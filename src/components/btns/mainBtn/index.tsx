import { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export default function MainButton({ children, className, ...props }: props) {
  const c = twMerge(
    "bg-Orange w-full text-white hover:bg-Pale-orange duration-300 rounded-md p-2 ",
    className,
  );
  return (
    <button className={c} {...props}>
      {children}
    </button>
  );
}
