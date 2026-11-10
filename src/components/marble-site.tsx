import { useState } from "react";
import type { ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowRight, Gem, Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { collections, navigation } from "@/lib/marble-content";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const close = () => setMenuOpen(false);
  return (
    <header className="site-header">
      <div className="mx-auto flex min-h-[4rem] max-w-[1440px] items-center justify-between gap-3 px-4 sm:min-h-[5rem] sm:gap-5 sm:px-8 lg:px-12">
        <Link to="/" aria-label="Marble Handicrafts home" className="flex shrink-0 items-center gap-3" onClick={close}>
          <span className="brand-mark h-8 w-8 sm:h-[2.65rem] sm:w-[2.65rem]" aria-hidden="true"><Gem className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.2} /></span>
          <span className="leading-tight"><span className="block font-display text-xl leading-none sm:text-[1.45rem]">Marble</span><span className="mt-1 block text-[.56rem] uppercase text-muted-foreground sm:text-[.6rem]">Handicrafts</span></span>
        </Link>
        <nav aria-label="Main navigation" className="hidden items-center gap-6 xl:flex">
          {navigation.map(([label, to]) => <Link key={to} to={to} className={`nav-link ${pathname === to ? "active" : ""}`} aria-current={pathname === to ? "page" : undefined}>{label}</Link>)}
        </nav>
        <Button asChild className="hidden h-auto rounded-none px-5 py-3 text-xs sm:inline-flex"><Link to="/contact">Enquire Now <ArrowRight aria-hidden="true" /></Link></Button>
        <Button variant="outline" size="icon" className="h-9 w-9 xl:hidden sm:h-10 sm:w-10" aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen((open) => !open)}>{menuOpen ? <X className="h-4 w-4 sm:h-5 sm:w-5" /> : <Menu className="h-4 w-4 sm:h-5 sm:w-5" />}</Button>
      </div>
      <nav id="mobile-navigation" aria-label="Mobile navigation" className={`mobile-nav xl:hidden ${menuOpen ? "mobile-nav-open" : ""}`} aria-hidden={!menuOpen}>
        <div className="mx-auto flex max-w-[1440px] flex-col px-5 py-4 sm:px-8">
          {navigation.map(([label, to]) => <Link className="border-b border-border py-3 text-sm" key={to} to={to} aria-current={pathname === to ? "page" : undefined} onClick={close}>{label}</Link>)}
          <Button asChild className="mt-4 h-auto self-start rounded-none px-5 py-3 text-xs"><Link to="/contact" onClick={close}>Enquire Now <ArrowRight aria-hidden="true" /></Link></Button>
        </div>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return <footer className="py-14 sm:py-16">
    <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
      <div className="grid gap-8 border-b border-border pb-10 sm:grid-cols-2 lg:grid-cols-4">
        <div><Link to="/" className="flex w-fit items-center gap-3"><span className="brand-mark" aria-hidden="true"><Gem className="h-5 w-5" strokeWidth={1.2} /></span><span className="font-display text-2xl">Marble Handicrafts</span></Link><p className="mt-5 max-w-xs text-xs leading-6 text-muted-foreground">Handcrafted marble creations, shaped with care and an eye for detail.</p></div>
        <div><h2 className="text-xs font-semibold uppercase">Quick links</h2><div className="mt-4 grid gap-3 text-xs">{navigation.map(([label, to]) => <Link className="footer-link" to={to} key={to}>{label}</Link>)}</div></div>
        <div><h2 className="text-xs font-semibold uppercase">Collections</h2><div className="mt-4 grid gap-3 text-xs">{collections.slice(0, 5).map((item) => <Link className="footer-link" to="/collections" key={item.name}>{item.name}</Link>)}</div></div>
        <div><h2 className="text-xs font-semibold uppercase">Get in touch</h2><p className="mt-4 max-w-xs text-xs leading-6 text-muted-foreground">Contact and social details can be added when business profiles are available.</p><div className="gold-line mt-6" /><Link className="mt-5 inline-flex items-center gap-2 text-xs" to="/contact">Discuss your enquiry <ArrowRight aria-hidden="true" className="h-3.5 w-3.5" /></Link></div>
      </div>
      <div className="flex flex-col justify-between gap-2 py-5 text-[.65rem] text-muted-foreground sm:flex-row"><p>© {new Date().getFullYear()} Marble Handicrafts. All rights reserved.</p><Link className="footer-link" to="/">Back to home ↑</Link></div>
    </div>
  </footer>;
}

export function SiteLayout({ children }: { children: ReactNode }) {
  return <div className="site-shell min-h-screen bg-background text-foreground"><SiteHeader />{children}<SiteFooter /><FloatingContactActions /></div>;
}

