"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2 } from "lucide-react";
import { formsConfig } from "@/lib/forms.config";
import { trackFormSubmission } from "@/components/PostHogProvider";
import { FormField } from "./FormField";
import { FormStatus } from "./FormStatus";

interface FormData {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  phone: string;
  projectLocation: string;
  startDate: string;
  duration: string;
  services: string[];
  description: string;
  referral: string;
  website: string; // honeypot
}

const initial: FormData = {
  firstName: "",
  lastName: "",
  company: "",
  email: "",
  phone: "",
  projectLocation: "",
  startDate: "",
  duration: "",
  services: [],
  description: "",
  referral: "",
  website: "",
};

export function QuoteForm() {
  const [data, setData] = useState<FormData>(initial);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const config = formsConfig.forms.quote;

  const onChange = (name: string, value: string | string[]) => {
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (data.website) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      trackFormSubmission("quote", { services: data.services, referral: data.referral });
      setStatus("success");
      setData(initial);
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <FormStatus
        status="success"
        successMessage={config.successMessage}
        errorMessage={config.errorMessage}
      />
    );
  }

  return (
    <motion.form
      onSubmit={onSubmit}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="space-y-5"
    >
      {/* Contact Info Section */}
      <div className="pb-4 border-b border-border">
        <h3 className="text-sm font-bold text-accent uppercase tracking-widest mb-4" style={{ fontFamily: "var(--font-heading)" }}>
          Contact Information
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <FormField label="First Name" name="firstName" required value={data.firstName} onChange={onChange} placeholder="John" />
          <FormField label="Last Name" name="lastName" required value={data.lastName} onChange={onChange} placeholder="Smith" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-5">
          <FormField label="Company Name" name="company" required value={data.company} onChange={onChange} placeholder="ABC Construction" />
          <FormField label="Email" name="email" type="email" required value={data.email} onChange={onChange} placeholder="john@company.com" />
          <FormField label="Phone" name="phone" type="tel" required value={data.phone} onChange={onChange} placeholder="(555) 123-4567" />
        </div>
      </div>

      {/* Project Details Section */}
      <div className="pb-4 border-b border-border">
        <h3 className="text-sm font-bold text-accent uppercase tracking-widest mb-4" style={{ fontFamily: "var(--font-heading)" }}>
          Project Details
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <FormField label="Project Location / Address" name="projectLocation" required value={data.projectLocation} onChange={onChange} placeholder="123 Main St, Sacramento, CA" />
          <FormField label="Estimated Start Date" name="startDate" type="date" required value={data.startDate} onChange={onChange} />
          <FormField label="Estimated Duration" name="duration" type="select" options={config.fields.durationOptions as unknown as string[]} value={data.duration} onChange={onChange} />
        </div>
        <div className="mt-5">
          <FormField
            label="Services Needed (select all that apply)"
            name="services"
            type="checkbox-group"
            options={config.fields.serviceOptions as unknown as string[]}
            value={data.services}
            onChange={onChange}
          />
        </div>
        <div className="mt-5">
          <FormField label="Project Description" name="description" type="textarea" required value={data.description} onChange={onChange} placeholder="Describe the project scope, site conditions, and any special requirements..." />
        </div>
      </div>

      <FormField label="How Did You Hear About Us?" name="referral" type="select" options={config.fields.referralOptions as unknown as string[]} value={data.referral} onChange={onChange} />

      {/* Honeypot */}
      <div className="hidden" aria-hidden="true">
        <input type="text" name="website" tabIndex={-1} autoComplete="off" value={data.website} onChange={(e) => onChange("website", e.target.value)} />
      </div>

      <FormStatus status={status} successMessage={config.successMessage} errorMessage={config.errorMessage} />

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent hover:bg-accent-dark text-white font-bold uppercase tracking-wide rounded-lg cta-glow transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {status === "loading" ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            {config.buttonText}
          </>
        )}
      </button>
    </motion.form>
  );
}
