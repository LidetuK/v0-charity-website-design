"use client"

import { useState } from "react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { countries, countryContent } from "@/components/know-your-rights-section"
import { Button } from "@/components/ui/button"
import { BookOpen } from "lucide-react"

export default function EmploymentRulesPage() {
  const [language, setLanguage] = useState<"english" | "arabic">("english")
  
  return (
    <main className="min-h-screen bg-neutral-50 dark:bg-neutral-950 overflow-x-hidden">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-40 overflow-hidden text-white">
        <div className="absolute inset-0 z-0">
          <Image
             src="https://res.cloudinary.com/dmfza46nt/image/upload/v1774097005/ANYA_23_o5sfoz.jpg"
             alt="Employment Rules Background"
             fill
             className="object-cover object-top"
             priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/50" />
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/90 to-transparent" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/20 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-md mb-6 shadow-lg">
             <span className="relative flex h-2.5 w-2.5 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
             </span>
             Employment Rules
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold mb-6 text-white leading-tight">
            Migrant Rights <span className="text-primary">Information</span>
          </h1>
          <p className="text-xl text-white/80 md:text-2xl mb-12 leading-relaxed font-light text-pretty">
            Know your rights, understand your contract, and work with confidence. Select your language and explore destination-specific employment rules.
          </p>
          
          <div className="inline-flex flex-col sm:flex-row items-center rounded-3xl sm:rounded-full border border-white/20 bg-black/40 backdrop-blur-md p-1.5 shadow-xl gap-2 sm:gap-0">
             <Button 
               variant={language === "english" ? "default" : "ghost"}
               onClick={() => setLanguage("english")}
               className={language === "english" ? "rounded-full bg-primary hover:bg-primary px-8 h-12 text-base font-semibold w-full sm:w-auto" : "rounded-full text-white hover:text-white hover:bg-white/10 px-8 h-12 text-base w-full sm:w-auto"}
             >
                Amharic (አማርኛ)
             </Button>
             <Button 
               variant={language === "arabic" ? "default" : "ghost"}
               onClick={() => setLanguage("arabic")}
               className={language === "arabic" ? "rounded-full bg-primary hover:bg-primary px-8 h-12 text-base font-semibold w-full sm:w-auto" : "rounded-full text-white hover:text-white hover:bg-white/10 px-8 h-12 text-base w-full sm:w-auto"}
             >
                Oromiffaa (Afaan Oromoo)
             </Button>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-background relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Quick Navigation Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-20">
             {countries.map(c => (
                <a 
                  key={c.id} 
                  href={`#${c.id}`} 
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(c.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  className="px-5 py-3 rounded-xl bg-card border border-border/60 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-0.5 transition-all text-sm font-bold flex items-center gap-2.5 text-foreground"
                >
                   <span className="text-xl leading-none">{c.flag}</span> 
                   {c.name}
                </a>
             ))}
          </div>

          <div className="space-y-32">
              {countries.map((country) => {
                 const data = countryContent[country.id]?.[language]
                 if (!data) return null;

                 return (
                    <div key={country.id} className="scroll-mt-32 relative" id={country.id}>
                       
                       {/* Background Glow per section */}
                       <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none -z-10" />

                       {/* Country Header */}
                       <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 border-b-2 border-primary/10 pb-8">
                          <div className="flex items-center gap-6">
                            <div className="w-24 h-16 relative rounded-xl overflow-hidden shadow-md border border-border/50 bg-muted">
                               <img src={country.flagUrl} alt={`${country.name} flag`} className="absolute inset-0 w-full h-full object-cover" />
                            </div>
                            <div>
                               <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground">
                                  {country.name}
                               </h2>
                               <p className="text-primary font-bold tracking-widest uppercase text-sm mt-2">{country.localName}</p>
                            </div>
                          </div>
                          
                          <div className="px-6 py-3 bg-muted/50 rounded-2xl border border-border/50 max-w-xs">
                             <p className="text-xl font-bold text-foreground">{data.title}</p>
                             <p className="text-sm text-muted-foreground mt-1">Official Guidelines</p>
                          </div>
                       </div>
                       
                       {/* Rules Grid */}
                       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                         {data.sections.map((section, idx) => (
                            <div 
                              key={idx} 
                              className="group bg-card rounded-3xl p-8 border border-border/60 shadow-sm hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-1 relative overflow-hidden flex flex-col h-full"
                            >
                               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                               
                               <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500 shrink-0">
                                  <BookOpen className="w-6 h-6" />
                               </div>
                               
                               <h3 className="text-xl font-bold text-foreground mb-4 leading-tight">
                                 {section.heading}
                               </h3>
                               
                               <p className="text-muted-foreground leading-relaxed flex-1">
                                 {section.content}
                               </p>
                            </div>
                         ))}
                       </div>
                    </div>
                 )
              })}
           </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
