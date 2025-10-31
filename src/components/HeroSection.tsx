import { ArrowDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section 
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-6xl mx-auto text-center z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 order-2 md:order-1">
            <p className="p-2 bg-linear-to-r from-primary/80 via-primary/30 to-primary/80 rounded-full opacity-0 animate-fade-in-delay-1">
              Software Engineer Full-Stack | Arquitecto de Sistemas
            </p>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              <span className= "text-foreground drop-shadow-lg opacity-0 animate-fade-in-delay-2"> 
                {" "}Randy Rojo
              </span>
            </h1>

            <p
              className="text-lg md:text-xl text-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3"
            >
              Experiencia diseñando y construyendo arquitecturas modernas basado en Microservicios y Serverless.
            </p>

            <div className="opacity-0 animate-fade-in-delay-4 pt-3">
              <a className="cosmic-button" href="#projects">Ver mi trabajo</a>
            </div>
          </div>

          <div 
            className="relative group flex justify-center items-center" 
            role="img" 
            aria-label="Foto de perfil de Randy Rojo" 
            style={{ opacity: 1, transform: "none" }}
          >
            <div 
              className="absolute -inset-0.5 bg-linear-to-r from-primary via-primary/80 to-primary rounded-full blur-xl opacity-50 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt" 
              aria-hidden="true"
            >
            </div>
            <span 
              style={{
                boxSizing:"border-box",
                display:"inline-block",
                overflow:"hidden",
                background:"none",
                opacity:1,
                border:0,
                margin:0,
                padding:0,
                position:"relative",
              }}>
              <span style={{boxSizing:"border-box",display:"block",background:"none",opacity:1,border:0,margin:0,padding:0,maxWidth:"100%"}}>
                <img 
                  style={{display:"block",maxWidth:"100%",background:"none",opacity:1,border:0,margin:0,padding:0}} 
                  alt=""
                  aria-hidden="true" 
                  src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27300%27%20height=%27300%27/%3e"
                />
              </span>
              <img 
                alt="Randy David, software engineer full-stack y arquitecto de sistemas" 
                src="/me.png" 
                decoding="async" 
                data-nimg="intrinsic" 
                className="relative rounded-full object-cover backdrop-blur-sm transform group-hover:scale-105 transition-transform duration-500" 
                style={{
                  position: "absolute",
                  inset: "0px",
                  boxSizing: "border-box", 
                  padding: "0px",
                  border: "none",
                  margin: "auto",
                  display: "block",
                  width: "0px",
                  height: "0px",
                  minWidth: "100%",
                  maxWidth: "100%",
                  minHeight: "100%",
                  maxHeight: "100%",
                }}
              />
            </span>
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
