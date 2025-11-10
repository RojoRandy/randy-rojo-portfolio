import { Briefcase, Code, User } from "lucide-react";
import { useTranslation } from "react-i18next";

import resumeEn from "../static/resume/Randy_Rojo_Resume.pdf";
import resumeEs from "../static/resume/Randy_Rojo_Curriculum.pdf";

export default function AboutSection() {
  const { t, i18n } = useTranslation()

  const handleResumeDownload = () => {
    console.log(i18n);

    if(i18n.language === 'es') {
      window.open(resumeEs, '_blank');
    } else {
      window.open(resumeEn, '_blank');
    }
    
  }

  return (
    <section 
      id="about"
      className="py-24 px-4 relative"
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          {t('home.about.title1')}
          <span className="text-primary"> {t('home.about.title2')}</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              {t('home.about.role')}
            </h3>

            <p className="text-foreground">
              {t('home.about.description')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {t('home.about.contactButton')}
              </a>
              <button
                onClick={handleResumeDownload}
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 cursor-pointer">
                {t('home.about.resumeButton')}
              </button>
            </div>
          </div>

          <div className="flex flex-col md:gap-6">
            <div className="gradient-border p-6 card-hover card-reveal hover:shadow-white/20">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">{t('home.about.card1.title')}</h4>
                  <p className="text-foreground">
                    {t('home.about.card1.description')}
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
                  <h4 className="font-semibold text-lg">{t('home.about.card2.title')}</h4>
                  <p className="text-foreground">
                    {t('home.about.card2.description')}
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
                  <h4 className="font-semibold text-lg">{t('home.about.card3.title')}</h4>
                  <p className="text-foreground">
                    {t('home.about.card3.description')}
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
