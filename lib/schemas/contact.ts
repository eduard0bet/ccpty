import { z } from "zod";

export const contactSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  company: z.string().optional(),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(8, "Please enter a valid phone number"),
  cargoOrigin: z.enum([
    "usa",
    "china",
    "europe",
    "south-america",
    "central-america",
    "other",
  ]),
  service: z.enum([
    "import",
    "export",
    "re-export",
    "transit",
    "nationalization",
    "cold-chain",
    "live-animals",
    "custody",
    "not-sure",
  ]),
  message: z.string().min(20, "Message must be at least 20 characters"),
  honeypot: z.string().max(0).optional(),
  consent: z.boolean().refine((val) => val === true, {
    message: "You must agree to the privacy policy",
  }),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export const originOptions = [
  { value: "usa", label: "United States" },
  { value: "china", label: "China" },
  { value: "europe", label: "Europe" },
  { value: "south-america", label: "South America" },
  { value: "central-america", label: "Central America" },
  { value: "other", label: "Other" },
];

export const serviceOptions = [
  { value: "import", label: "Import / Customs Clearance" },
  { value: "export", label: "Export" },
  { value: "re-export", label: "Re-export" },
  { value: "transit", label: "Transit" },
  { value: "nationalization", label: "Nationalization" },
  { value: "cold-chain", label: "Cold Chain / Perishables" },
  { value: "live-animals", label: "Live Animals" },
  { value: "custody", label: "Custody of Valuables" },
  { value: "not-sure", label: "Not sure / Other" },
];
