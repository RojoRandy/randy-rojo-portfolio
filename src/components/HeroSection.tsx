import { ArrowDown } from "lucide-react";
import { cn } from "../lib/utils";
import { useTranslation } from "react-i18next";

export default function HeroSection() {
  const { t } = useTranslation()
  return (
    <section 
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-6xl mx-auto text-center z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          <div className="relative group opacity-0 animate-fade-in md:animate-fade-in-delay-4 order-1 md:order-2">
            <div 
              className={cn(
                "absolute bg-linear-to-r from-primary/80 to-red-950/80 mx-auto inset-0 rounded-full blur-lg -z-10 transition-all duration-1000 ease-in-out",
                "group-hover:scale-110"
              )} />
            <img src="/me.png" alt="Randy Rojo" className="rounded-full mx-auto" />
          </div>

          <div className="space-y-6 order-2 md:order-1">
            <p className="p-2 bg-linear-to-r from-primary/80 via-primary/30 to-primary/80 rounded-full opacity-0 animate-fade-in-delay-1">
              {t('home.hero.role')}
            </p>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              <span className= "text-foreground drop-shadow-lg opacity-0 animate-fade-in-delay-2"> 
                {" "}Randy Rojo
              </span>
            </h1>

            <p
              className="text-lg md:text-xl text-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3"
            >
              {t('home.hero.description')}
            </p>

            <div className="opacity-0 animate-fade-in-delay-4 pt-3">
              <a className="cosmic-button" href="#career">{t('home.hero.careerButton')}</a>
            </div>
          </div>
        </div>
      </div>

      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce cursor-pointer select-none"
      >
        <span className="text-sm text-foreground mb-2">Scroll</span>
        <ArrowDown className="w-5 h-5 text-primary" />
      </div>
    </section>
  )
}
