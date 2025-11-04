import { useState } from "react"
import { cn } from "../lib/utils"
import { SiJavascript, SiTypescript, SiPython, SiHtml5, SiCss3, SiTailwindcss, SiReact, SiNodedotjs, SiExpress, SiNestjs, SiGraphql, SiFastapi, SiMysql, SiPostgresql, SiMongodb, SiGithub, SiFigma, SiDocker, SiAwslambda, SiAmazonapigateway, SiAmazoniam, SiAmazons3, SiAwsamplify, SiVuedotjs } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { FaAws } from "react-icons/fa";
import { DiMsqlServer, DiVisualstudio } from "react-icons/di";

const categories = ["all", "languages", "frontend", "mobile", "backend", "databases", "tools", "aws"]

const skills = [
  // Languages
  {name: 'TypeScript', level: 95, category:'languages', icon: <SiTypescript size={40} className="group-hover:fill-sky-700" />, shadow: "hover:shadow-sky-700" },
  {name: 'JavaScript', level: 95, category:'languages', icon: <SiJavascript size={40} className="group-hover:fill-amber-300" />, shadow: "hover:shadow-amber-300" },
  {name: 'C#', level: 70, category:'languages', icon: <TbBrandCSharp size={40} className="group-hover:stroke-sky-500"/>, shadow: "hover:shadow-sky-500" },
  {name: 'Python', level: 60, category:'languages', icon: <SiPython size={40} className="group-hover:fill-yellow-500"/>, shadow: "hover:shadow-yellow-500" },
  
  // Frontend
  {name: 'HTML', level: 90, category:'frontend', icon: <SiHtml5 size={40} className="group-hover:fill-orange-600"/>, shadow: "hover:shadow-orange-600" },
  {name: 'CSS', level: 90, category:'frontend', icon: <SiCss3 size={40} className="group-hover:fill-sky-500"/>, shadow: "hover:shadow-sky-500" },
  {name: 'Vue.js', level: 90, category:'frontend', icon: <SiVuedotjs size={40} className="group-hover:fill-emerald-600"/>, shadow: "hover:shadow-emerald-600" },
  {name: 'Tailwind CSS', level: 80, category:'frontend', icon: <SiTailwindcss size={40} className="group-hover:fill-sky-500"/>, shadow: "hover:shadow-sky-500" },
  {name: 'React', level: 70, category:'frontend', icon: <SiReact size={40} className="group-hover:fill-sky-500"/>, shadow: "hover:shadow-sky-500" },
  
  // Mobile
  {name: 'React Native', level: 70, category:'mobile', icon: <SiReact size={40} className="group-hover:fill-sky-500"/>, shadow: "hover:shadow-sky-500" },
  
  //Backend
  {name: 'Nest.js', level: 95, category:'backend', icon: <SiNestjs size={40} className="group-hover:fill-red-500"/>, shadow: "hover:shadow-red-500" },
  {name: 'Node.js', level: 90, category:'backend', icon: <SiNodedotjs size={40} className="group-hover:fill-green-500"/>, shadow: "hover:shadow-green-500" },
  {name: 'Express', level: 80, category:'backend', icon: <SiExpress size={40} className="group-hover:fill-green-500"/>, shadow: "hover:shadow-green-500" },
  {name: 'GraphQL', level: 70, category:'backend', icon: <SiGraphql size={40} className="group-hover:fill-pink-500"/>, shadow: "hover:shadow-pink-500" },
  {name: 'FastAPI', level: 50, category:'backend', icon: <SiFastapi size={40} className="group-hover:fill-emerald-700"/>, shadow: "hover:shadow-emerald-700" },

  //Databases
  {name: 'SQL Server', level: 85, category:'databases', icon: <DiMsqlServer size={40} className="group-hover:fill-red-500"/>, shadow: "hover:shadow-red-500" },
  {name: 'PostgreSQL', level: 80, category:'databases', icon: <SiPostgresql size={40} className="group-hover:fill-sky-600"/>, shadow: "hover:shadow-sky-600" },
  {name: 'MySQL', level: 70, category:'databases', icon: <SiMysql size={40} className="group-hover:fill-orange-500"/>, shadow: "hover:shadow-orange-500" },
  {name: 'MongoDB', level: 60, category:'databases', icon: <SiMongodb size={40} className="group-hover:fill-green-500"/>, shadow: "hover:shadow-green-500" },
  
  //Tools
  {name: 'Git/GitHub', level: 80, category:'tools', icon: <SiGithub size={40} className="group-hover:fill-sky-500"/>, shadow: "hover:shadow-sky-500" },
  {name: 'Figma', level: 60, category:'tools', icon: <SiFigma size={40} className="group-hover:fill-orange-500"/>, shadow: "hover:shadow-orange-500" },
  {name: 'Docker', level: 80, category:'tools', icon: <SiDocker size={40} className="group-hover:fill-sky-500"/>, shadow: "hover:shadow-sky-500" },
  {name: 'VS Code', level: 80, category:'tools', icon: <DiVisualstudio size={40} className="group-hover:fill-sky-500"/>, shadow: "hover:shadow-sky-500" },
  
  //AWS Cloud 
  {name: 'Lambda', level: 80, category:'aws', icon: <SiAwslambda size={40} className="group-hover:fill-orange-500"/>, shadow: "hover:shadow-orange-500" },
  {name: 'API Gateway', level: 70, category:'aws', icon: <SiAmazonapigateway size={40} className="group-hover:fill-yellow-500"/>, shadow: "hover:shadow-yellow-500" },
  {name: 'IAM', level: 70, category:'aws', icon: <SiAmazoniam size={40} className="group-hover:fill-red-500"/>, shadow: "hover:shadow-red-500" },
  {name: 'S3', level: 70, category:'aws', icon: <SiAmazons3 size={40} className="group-hover:fill-green-500"/>, shadow: "hover:shadow-green-500" },
  {name: 'Amplify', level: 70, category:'aws', icon: <SiAwsamplify size={40} className="group-hover:fill-yellow-500"/>, shadow: "hover:shadow-yellow-500" },
  {name: 'CloudFront', level: 60, category:'aws', icon: <FaAws size={40} className="group-hover:fill-yellow-500"/>, shadow: "hover:shadow-yellow-500" },

]

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory).sort((a,b) => b.level - a.level)

  return (
    <section 
      id='skills'
      className="py-24 px-4 relative bg-background/30"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Mis
          <span className="text-primary"> Habilidades</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {
            categories.map((category, key) => (
              <button 
                key={key} 
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-5 py-2 rounded-full transition-colors duration-300 capitalize cursor-pointer hover:bg-primary",
                  activeCategory === category ? "bg-primary text-primary-foreground" : "bg-background/70 text-foreground"
                )}
              >
                {category}
              </button>
            ))
          }
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {
            filteredSkills.map((skill, key) => (
              <div 
                key={key}
                className={cn("bg-card p-6 rounded-lg shadow-xs card-hover card-reveal group",
                  skill.shadow ?? ''
                )}
              >
                <div className="flex flex-col justify-center items-center gap-2 mb-2">
                  <div>
                    {skill.icon ? (skill.icon) : ''}
                  </div>
                  <h3 className="font-semibold text-lg">{skill.name}</h3>
                </div>
                <div className="w-full bg-background/50 h-2 rounded-full overflow-hidden">
                  <div 
                    className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease_out]" 
                    style={{
                      width: skill.level + '%'
                    }}  
                  />
                </div>

                <div className="text-right mt-1">
                  <span className="text-sm text-foreground">{skill.level}%</span>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}
