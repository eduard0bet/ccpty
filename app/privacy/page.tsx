import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Customs Clearance",
  description: "Privacy policy for Customs Clearance services. Learn how we collect, use, and protect your personal data.",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-20">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="mb-8 text-3xl font-bold md:text-4xl">Privacy Policy</h1>

          <div className="prose prose-lg max-w-none text-foreground">
            <p className="text-sm text-foreground/60">Last updated: April 2026</p>

            <h2 className="mt-8 text-xl font-semibold text-primary">1. Introduction</h2>
            <p>
              Customs Clearance, S.A. (&quot;we,&quot; &quot;us,&quot; or &quot;the Company&quot;) respects your privacy and is committed to protecting your personal data in accordance with Panama&apos;s Law 81 of 2019 on Personal Data Protection.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-primary">2. Data We Collect</h2>
            <p>We collect the following types of personal data:</p>
            <ul className="list-disc pl-6">
              <li>Contact information (name, email, phone, address)</li>
              <li>Company information (if applicable)</li>
              <li>Shipment details (origin, destination, contents, weight)</li>
              <li>Payment information</li>
              <li>Communication records</li>
            </ul>

            <h2 className="mt-8 text-xl font-semibold text-primary">3. How We Use Your Data</h2>
            <p>We use your data to:</p>
            <ul className="list-disc pl-6">
              <li>Process and track your shipments</li>
              <li>Complete customs declarations</li>
              <li>Communicate with you about your orders</li>
              <li>Send quotes and invoices</li>
              <li>Improve our services</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="mt-8 text-xl font-semibold text-primary">4. Data Sharing</h2>
            <p>
              We share your data with customs authorities, shipping carriers, and other parties necessary to complete your shipment. We do not sell your personal data to third parties.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-primary">5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-primary">6. Your Rights</h2>
            <p>Under Panama&apos;s Law 81 of 2019, you have the right to:</p>
            <ul className="list-disc pl-6">
              <li>Access your personal data</li>
              <li>Rectify inaccurate data</li>
              <li>Delete your data (subject to legal retention requirements)</li>
              <li>Object to processing</li>
              <li>Data portability</li>
            </ul>

            <h2 className="mt-8 text-xl font-semibold text-primary">7. Data Retention</h2>
            <p>
              We retain your data for the duration required by law (typically 5 years for customs and tax records in Panama) or as long as necessary for our legitimate business purposes.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-primary">8. Cookies</h2>
            <p>
              Our website uses essential cookies for functionality and analytics cookies to understand how visitors use our site. You can manage cookie preferences in your browser settings.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-primary">9. Contact Us</h2>
            <p>
              For privacy-related inquiries or to exercise your rights, contact our Data Protection Officer at privacy@customsclearance.com or write to us at our Panama City office.
            </p>

            <p className="mt-12 rounded-lg bg-muted p-4 text-sm">
              <strong>Note:</strong> This is a placeholder document. Please consult with a legal professional to ensure full compliance with Panama&apos;s Law 81 of 2019 (Ley de Protección de Datos Personales) before publishing.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
