import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { PageBanner, SiteLayout } from "@/components/marble-site";
import { collections, pageMeta } from "@/lib/marble-content";

export const Route = createFileRoute("/gallery")({ head: () => pageMeta("Gallery | Marble Handicrafts", "View marble statues, decorative showpieces, vases, inlay art, home decorations, and intricate marble designs."), component: GalleryPage });

function GalleryPage() {
  const [index, setIndex] = useState<number | null>(null);
  const active = index === null ? null : collections[index];
  const move = (delta: number) => setIndex((current) => current === null ? null : (current + delta + collections.length) % collections.length);
  return <SiteLayout><main><PageBanner eyebrow="Stone, shaped with intention" title="A Closer Look" description="A selection of sculpted forms, marble art, and hand-finished details." image={collections[3].image}/><section className="py-16 sm:py-24"><div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12"><div className="mb-9 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><span className="eyebrow">Selected pieces</span><h2 className="display-title mt-5 text-4xl sm:text-5xl">Marble in detail</h2></div><p className="max-w-sm text-sm leading-6 text-muted-foreground">Explore the range of forms and finishes. Select an image to view it in full.</p></div><div className="columns-2 gap-3 sm:columns-3 lg:columns-4">{collections.map((item,i)=><button key={item.name} type="button" className="gallery-button group mb-3 break-inside-avoid" onClick={()=>setIndex(i)} aria-label={`Open gallery image: ${item.name}`}><img src={item.image} alt={item.alt} width={380} height={764} loading="lazy" className={`${i%3===0?"aspect-[.78]":"aspect-square"}`}/><span className="gallery-overlay text-xs">{item.name}</span></button>)}</div></div></section></main><Dialog open={Boolean(active)} onOpenChange={(open)=>{if(!open)setIndex(null)}}><DialogContent className="max-h-[92svh] max-w-5xl rounded-none border-border bg-background p-3 sm:p-5"><DialogHeader className="pr-8 text-left"><DialogTitle className="font-display text-2xl">{active?.name}</DialogTitle><DialogDescription className="sr-only">Full size gallery photograph of {active?.name}</DialogDescription></DialogHeader>{active&&<><img className="max-h-[72svh] w-full object-contain" src={active.image} alt={active.alt} width={380} height={764}/><div className="flex items-center justify-between"><Button variant="outline" className="rounded-none" onClick={()=>move(-1)} aria-label="Previous image"><ArrowLeft className="h-4 w-4"/> Previous</Button><span className="text-xs text-muted-foreground">{(index??0)+1} / {collections.length}</span><Button variant="outline" className="rounded-none" onClick={()=>move(1)} aria-label="Next image">Next <ArrowRight className="h-4 w-4"/></Button></div></>}</DialogContent></Dialog></SiteLayout>;
}
