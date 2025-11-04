

const career = [
  {
    position: "Sr Sofware Engineer",
    company: "Maderas y Tarimas Cesar Rojo",
    period: "Feb / 2025 - Sep / 2025",
    description: "Este proyecto representó el diseño, desarrollo e implementación integral (Full-Stack/DevOps) de la primera suite de aplicaciones empresariales para el cliente, asumiendo una función de consultoría técnica y desarrollo unipersonal. El objetivo principal era reemplazar procesos manuales con sistemas modulares y escalables que soportaran el crecimiento futuro del negocio.",
    techStack: [ "JavaScript","TypeScript","NodeJs","NestJs","VueJs","PostgreSQL","Docker","GitHub","GitHub Actions","AWS S3","AWS CloudFront","AWS IAM","Railway"],
    softSkills: [ "Liderazgo", "Diseño UX/UI", "Arquitectura", "Análisis", "Desarrollo", "Infraestructura", "DevOps" ]
  },
  {
    position: "Sr Sofware Engineer",
    company: "XID - Digital Services, S.A. de C.V.",
    period: "Jun / 2023 - Ene / 2025",
    description: `Fui contratado con el rol de Líder Técnico para dirigir la migración completa de una plataforma B2B de turismo, esencial para el negocio, que proveía a agencias de viajes nacionales e internacionales un catálogo robusto de hoteles, tours y servicios de transporte con un modelo de comisiones por reserva. El objetivo principal fue transformar un sistema monolítico en una arquitectura de microservicios y micro-frontends moderna, escalable y mantenible.`,
    techStack: [ "JavaScript","TypeScript","NodeJs","NestJs","VueJs","PostgreSQL","MySQL","Docker","GitHub","GCP Cloud Run","GCP Buckets"],
    softSkills: [ "Liderazgo", "Transformación", "Análisis", "Arquitectura", "Desarrollo", "Transferencia de Conocimientos", "DevOps" ]
  },
  {
    position: "SSr Sofware Engineer",
    company: "ION Financiera S.A.P.I. DE C.V. SOFOM, E.R.",
    period: "Oct / 2021 - Jun / 2023",
    description: `En esta posición, mis responsabilidades se centraron en la digitalización y optimización de los procesos críticos de créditos hipotecarios y la integración de un nuevo sistema Core bancario.`,
    techStack: [ "JavaScript","TypeScript","NodeJs","Serverless","AWS Lambda","API Gateway","Cognito","GraphQL","VueJs","SQL Server"],
    softSkills: [ "Integración", "Adaptación", "Migración", "Desarrollo" ]
  },
  {
    position: "Jr Sofware Engineer",
    company: "Guadiana Tecnología S.A.P.I. de C.V.",
    period: "Ene / 2017 - Nov / 2019",
    description: `Comencé mi carrera profesional como Software Engineer en SC Computación, enfocado en el desarrollo, soporte y evolución de los sistemas Software as a Service (SaaS) de la empresa. Mi experiencia se centró en aplicaciones de escritorio utilizando el stack .NET Framework y en la gestión integral de bases de datos relacionales.`,
    techStack: [ "C#","Net Framework","SQL Server"],
    softSkills: [ "Análisis","Diseño", "Optimización", "Desarrollo", "Arquitectura" ]
  },

]

export default function CareerSection() {
  return (
    <section id="career" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Carrera
          <span className="text-primary"> Profesional</span>
        </h2>

        {
          career.map((job, key) => (
            <div 
              className="p-4 group bg-card rounded-lg overflow-auto shadow-lg hover:shadow-primary/20 card-hover card-reveal space-y-4"
              key={key}
            >
              <div className="flex flex-col md:flex-row md:justify-between gap-2">
                <h3 className="text-xl md:text-lg font-bold">
                  <span className="text-primary">{job.position} : </span>
                  {job.company}</h3>
                <span className="text-sm -bg-linear-60 from-primary via-fuchsia-800 to-primary px-2 py-1 rounded-full ">{job.period}</span>
              </div>
              <div>
                <p className="text-left mb-2">
                  {job.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-2 items-center">
                  <span className="text-sm font-light">Stack Tecnologico: </span>
                  {
                    job.techStack.map((tech, techKey) => (
                      <span 
                        className="border border-border text-xs rounded-full px-2 py-1 hover:bg-white/20"
                        key={techKey}
                      >
                        {tech}
                      </span>
                    ))
                  }
                </div>
                <div className="flex flex-wrap gap-2 items-center">
                  <span className="text-sm font-light">Soft Skills: </span>
                  {
                    job.softSkills.map((skill, softKey) => (
                      <span 
                        className="bg-white/10 border border-border text-xs rounded-full px-2 py-1 hover:bg-white/0"
                        key={softKey}
                      >
                        {skill}
                      </span>
                    ))
                  }
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}
