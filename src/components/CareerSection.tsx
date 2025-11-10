import { useTranslation } from "react-i18next";


const career = [
  {
    position: "home.career.career5.position",
    company: "Maderas y Tarimas Cesar Rojo",
    period: "home.career.career5.period",
    description: "home.career.career5.description",
    techStack: [ "JavaScript","TypeScript","NodeJs","NestJs","VueJs","PostgreSQL","Docker","GitHub","GitHub Actions","AWS S3","AWS CloudFront","AWS IAM","Railway", "DevOps"],
    softSkills: [ "home.career.softSkills.leading", "home.career.softSkills.design", "home.career.softSkills.architecture", "home.career.softSkills.development", "home.career.softSkills.infrastructure" ]
  },
  {
    position: "home.career.career4.position",
    company: "XID - Digital Services, S.A. de C.V.",
    period: "home.career.career4.period",
    description: 'home.career.career4.description',
    techStack: [ "JavaScript","TypeScript","NodeJs","NestJs","VueJs","PostgreSQL","MySQL","Docker","GitHub","GCP Cloud Run","GCP Buckets", "DevOps"],
    softSkills: [ "home.career.softSkills.leading", "home.career.softSkills.transformation", "home.career.softSkills.analysis", "home.career.softSkills.architecture", "home.career.softSkills.knowledgeTransfer"]
  },
  {
    position: "home.career.career3.position",
    company: "ION Financiera S.A.P.I. DE C.V. SOFOM, E.R.",
    period: "home.career.career3.period",
    description: 'home.career.career3.description',
    techStack: [ "JavaScript","TypeScript","NodeJs","Serverless","AWS Lambda","API Gateway","Cognito","GraphQL","VueJs","SQL Server"],
    softSkills: [ "home.career.softSkills.integration", "home.career.softSkills.adaptability", "home.career.softSkills.transformation"]
  },
  {
    position: "home.career.career2.position",
    company: "Guadiana Tecnología S.A.P.I. de C.V.",
    period: "home.career.career2.period",
    description: 'home.career.career2.description',
    techStack: [ "C#","Net Framework","SQL Server"],
    softSkills: [ "home.career.softSkills.analysis","home.career.softSkills.optimization", "home.career.softSkills.architecture" ]
  },
  {
    position: "home.career.career1.position",
    company: "SC Computación",
    period: "home.career.career1.period",
    description: 'home.career.career1.description',
    techStack: [ "C#","Net Framework","SQL Server"],
    softSkills: [ "home.career.softSkills.analysis","home.career.softSkills.design", "home.career.softSkills.optimization", "home.career.softSkills.architecture" ]
  },

]

export default function CareerSection() {
  const { t } = useTranslation();

  return (
    <section id="career" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {t('home.career.title1')}
          <span className="text-primary"> {t('home.career.title2')}</span>
        </h2>

        {
          career.map((job, key) => (
            <div 
              className="p-4 group bg-card rounded-lg overflow-auto shadow-lg hover:shadow-primary/20 card-hover card-reveal space-y-4"
              key={key}
            >
              <div className="flex flex-col md:flex-row md:justify-between gap-2">
                <h3 className="text-xl md:text-lg font-bold">
                  <span className="text-primary">{t(job.position)} @ </span>
                  {job.company}</h3>
                <span className="text-sm -bg-linear-60 from-primary via-fuchsia-800 to-primary px-2 py-1 rounded-full ">{t(job.period)}</span>
              </div>
              <div>
                <p className="text-left mb-2">
                  {t(job.description)}
                </p>
                <div className="flex flex-wrap gap-2 mb-2 items-center">
                  <span className="text-sm font-light">{t('home.career.techStackLabel')}: </span>
                  {
                    job.techStack.map((tech, techKey) => (
                      <span 
                        className="border border-border text-xs rounded-full px-2 py-1 hover:bg-white/20"
                        key={techKey}
                      >
                        {t(tech)}
                      </span>
                    ))
                  }
                </div>
                <div className="flex flex-wrap gap-2 items-center">
                  <span className="text-sm font-light">{t('home.career.softSkillsLabel')}: </span>
                  {
                    job.softSkills.map((skill, softKey) => (
                      <span 
                        className="bg-white/10 border border-border text-xs rounded-full px-2 py-1 hover:bg-white/0"
                        key={softKey}
                      >
                        {t(skill)}
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
