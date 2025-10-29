import { ArrowDown } from "lucide-react";


export default function HeroSection() {
  return (
    <section 
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="text-foreground opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="text-foreground text-shadow-2xs opacity-0 animate-fade-in-delay-1"> Randy</span>
            <span className="text-primary ml-2 opacity-0 animate-fade-in-delay-2"> Rojo</span>
          </h1>

          <p
            className="text-lg md:text-xl text-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3"
          >
            Full Stack Software Engineer | Backend Developer | NestJS | NodeJS | TypeScript | JavaScript |  Docker | SQL | Postgresql | VueJS | ReactJS | React Native
          </p>

          <div className="opacity-0 animate-fade-in-delay-4 pt-4">
            <a className="cosmic-button" href="#projects">View My work</a>
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
