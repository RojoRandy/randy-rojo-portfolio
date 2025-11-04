import { Briefcase, Code, User } from "lucide-react";

export default function AboutSection() {
  return (
    <section 
      id="about"
      className="py-24 px-4 relative"
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Sobre
          <span className="text-primary"> Mi</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Desarrollador Apasionado 
            </h3>

            <p className="text-foreground">
              Mi experticia radica en la orquestación integral del ciclo de vida del producto: desde el diseño estratégico de la solución y la definición de arquitecturas escalables (Microservicios, Serverless), hasta la implementación y el despliegue automatizado en entornos Cloud de misión crítica. Mi compromiso es materializar la visión de negocio con ingeniería de software coherente y de alto rendimiento.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Contactame
              </a>
              <a href="#" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                Descargar CV
              </a>
            </div>
          </div>

          <div className="flex flex-col md:gap-6">
            <div className="gradient-border p-6 card-hover card-reveal hover:shadow-white/20">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Desarrollo Back-End</h4>
                  <p className="text-foreground">
                    Creación de sistemas escalables implementando tecnologías y frameworks modernos
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover card-reveal hover:shadow-white/20">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Desarrollo Front-End</h4>
                  <p className="text-foreground">
                    Desarrollo de interfaces de usuario responsivas enfocado en la experiencia del usuario
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover card-reveal hover:shadow-white/20">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Gestión de Proyectos</h4>
                  <p className="text-foreground">
                    Leading projects from conception to completion with agile 
                    methodologies.
                    Liderado de proyectos de inicio a fin aplicando metodologías agiles
                  </p>
                </div>              
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
