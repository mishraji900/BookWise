"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner,toast } from "sonner"

type ToasterProps = React.ComponentProps<typeof Sonner> & {
  variant?: "default" | "destructive";
};

const variantClasses = {
  default: {
    toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
    description: "group-[.toast]:text-muted-foreground",
    actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
    cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
  },
  destructive: {
    toast: "group toast group-[.toaster]:bg-red-600 group-[.toaster]:text-white group-[.toaster]:border-red-700 group-[.toaster]:shadow-lg",
    description: "group-[.toast]:text-red-200",
    actionButton: "group-[.toast]:bg-red-800 group-[.toast]:text-white",
    cancelButton: "group-[.toast]:bg-red-400 group-[.toast]:text-red-900",
  },
  success: {
    toast: "group toast group-[.toaster]:bg-green-600 group-[.toaster]:text-white group-[.toaster]:border-green-700 group-[.toaster]:shadow-lg",
    description: "group-[.toast]:text-green-200",
    actionButton: "group-[.toast]:bg-green-800 group-[.toast]:text-white",
    cancelButton: "group-[.toast]:bg-green-400 group-[.toast]:text-green-900",
  },
};

const Toaster = ({ variant = "default", ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();
  const classes = variantClasses[variant] || variantClasses.default;

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast: classes.toast,
          description: classes.description,
          actionButton: classes.actionButton,
          cancelButton: classes.cancelButton,
        },
      }}
      {...props}
    />
  );
};

const showToast = (message: string, description?: string, variant: "default" | "destructive" | "success"= "default") => {
  const classes = variantClasses[variant] || variantClasses.default;
  
  toast(message, {
    description,
    classNames: {
      toast: classes.toast,
      description: classes.description,
      actionButton: classes.actionButton,
      cancelButton: classes.cancelButton,
    },
  });
};

export { Toaster, showToast };
