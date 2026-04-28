import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Terms & Conditions | Customs Clearance",
  description: "Terms and conditions for using Customs Clearance services.",
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-20">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="mb-8 text-3xl font-bold md:text-4xl">Terms & Conditions</h1>

          <div className="prose prose-lg max-w-none text-foreground">
            <p className="text-sm text-foreground/60">Last updated: April 2026</p>

            <h2 className="mt-8 text-xl font-semibold text-primary">1. Services</h2>
            <p>
              Customs Clearance, S.A. (&quot;we,&quot; &quot;us,&quot; or &quot;the Company&quot;) provides freight forwarding, customs brokerage, and logistics services from China to Panama and other Central American countries.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-primary">2. Service Agreement</h2>
            <p>
              By using our services, you agree to these terms and conditions. A binding agreement is formed when we accept your shipment order or provide a quote that you accept.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-primary">3. Pricing & Payment</h2>
            <p>
              All quotes are valid for 7 days unless otherwise stated. Prices exclude customs duties, taxes (including 7% ITBMS in Panama), and any government fees unless explicitly included. Payment terms will be specified in your invoice.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-primary">4. Prohibited Items</h2>
            <p>
              You may not ship: hazardous materials, weapons, narcotics, counterfeit goods, or any items prohibited by the laws of China, Panama, or destination countries. We reserve the right to refuse or return prohibited shipments at your expense.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-primary">5. Customs & Compliance</h2>
            <p>
              You are responsible for providing accurate information about your shipment contents. False declarations may result in seizure, fines, or legal action by customs authorities.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-primary">6. Liability</h2>
            <p>
              Our liability is limited to the terms of our cargo insurance policy. We recommend purchasing additional insurance for high-value items. We are not liable for delays caused by customs, weather, or force majeure events.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-primary">7. Disputes</h2>
            <p>
              Any disputes arising from these terms shall be resolved under the laws of the Republic of Panama. The courts of Panama City shall have exclusive jurisdiction.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-primary">8. Contact</h2>
            <p>
              For questions about these terms, contact us at hello@customsclearance.com.
            </p>

            <p className="mt-12 rounded-lg bg-muted p-4 text-sm">
              <strong>Note:</strong> This is a placeholder document. Please consult with a legal professional to ensure compliance with Panama&apos;s laws and regulations before publishing.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
