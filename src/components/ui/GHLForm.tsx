import { useEffect, useRef } from "react";

export default function GHLForm() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Re-run the GHL embed script on every mount so the form
    // initialises correctly when navigating between React pages.
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up so it doesn't stack up on repeat visits
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div ref={containerRef} style={{ width: "100%", minHeight: "701px" }}>
      <iframe
        src="https://api.leadconnectorhq.com/widget/form/zkpjF9PNEgjYKsUhsEoL"
        style={{ width: "100%", height: "701px", border: "none", borderRadius: "3px" }}
        id="inline-zkpjF9PNEgjYKsUhsEoL"
        data-layout='{"id":"INLINE"}'
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Website Lead Form"
        data-height="701"
        data-layout-iframe-id="inline-zkpjF9PNEgjYKsUhsEoL"
        data-form-id="zkpjF9PNEgjYKsUhsEoL"
        title="Website Lead Form"
      />
    </div>
  );
}
