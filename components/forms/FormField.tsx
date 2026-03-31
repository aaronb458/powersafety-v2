"use client";

import { cn } from "@/lib/utils";

interface FormFieldProps {
  label: string;
  name: string;
  type?: "text" | "email" | "tel" | "date" | "textarea" | "select" | "checkbox-group" | "radio";
  required?: boolean;
  placeholder?: string;
  options?: string[];
  value: string | string[];
  onChange: (name: string, value: string | string[]) => void;
  error?: string;
  className?: string;
}

const inputClasses =
  "w-full px-4 py-3 bg-surface border border-border rounded-lg text-text placeholder:text-text-light focus:border-accent focus:ring-1 focus:ring-accent transition-colors duration-200 text-sm";

export function FormField({
  label,
  name,
  type = "text",
  required = false,
  placeholder,
  options = [],
  value,
  onChange,
  error,
  className,
}: FormFieldProps) {
  if (type === "textarea") {
    return (
      <div className={cn("space-y-1.5", className)}>
        <label htmlFor={name} className="block text-sm font-medium text-text">
          {label} {required && <span className="text-accent">*</span>}
        </label>
        <textarea
          id={name}
          name={name}
          required={required}
          placeholder={placeholder}
          value={value as string}
          onChange={(e) => onChange(name, e.target.value)}
          rows={4}
          className={cn(inputClasses, "resize-y", error && "border-red-500")}
        />
        {error && <p className="text-xs text-red-500">{error}</p>}
      </div>
    );
  }

  if (type === "select") {
    return (
      <div className={cn("space-y-1.5", className)}>
        <label htmlFor={name} className="block text-sm font-medium text-text">
          {label} {required && <span className="text-accent">*</span>}
        </label>
        <select
          id={name}
          name={name}
          required={required}
          value={value as string}
          onChange={(e) => onChange(name, e.target.value)}
          className={cn(inputClasses, "appearance-none cursor-pointer", error && "border-red-500")}
        >
          <option value="">Select...</option>
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        {error && <p className="text-xs text-red-500">{error}</p>}
      </div>
    );
  }

  if (type === "checkbox-group") {
    const selectedValues = Array.isArray(value) ? value : [];
    return (
      <div className={cn("space-y-2", className)}>
        <label className="block text-sm font-medium text-text">
          {label} {required && <span className="text-accent">*</span>}
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {options.map((opt) => (
            <label
              key={opt}
              className="flex items-center gap-2 px-3 py-2 rounded-lg border border-border bg-surface hover:bg-surface-hover cursor-pointer transition-colors text-sm"
            >
              <input
                type="checkbox"
                checked={selectedValues.includes(opt)}
                onChange={(e) => {
                  const next = e.target.checked
                    ? [...selectedValues, opt]
                    : selectedValues.filter((v) => v !== opt);
                  onChange(name, next);
                }}
                className="w-4 h-4 rounded border-border text-accent focus:ring-accent"
              />
              <span className="text-text-muted">{opt}</span>
            </label>
          ))}
        </div>
        {error && <p className="text-xs text-red-500">{error}</p>}
      </div>
    );
  }

  if (type === "radio") {
    return (
      <div className={cn("space-y-2", className)}>
        <label className="block text-sm font-medium text-text">
          {label} {required && <span className="text-accent">*</span>}
        </label>
        <div className="flex gap-4">
          {options.map((opt) => (
            <label
              key={opt}
              className="flex items-center gap-2 cursor-pointer text-sm"
            >
              <input
                type="radio"
                name={name}
                value={opt}
                checked={value === opt}
                onChange={(e) => onChange(name, e.target.value)}
                className="w-4 h-4 border-border text-accent focus:ring-accent"
              />
              <span className="text-text-muted">{opt}</span>
            </label>
          ))}
        </div>
        {error && <p className="text-xs text-red-500">{error}</p>}
      </div>
    );
  }

  return (
    <div className={cn("space-y-1.5", className)}>
      <label htmlFor={name} className="block text-sm font-medium text-text">
        {label} {required && <span className="text-accent">*</span>}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        required={required}
        placeholder={placeholder}
        value={value as string}
        onChange={(e) => onChange(name, e.target.value)}
        className={cn(inputClasses, error && "border-red-500")}
      />
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}
