import { useState } from "react"
import { cn } from "../lib/utils"

const categories = ["all", "languages", "frontend", "mobile", "backend", "databases", "tools", "aws"]

const skills = [
  // Languages
  {name: 'TypeScript', level: 95, category:'languages'},
  {name: 'JavaScript', level: 95, category:'languages'},
  {name: 'C#', level: 70, category:'languages'},
  {name: 'Python', level: 60, category:'languages'},
  
  // Frontend
  {name: 'HTML/CSS', level: 90, category:'frontend'},
  {name: 'Vue.js', level: 90, category:'frontend'},
  {name: 'Tailwind CSS', level: 80, category:'frontend'},
  {name: 'React', level: 70, category:'frontend'},
  
  // Mobile
  {name: 'React Native', level: 70, category:'mobile'},
  
  //Backend
  {name: 'Nest.js', level: 95, category:'backend'},
  {name: 'Node.js', level: 90, category:'backend'},
  {name: 'Express', level: 80, category:'backend'},
  {name: 'GraphQL', level: 70, category:'backend'},
  {name: 'FastAPI', level: 50, category:'backend'},

  //Databases
  {name: 'SQL Server', level: 85, category:'databases'},
  {name: 'PostgreSQL', level: 80, category:'databases'},
  {name: 'MySQL', level: 70, category:'databases'},
  {name: 'MongoDB', level: 60, category:'databases'},
  
  //Tools
  {name: 'Git/GitHub', level: 80, category:'tools'},
  {name: 'Figma', level: 60, category:'tools'},
  {name: 'Docker', level: 80, category:'tools'},
  {name: 'VS Code', level: 80, category:'tools'},
  
  //AWS Cloud 
  {name: 'Lambda', level: 80, category:'aws'},
  {name: 'API Gateway', level: 70, category:'aws'},
  {name: 'IAM', level: 70, category:'aws'},
  {name: 'S3', level: 70, category:'aws'},
  {name: 'Amplify', level: 70, category:'aws'},
  {name: 'CloudFront', level: 60, category:'aws'},

]

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory)

  return (
    <section 
      id='skills'
      className="py-24 px-4 relative bg-background/30"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My
          <span className="text-primary"> Skills</span>
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
                className="bg-card p-6 rounded-lg shadow-xs card-hover"
              >
                <div className="text-left mb-4">
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
