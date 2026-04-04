import { useEffect } from "react";

interface ContactFormProps {
  submitButtonText?: string;
  onSuccess?: () => void;
}

export default function ContactForm({ 
  submitButtonText,
  onSuccess 
}: ContactFormProps) {
  useEffect(() => {
    // Load LeadConnector form embed script
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="w-full min-h-[500px]">
      <iframe
        src="https://api.leadconnectorhq.com/widget/form/OaZe9yPaDgWgPBpvQF5U"
        style={{ width: "100%", height: "100%", border: "none", borderRadius: "3px" }}
        id="inline-OaZe9yPaDgWgPBpvQF5U" 
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Website Lead Form"
        data-height="1000"
        data-layout-iframe-id="inline-OaZe9yPaDgWgPBpvQF5U"
        data-form-id="OaZe9yPaDgWgPBpvQF5U"
        title="Website Lead Form"
      />
    </div>
  );
}
