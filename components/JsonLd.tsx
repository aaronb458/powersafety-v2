import { formsConfig } from "@/lib/forms.config";

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(formsConfig.jsonLd),
      }}
    />
  );
}