function FloatingContactActions() {
  const phone = (import.meta.env.VITE_BUSINESS_PHONE ?? "").trim();
  const whatsapp = (import.meta.env.VITE_WHATSAPP_PHONE ?? phone).replace(/\D/g, "");
  const whatsappUrl = whatsapp ? `https://wa.me/${whatsapp}?text=${encodeURIComponent("Hello, I would like to enquire about your marble handicrafts.")}` : "";

  return <div className="floating-contact-actions" aria-label="Quick contact actions">
    {phone ? <a className="floating-contact-action floating-call" href={`tel:${phone.replace(/[^+\d]/g, "")}`} aria-label="Call Marble Handicrafts" title="Call Now"><Phone aria-hidden="true"/></a> : <button className="floating-contact-action floating-call" type="button" disabled aria-label="Call Marble Handicrafts — add a business phone number to enable" title="Add the business phone number to enable calls"><Phone aria-hidden="true"/></button>}
    {whatsappUrl ? <a className="floating-contact-action floating-whatsapp" href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Enquire on WhatsApp" title="WhatsApp Enquiry"><WhatsAppMark /></a> : <button className="floating-contact-action floating-whatsapp" type="button" disabled aria-label="WhatsApp Enquiry — add a WhatsApp number to enable" title="Add a WhatsApp number to enable enquiries"><WhatsAppMark /></button>}
  </div>;
}

function WhatsAppMark() {
  return <svg aria-hidden="true" viewBox="0 0 32 32" className="whatsapp-mark" focusable="false"><path d="M16.04 2.667c-7.34 0-13.31 5.96-13.313 13.29 0 2.348.617 4.64 1.79 6.656l-1.9 6.946 7.11-1.865a13.38 13.38 0 0 0 6.306 1.584h.006c7.338 0 13.31-5.96 13.314-13.29a13.2 13.2 0 0 0-3.89-9.398 13.23 13.23 0 0 0-9.423-3.923Zm0 24.36h-.005a11.1 11.1 0 0 1-5.653-1.542l-.405-.24-4.22 1.107 1.126-4.112-.264-.422a11.03 11.03 0 0 1-1.69-5.86c.003-6.13 4.993-11.12 11.12-11.12a11.05 11.05 0 0 1 7.86 3.26 11.04 11.04 0 0 1 3.25 7.86c-.003 6.13-4.993 11.12-11.12 11.12Zm6.1-8.324c-.333-.167-1.973-.974-2.28-1.085-.306-.11-.528-.167-.75.167-.223.333-.862 1.085-1.056 1.308-.194.222-.389.25-.722.083-.333-.167-1.407-.519-2.68-1.654-.99-.883-1.657-1.973-1.852-2.306-.194-.333-.02-.513.147-.68.15-.15.333-.39.5-.584.166-.194.222-.333.333-.555.111-.223.055-.417-.028-.584-.083-.166-.75-1.806-1.028-2.472-.27-.65-.544-.562-.75-.573l-.64-.01c-.222 0-.583.083-.889.416-.305.334-1.166 1.14-1.166 2.78 0 1.64 1.194 3.223 1.361 3.446.167.222 2.35 3.584 5.69 5.025.795.344 1.417.55 1.9.704.798.253 1.524.217 2.098.132.64-.095 1.973-.807 2.251-1.585.278-.778.278-1.445.195-1.584-.083-.14-.306-.222-.64-.389Z" fill="currentColor"/></svg>;
}

export function PageBanner({ eyebrow, title, description, image }: { eyebrow: string; title: string; description: string; image?: string }) {
  return <section className={`page-banner ${image ? "page-banner-image" : ""}`} style={image ? { backgroundImage: `linear-gradient(90deg, color-mix(in oklab, var(--deep) 86%, transparent), color-mix(in oklab, var(--deep) 35%, transparent)), url("${image}")` } : undefined}>
    <div className="mx-auto w-full max-w-[1440px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"><span className="eyebrow text-primary-foreground">{eyebrow}</span><h1 className="display-title mt-6 max-w-3xl text-5xl text-primary-foreground sm:text-6xl lg:text-7xl">{title}</h1><p className="mt-6 max-w-2xl text-sm leading-7 text-primary-foreground/80 sm:text-base sm:leading-8">{description}</p></div>
  </section>;
}

export function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return <div className="mb-9 flex flex-col justify-between gap-5 border-b border-border pb-8 sm:flex-row sm:items-end"><div><span className="eyebrow">{eyebrow}</span><h2 className="display-title mt-5 text-4xl sm:text-5xl lg:text-6xl">{title}</h2></div>{description && <p className="max-w-sm text-sm leading-6 text-muted-foreground">{description}</p>}</div>;
}
