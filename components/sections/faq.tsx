import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems } from "@/content/faq";

export function FAQ() {
  return (
    <section id="faq" className="bg-muted py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4">Frequently asked questions.</h2>
          <p className="text-lg text-foreground">
            Everything you need to know about shipping from China.
          </p>
        </div>

        <Accordion className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              className="border-border/50 bg-white px-6 first:rounded-t-2xl last:rounded-b-2xl"
            >
              <AccordionTrigger className="py-5 text-left font-medium text-primary hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
