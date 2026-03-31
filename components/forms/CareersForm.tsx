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
  email: string;
  phone: string;
  position: string;
  availability: string;
  eligibleToWork: string;
  driversLicense: string;
  physicalRequirements: string;
  certification: string;
  experience: string;
  education: string;
  referral: string;
  website: string; // honeypot
}

const initial: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  position: "",
  availability: "",
  eligibleToWork: "",
  driversLicense: "",
  physicalRequirements: "",
  certification: "",
  experience: "",
  education: "",
  referral: "",
  website: "",
};

export function CareersForm() {
  const [data, setData] = useState<FormData>(initial);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const config = formsConfig.forms.careers;

  const onChange = (name: string, value: string | string[]) => {
    setData((prev) => ({ ...prev, [name]: value as string }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (data.website) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/careers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      trackFormSubmission("careers", { position: data.position, referral: data.referral });
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
      {/* Personal Info */}
      <div className="pb-4 border-b border-border">
        <h3 className="text-sm font-bold text-accent uppercase tracking-widest mb-4" style={{ fontFamily: "var(--font-heading)" }}>
          Personal Information
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <FormField label="First Name" name="firstName" required value={data.firstName} onChange={onChange} placeholder="John" />
          <FormField label="Last Name" name="lastName" required value={data.lastName} onChange={onChange} placeholder="Smith" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5">
          <FormField label="Email" name="email" type="email" required value={data.email} onChange={onChange} placeholder="john@email.com" />
          <FormField label="Phone" name="phone" type="tel" required value={data.phone} onChange={onChange} placeholder="(555) 123-4567" />
        </div>
      </div>

      {/* Position Details */}
      <div className="pb-4 border-b border-border">
        <h3 className="text-sm font-bold text-accent uppercase tracking-widest mb-4" style={{ fontFamily: "var(--font-heading)" }}>
          Position Details
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <FormField label="Position Applying For" name="position" type="select" required options={config.fields.positionOptions as unknown as string[]} value={data.position} onChange={onChange} />
          <FormField label="Availability" name="availability" type="select" required options={config.fields.availabilityOptions as unknown as string[]} value={data.availability} onChange={onChange} />
        </div>
      </div>

      {/* Qualifications */}
      <div className="pb-4 border-b border-border">
        <h3 className="text-sm font-bold text-accent uppercase tracking-widest mb-4" style={{ fontFamily: "var(--font-heading)" }}>
          Qualifications
        </h3>
        <div className="space-y-5">
          <FormField label="Are you legally eligible to work in the US?" name="eligibleToWork" type="radio" required options={["Yes", "No"]} value={data.eligibleToWork} onChange={onChange} />
          <FormField label="Do you have a valid California driver's license?" name="driversLicense" type="radio" required options={["Yes", "No"]} value={data.driversLicense} onChange={onChange} />
          <FormField label="Can you meet the physical requirements of the position?" name="physicalRequirements" type="radio" required options={["Yes", "No"]} value={data.physicalRequirements} onChange={onChange} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-5">
          <FormField label="Certifications" name="certification" type="select" options={config.fields.certificationOptions as unknown as string[]} value={data.certification} onChange={onChange} />
          <FormField label="Years of Experience" name="experience" type="select" options={config.fields.experienceOptions as unknown as string[]} value={data.experience} onChange={onChange} />
          <FormField label="Highest Education Level" name="education" type="select" options={config.fields.educationOptions as unknown as string[]} value={data.education} onChange={onChange} />
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
