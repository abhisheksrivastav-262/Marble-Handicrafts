import { useEffect, useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ChevronDown, Gem, MessageCircle, Phone, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PageBanner, SiteLayout } from "@/components/marble-site";
import { collections, pageMeta } from "@/lib/marble-content";

const faqItems = [
  { question: "What types of marble handicrafts are available?", answer: "Explore the collection for statues and sculptures, decorative items, vases, showpieces, pooja items, bowls and plates, candle holders, home decor, inlay art, and custom enquiries." },
  { question: "Can I enquire about custom designs?", answer: "Yes. Share your design idea, preferred dimensions, and any reference details in the enquiry form, and select Custom Marble Handicrafts." },
  { question: "How can I place a product enquiry?", answer: "Choose a collection item, use its Enquire Now button, and include your contact details and requirements in the form. Enquiries are not sent until business contact details are configured." },
  { question: "Are marble handicrafts suitable for gifting?", answer: "Marble pieces can make thoughtful gifts for many occasions. Contact the business to discuss a suitable piece and any presentation requirements." },
  { question: "How can I contact your business?", answer: "Use the enquiry form on this page. Phone, WhatsApp, email, and address details can be added once the business shares them." },
];

export const Route = createFileRoute("/contact")({ head: () => pageMeta("Contact Us | Marble Handicrafts", "Get in touch with Marble Handicrafts about a product or custom marble handicraft enquiry."), component: ContactPage });

function ContactPage() {
  const [interestedIn, setInterestedIn] = useState("");
  const [formMessage, setFormMessage] = useState("");
  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get("product");
    if (requested && collections.some((item) => item.name === requested)) setInterestedIn(requested);
  }, []);
  const submitEnquiry = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormMessage("Your details passed the form checks, but this enquiry has not been sent. Add the business email address to enable delivery.");
  };
  return <SiteLayout><main><PageBanner eyebrow="Start a conversation" title="Contact Us" description="Share the piece you’re looking for, your preferred quantity, and any details that will help us understand your enquiry."/><section className="py-16 sm:py-24"><div className="mx-auto grid max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-[.78fr_1.22fr] lg:gap-24 lg:px-12"><div className="lg:py-4"><span className="eyebrow">Tell us what you have in mind</span><h2 className="display-title mt-5 max-w-lg text-4xl sm:text-5xl lg:text-6xl">Make an Enquiry</h2><p className="mt-6 max-w-md text-sm leading-7 text-muted-foreground">Let us know what you are looking for and include any details that will help us understand your requirements.</p><div className="mt-8 flex gap-3 border-t border-border pt-5"><ShieldCheck aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-primary"/><p className="text-xs leading-5 text-muted-foreground">Contact delivery has not been configured. Submitting this form will not send or store your details.</p></div></div><form className="grid gap-5 border-t border-border pt-7 sm:grid-cols-2" onSubmit={submitEnquiry}>
      <label className="field-label">Full Name <span className="text-primary" aria-hidden="true">*</span><input className="field-control" name="name" autoComplete="name" placeholder="Your name" required/></label>
      <label className="field-label">Phone Number <span className="text-primary" aria-hidden="true">*</span><input className="field-control" name="phone" type="tel" autoComplete="tel" placeholder="Your phone number" required/></label>
      <label className="field-label">Email Address <span className="text-primary" aria-hidden="true">*</span><input className="field-control" name="email" type="email" autoComplete="email" placeholder="you@example.com" required/></label>
      <label className="field-label">Product Interested In<span className="relative"><select className="field-control appearance-none pr-9" name="product" value={interestedIn} onChange={(event)=>setInterestedIn(event.target.value)}><option value="">Choose a collection</option>{collections.map((product)=><option key={product.name} value={product.name}>{product.name}</option>)}</select><ChevronDown aria-hidden="true" className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"/></span></label>
      <label className="field-label sm:col-span-2">Quantity<input className="field-control" name="quantity" type="number" min="1" step="1" placeholder="Approximate quantity"/></label>
      <label className="field-label sm:col-span-2">Message <span className="text-primary" aria-hidden="true">*</span><textarea className="field-control" name="message" placeholder="Share the details of your enquiry…" required/></label>
      <div className="sm:col-span-2"><Button type="submit" className="h-auto rounded-none px-6 py-3.5 text-xs">Submit Enquiry <ArrowRight aria-hidden="true"/></Button>{formMessage&&<p className="mt-4 border-l-2 border-gold pl-3 text-sm leading-6 text-muted-foreground" role="status">{formMessage}</p>}</div>
    </form></div></section>
    <section className="bg-marble py-16 sm:py-20"><div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12"><div className="grid gap-10 border-b border-border pb-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-16"><div><span className="eyebrow">Custom orders</span><h2 className="display-title mt-5 text-4xl sm:text-5xl">Looking for Something Unique?</h2><p className="mt-5 text-sm leading-7 text-muted-foreground">Share your design idea, preferred dimensions, and any reference details in the enquiry form.</p></div><div className="grid content-start gap-5"><h3 className="font-display text-2xl">Marble Handicrafts</h3><ContactDetail icon={Phone} label="Phone" value="Contact details not configured"/><ContactDetail icon={MessageCircle} label="WhatsApp" value="Contact details not configured"/></div><div className="grid content-start gap-5"><span className="font-display text-2xl">Business details</span><ContactDetail icon={Gem} label="Address" value="Business address not configured"/><ContactDetail icon={MessageCircle} label="Email" value="Email address not configured"/></div></div><p className="mt-5 text-xs leading-6 text-muted-foreground">Call and WhatsApp enquiry links will be available when the business phone numbers are configured. A map will be added when a business address is provided.</p><div className="mt-16 grid gap-10 lg:grid-cols-[.7fr_1.3fr] lg:gap-24"><div><span className="eyebrow">A few helpful details</span><h2 className="display-title mt-5 text-4xl sm:text-5xl">Frequently Asked Questions</h2></div><Accordion type="single" collapsible className="border-t border-border">{faqItems.map((item, i) => <AccordionItem value={`faq-${i}`} key={item.question} className="border-border"><AccordionTrigger className="gap-5 py-5 text-left text-sm font-normal hover:no-underline sm:text-base">{item.question}</AccordionTrigger><AccordionContent className="max-w-2xl text-sm leading-6 text-muted-foreground">{item.answer}</AccordionContent></AccordionItem>)}</Accordion></div></div></section>
  </main></SiteLayout>;
}

function ContactDetail({ icon: Icon, label, value }: { icon: typeof Phone; label: string; value: string }) {
  return <div className="flex items-start gap-3"><span className="mt-0.5 text-primary"><Icon aria-hidden="true" className="h-4 w-4" strokeWidth={1.5}/></span><div><span className="block text-[.65rem] uppercase text-muted-foreground">{label}</span><span className="mt-1 block text-sm">{value}</span></div></div>;
}

