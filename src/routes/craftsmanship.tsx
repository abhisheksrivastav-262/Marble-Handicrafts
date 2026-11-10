import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageBanner, SiteLayout } from "@/components/marble-site";
import { craftImage, collections, pageMeta } from "@/lib/marble-content";

const steps = [
  { title: "Marble carving", body: "From the first carved line, marble invites a patient hand and a thoughtful eye." },
  { title: "Intricate hand detailing", body: "Careful detailing brings sculptural forms and ornamental patterns to life." },
  { title: "Polishing and finishing", body: "The final polish reveals the natural character and finish of the stone." },
];

export const Route = createFileRoute("/craftsmanship")({ head: () => pageMeta("Craftsmanship | Marble Handicrafts", "Explore the traditional marble carving, hand detailing, polishing, and finishing behind our marble creations."), component: CraftsmanshipPage });

function CraftsmanshipPage() {
  return <SiteLayout><main>
    <PageBanner eyebrow="The hands behind the stone" title="Where Art Meets Craftsmanship" description="Each finished surface brings the natural character of stone together with the artisan’s touch." image={craftImage}/>
    <section className="py-20 sm:py-28"><div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12"><div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20"><div><span className="eyebrow">A patient process</span><h2 className="display-title mt-5 text-4xl sm:text-5xl">Traditional craftsmanship, shaped in marble</h2><p className="mt-6 text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">Marble takes time, a steady hand, and an appreciation for detail. From carving to finish, each step reveals another quality in the natural stone.</p><div className="mt-9 grid gap-6">{steps.map((step,index)=><article className="grid grid-cols-[2.5rem_1fr] gap-4 border-t border-border pt-5" key={step.title}><span className="font-display text-2xl text-primary">0{index+1}</span><div><h3 className="font-display text-2xl">{step.title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{step.body}</p></div></article>)}</div></div><figure className="relative min-h-[480px] lg:min-h-[680px]"><img className="editorial-image absolute inset-0" src={craftImage} alt="Close view of an artisan carving ornamental details into white marble" width={1536} height={1024} loading="lazy"/><figcaption className="absolute bottom-4 left-4 bg-background/90 px-4 py-3 text-[.65rem] uppercase text-primary">Hand-finished marble craftsmanship</figcaption></figure></div></div></section>
    <section className="bg-deep py-16 text-primary-foreground sm:py-20"><div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12"><span className="eyebrow text-primary-foreground">The finished work</span><h2 className="display-title mt-5 max-w-2xl text-4xl sm:text-5xl">Natural stone, finished with care</h2><div className="mt-10 grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">{collections.slice(0,4).map((item)=><Link to="/gallery" className="overflow-hidden" key={item.name}><img src={item.image} alt={item.alt} width={380} height={764} loading="lazy" className="aspect-square w-full object-cover transition-transform duration-500 hover:scale-105"/></Link>)}</div><Button asChild className="mt-8 h-auto rounded-none px-6 py-3.5 text-xs"><Link to="/gallery">View the Gallery <ArrowRight className="h-4 w-4"/></Link></Button></div></section>
  </main></SiteLayout>;
}
