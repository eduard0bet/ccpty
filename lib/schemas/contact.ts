import { z } from "zod";

export const contactSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  company: z.string().optional(),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(8, "Please enter a valid phone number"),
  country: z.enum([
    "panama",
    "costa-rica",
    "guatemala",
    "el-salvador",
    "honduras",
    "nicaragua",
    "other",
  ]),
  originCity: z.string().optional(),
  service: z.enum([
    "air-freight",
    "sea-freight-lcl",
    "sea-freight-fcl",
    "door-to-door",
    "customs-only",
    "not-sure",
  ]),
  volume: z.string().optional(),
  message: z.string().min(20, "Message must be at least 20 characters"),
  honeypot: z.string().max(0).optional(),
  consent: z.boolean().refine((val) => val === true, {
    message: "You must agree to the privacy policy",
  }),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export const countryOptions = [
  { value: "panama", label: "Panama" },
  { value: "costa-rica", label: "Costa Rica" },
  { value: "guatemala", label: "Guatemala" },
  { value: "el-salvador", label: "El Salvador" },
  { value: "honduras", label: "Honduras" },
  { value: "nicaragua", label: "Nicaragua" },
  { value: "other", label: "Other" },
];

export const serviceOptions = [
  { value: "air-freight", label: "Air freight" },
  { value: "sea-freight-lcl", label: "Sea freight LCL" },
  { value: "sea-freight-fcl", label: "Sea freight FCL" },
  { value: "door-to-door", label: "Door-to-door / Casillero" },
  { value: "customs-only", label: "Customs clearance only" },
  { value: "not-sure", label: "Not sure" },
];
